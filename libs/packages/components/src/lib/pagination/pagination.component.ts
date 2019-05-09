import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'sds-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  ngOnInit(): void {
    this.maintainPreviousValue();
  }

  constructor(private change: ChangeDetectorRef) { }


  /**
   * Stores the previous number. Used when focus out if field empty
   */
  private maintainPreviousValue() {
    this.previousNumber = this.page.pageNumber.valueOf();
  }

  /**
   * Input field for the current page
   */
  @ViewChild('currentPage') currentPageField: ElementRef;

  /**
   * Output of the page model object
   */
  @Output()
  pageChange = new EventEmitter<PageModel>();

  /**
   * 
   */
  @Input()
  page: PageModel = new PageModel();


  /**
   * 
   */
  debounceTime: number = 500;

  /**
    * 
    */
  id: string = "id"

  /**
   * 
   */
  private previousNumber: number;


  /**
   * timeout id of the debounce time 
   */
  timeoutNumber: number;

  /**
   * Drop down options for page size
   */
  public options = [
    { label: '25', value: 25 },
    { label: '50', value: 50 },
    { label: '100', value: 100 }
  ];

  /**
   * previous page lowers page number by one within range
   */
  previousPage() {
    if (this.page.pageNumber > 1) {
      this.page.pageNumber--;
      this.maintainPreviousValue();
      this.pageChange.emit(this.page);
    }
  }

  /**
   * next page increase page number by one within range
   */
  nextPage() {
    if (this.page.pageNumber < this.page.totalPages) {
      this.page.pageNumber++;
      this.maintainPreviousValue();
      this.pageChange.emit(this.page);
    }
  }

  /**
   * current page changes sets new value if within range
   * @param newValue 
   */
  valuechange(newValue?: number) {
    window.clearTimeout(this.timeoutNumber);
    this.timeoutNumber = window.setTimeout(() => {
      if (newValue || newValue === 0) {
        newValue = this.handleInputOutsideBounds(newValue);
        if (newValue >= 1 && newValue <= this.page.totalPages) {
          this.page.pageNumber = newValue;
          this.maintainPreviousValue();
          this.pageChange.emit(this.page);
          this.change.detectChanges();
        }
      } else {

        if (this.page.pageNumber) {
          this.maintainPreviousValue();
        }
      }
    }, this.debounceTime);
  }

  /**
   * adjusts the value if not within the page limit above or below
   * @param newValue handles
   */
  private handleInputOutsideBounds(newValue?: number) {
    if (newValue < 1) {
      newValue = 1;
      this.currentPageField.nativeElement.value = newValue;
    }
    else if (newValue > this.page.totalPages) {
      newValue = this.page.totalPages;
      this.currentPageField.nativeElement.value = newValue;
    }
    return newValue;
  }

  /**
   * current page focus out will replace with previous valid if empty
   */
  currentPageFocusOut() {
    if (this.currentPageField.nativeElement.value === '') {
      this.currentPageField.nativeElement.value = this.page.pageNumber = this.previousNumber;
      this.change.detectChanges();
    }
  }

  /**
   * page size selection change
   */
  onSelectChange() {
    this.pageChange.emit(this.page);
  }

}


export class paginationConfiguration {

  /**
   * used to distinguish fields
   */
  id: string;

  /**
   * debounce time
   */
  debounceTime: number;
}

export class PageModel {

  /**
   * current page number
   */
  pageNumber: number;

  /**
   * size of page ex 25, 50,100
   */
  pageSize: number;

  /**
   * total number of pages
   */
  totalPages: number;
}
