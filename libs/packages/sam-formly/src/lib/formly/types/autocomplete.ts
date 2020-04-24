import {  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { AbstractSdsFormly } from '../sds-formly';
import { SDSAutocompleteSearchComponent } from '@gsa-sam/components'

@Component({
  selector: 'sds-formly-field-autocomplete',
  template: `
  <sds-search-autocomplete [formControl]="formControl"></sds-search-autocomplete>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldAutoCompleteComponent extends AbstractSdsFormly {

 @ViewChild(SDSAutocompleteSearchComponent) public template: SDSAutocompleteSearchComponent;

  constructor (_cdr: ChangeDetectorRef) {
    super(); /* istanbul ignore next */
    this.cdr = _cdr;
  }
 }
