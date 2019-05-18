import { Component, Input } from "@angular/core";

@Component({
  selector: "worklist-component",
  templateUrl: "./worklist.component.html"
})

export class WorkListComponent {

  @Input() title: string = '';
  // @Input() worksList: any = null;

  headElements = ['No', '内容', '使用言語', '期間'];
  worksList = [
    { no: 1, contents: "첫번째 프로젝트", leng: "TypeScript, GoLang, MySQL", term: "2019/01/05 ~ 2019/05/05", link: "anProfilePage" },
    { no: 2, contents: "두번째 프로젝트", leng: "TypeScript, GoLang, MySQL", term: "2019/01/05 ~ 2019/05/05", link: "parkProfilePage" },
    { no: 3, contents: "세번째 프로젝트", leng: "TypeScript, GoLang, MySQL", term: "2019/01/05 ~ 2019/05/05", link: "yuProfilePage" },
    { no: 4, contents: "네번째 프로젝트", leng: "TypeScript, GoLang, MySQL", term: "2019/01/05 ~ 2019/05/05", link: "worksPage" }
  ];
}
