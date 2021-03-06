import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultListSampleDataComponent } from './search-result-list-sample-data.component';
import { SdsSubheaderModule, SdsActionsMenuModule } from '@sam-design-system/layouts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SearchResultListSampleDataComponent],
  imports: [
    CommonModule, FormsModule, SdsSubheaderModule, FontAwesomeModule, SdsActionsMenuModule

  ], exports: [SearchResultListSampleDataComponent]
})
export class SearchResultListSampleDataComponentModule{}
