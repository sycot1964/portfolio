import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ProfileInfo } from "src/app/vo/profileInfo";

@Component({
  selector: "profile-component",
  templateUrl: "./profile.component.html"
})
export class ProfileComponent {
  // 프로필 정보
  @Input() profileInfo: ProfileInfo = null;

  constructor(private router: Router) {}

  // 프로필 사진 클릭시, 해당 프로필로 천이하는 처리
  onClickPicture() {
    if (!this.profileInfo || !this.profileInfo.linkPath) return;

    // this.router.navigateByUrl(this.profileInfo.linkPath);
    this.router.navigate([this.profileInfo.linkPath], { queryParams: { order: 'popular', dataPath: this.profileInfo.linkPath } });
  }
}
