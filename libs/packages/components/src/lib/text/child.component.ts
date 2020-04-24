import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'sds-text-child',
  template: `
  <span class="sds-tag sds-tag--chip" *ngIf="inputtest">
  {{inputtest}}
  </span>
  `
})
export class SdsTextChildComponent  {
    @Input() inputtest;
}

