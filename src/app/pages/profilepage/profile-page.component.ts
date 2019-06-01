import {ProfileInfo} from "src/app/vo/profileInfo";
import {Component} from "@angular/core";
import {CommonComponent} from "./../../common/common.component";
import {ActivatedRoute} from "@angular/router";
import * as models from "./../../models";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html"
})

// .html파일에서 사용할 변수, 함수등을 선언한다.
export class AppProfilePageComponent extends CommonComponent<models.TestParams,
  models.TestResult> {
  TAG_PROFILE = "profile";
  TAG_WORKS = "works";
  TAG_CONTACT = "contact";
  TAG_SOCIALS = "socials";
  // @Input() profileInfo: ProfileInfo = null;
  profileInfo: ProfileInfo = {
    linkPath: "anProfilePage",
    name: "안태웅",
    comment: "TEST COMMENT1",
    pictureUrl:
      "https://img.insight.co.kr/static/2018/05/08/700/6341nxg8t75g9r2ouc20.jpg"
  };

  profileData = null;


  getHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });


  constructor(private route: ActivatedRoute, private http: HttpClient) {
    super();
    this.getTestData();
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params['id']); // {order: "popular"}
        console.log(params); // {order: "popular"}

        // this.order = params.order;
        // console.log(this.order); // popular
      });
  }


  getTestData() {
    this.http.get('./assets/demo.json'
      , {headers: this.getHeaders, withCredentials: true}).subscribe(
      (res) => {
        this.profileData = res;
        this.profileData['biographyList'] = this.profileData['biography'].split('&n');
      }
    );
  }
}
