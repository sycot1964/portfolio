import { ProfileInfo } from './../../vo/profileInfo';
import { Component } from '@angular/core';
import { CommonComponent } from './../../common/common.component';
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

  ngOnInit() {
    // TODO: 데이터를 공유하기 위한 테스트
    const profileInfo1: ProfileInfo = {
      linkPath: 'anProfilePage',
      name: '안태웅',
      comment: 'TEST COMMENT1',
      pictureUrl: 'https://img.insight.co.kr/static/2018/05/08/700/6341nxg8t75g9r2ouc20.jpg',
    }; 
    const profileInfo2: ProfileInfo = {
      linkPath: 'yuProfilePage',
      name: '유호건',
      comment: 'TEST COMMENT2',
      pictureUrl: 'https://img.insight.co.kr/static/2018/05/08/700/6341nxg8t75g9r2ouc20.jpg',
    }; 
    const profileInfo3: ProfileInfo = {
      linkPath: 'parkProfilePage',
      name: '박장호',
      comment: 'TEST COMMENT3',
      pictureUrl: 'https://img.insight.co.kr/static/2018/05/08/700/6341nxg8t75g9r2ouc20.jpg',
    }; 

    this.profileInfoList.push(profileInfo1);
    this.profileInfoList.push(profileInfo2);
    this.profileInfoList.push(profileInfo3);
  }
}
