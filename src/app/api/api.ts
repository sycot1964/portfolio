import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProfileInfo } from '../vo/profileInfo';

// TODO: API통신 클래스 작성 요청
// Http통신을 위한 클래스
@Injectable()
export class Api {

  // Http통신 을 위한 Http클라이언트를 취득한다.
  constructor(private http: HttpClient) {}

  async getProfileInfo(params): Promise<any> {
      return this.http.get("URL")
      .toPromise().then(res => res as ProfileInfo)
      .catch(this.handlError);
  }
  
  private handlError(err: any): Promise<any> {
    return Promise.reject(err.message || err);
  }
}

