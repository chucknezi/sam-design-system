import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBasic } from './search-basic.component';
import { SdsSearchModule, SdsTextModule } from '@gsa-sam/components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchBasic],
  imports: [
    CommonModule,
    FormsModule,
    SdsSearchModule,
    SdsTextModule


  ],
  exports: [SearchBasic],
  bootstrap: [SearchBasic]
})
export class SearchBasicModule {}
