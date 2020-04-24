import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBasic } from './text-basic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsTextModule } from '@gsa-sam/components';
import { SdsFormlyModule } from '@sam-design-system/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [TextBasic],
  imports: [CommonModule,
    FormsModule,
    SdsTextModule,
    ReactiveFormsModule,
    SdsFormlyModule, 
    FormsModule,
    NgSelectModule,
    FormlyModule.forRoot()
],
  exports: [TextBasic],
  bootstrap: [TextBasic]
})
export class TextBasicModule {}
