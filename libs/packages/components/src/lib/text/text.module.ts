import { NgModule } from '@angular/core';

import { SdsTextComponent } from './text.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, A11yModule, FormsModule],
  exports: [SdsTextComponent],
  declarations: [SdsTextComponent],
  providers: []
})
export class SdsTextModule {}
