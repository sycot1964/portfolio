import { Component, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: "profile-works-component",
  templateUrl: "./profile.works.component.html"
})

export class ProfileWorksComponent {
    modalRef: BsModalRef;
    items: any[];
   
    constructor(private modalService: BsModalService) {
      this.items = Array(15).fill(0);
    }
   
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
}
