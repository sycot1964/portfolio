import { Component } from '@angular/core';
import { CommonComponent } from './../../common/common.component';
import * as models from './../../models';


@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html'
})

// .html파일에서 사용할 변수, 함수등을 선언한다.
export class AppWroksPageComponent extends CommonComponent<models.TestParams, models.TestResult>{
}
