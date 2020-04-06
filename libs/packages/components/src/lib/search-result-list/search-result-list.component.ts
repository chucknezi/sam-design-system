import { Component, Input, ContentChild, TemplateRef, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'sds-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SdsSearchResultListComponent implements AfterViewInit{

  @Input() messageInfoData: any;

  /**
   * List of items
   */
  @Input() model: any[];

  /**
   * Show divider between results
   */
  @Input() divider = true;

  /**
   * Child Template to be used to display the data for each item in the list of items
   */
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;

  ngAfterViewInit(){
    console.log(this.messageInfoData);
    console.log(this.model[0]);
  }
}
