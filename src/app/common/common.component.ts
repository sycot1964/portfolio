import { asQueryList } from '@angular/core/src/view';

export class CommonComponent<P, R> {

  getParams() {
    return "";
  }

  beforeExecAsync(P) {
    return [];
  }

  async exec() {
    const params = this.getParams();

    const msgList = this.beforeExecAsync(params);

    if (msgList) {
      if (msgList.length > 0) {
        console.error(msgList[0]);
      }
    }
  }

}
