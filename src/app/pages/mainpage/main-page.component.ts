import { ProfileInfo } from './../../vo/profileInfo';
import { Component } from '@angular/core';
import { CommonComponent } from './../../common/common.component';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as models from './../../models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

// .html파일에서 사용할 변수, 함수등을 선언한다.
export class AppMainPageComponent extends CommonComponent<models.TestParams, models.TestResult>{
  
  memberTitle = 'Members';
  profileInfoList: ProfileInfo[] = [];
  workTitle = 'Works';

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    super();
    this.getTestData();
  }

  getHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });

  getTestData() {
    this.http.get('./assets/profileInfoList.json'
      , {headers: this.getHeaders, withCredentials: true}).subscribe(
      (res) => {
        this.profileInfoList = res["profileInfoList"] as ProfileInfo[];
      }
    );
  }
}
