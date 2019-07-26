/* entryComponents: NzDrawerCustomComponent */

import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd';
import { MyComponentComponent } from './my-component/my-component.component';

@Component({
  selector: 'nz-demo-drawer-service',
  template: `
    <button nz-button nzType="primary" (click)="openComponent()">open</button>
  `
})
export class NzDemoDrawerServiceComponent {
  drawerRef;

  constructor(private drawerService: NzDrawerService) {}

  openComponent() {
    this.drawerRef = this.drawerService.create({
      nzTitle: 'Template',
      nzContent: MyComponentComponent
    });
  }

}
