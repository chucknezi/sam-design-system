import {
  Component, Input, Output,
  ChangeDetectionStrategy, ChangeDetectorRef,
  EventEmitter, Optional, OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { pairwise } from 'rxjs/operators';
import { Router, ActivatedRoute,} from '@angular/router';
import * as qs from 'qs';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'sds-filters',
  template: `
      <formly-form [form]="form" [fields]="fields" [options]="options" [model]="model"></formly-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SdsFiltersComponent implements OnInit {
  /**
   * Modeal update
   */
  modelChange = new Subject<any>();

  /**
   * Pass in a Form Group for ReactiveForms Support
   */
  @Input() public form: FormGroup;

  /**
   *  Fields are used to configure the UI components
   */
  @Input() public fields: FormlyFieldConfig[];

  /**
   *  Model used to display the filter values.
   */
  @Input() public model: any;

  /**
   *    Options for the form.
   */
  @Input() public options: FormlyFormOptions = {};

  /**
   *  Emit results when model updated
   */
  @Output() filterChange = new EventEmitter<object[]>();

  /**
   * debounce time for current page input
   */
  @Input() debounceTime = 0;

  routeTrigger = '';
  constructor(
    @Optional()
    private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const _isObj = (obj: any): boolean => typeof obj === 'object' && obj !== null;
    const _isEmpty = (obj: any): boolean => Object.keys(obj).length === 0;
    const overwrite = (baseObj: any, newObj: any) => {
      const result = {};
      for (const key in baseObj) {
        if (_isObj(baseObj[key])) {
          result[key] = overwrite(baseObj[key], newObj[key] || {});
        } else {
          result[key] = newObj[key] || null;
        }
      }
      return result;
    };
    this.route.queryParams.subscribe(params => {
      if (_isEmpty(this.form.getRawValue())) {
        const query = qs.parse(localStorage.getItem(params['ref']));
       // const query = this.convertToModel(localStorage.getItem(params['ref']));
        this.form.patchValue({
          ...this.model, ...query
        });
      
      } else {
        const updatedFormValue = overwrite(
          this.form.getRawValue(),
          qs.parse(localStorage.getItem(params['ref']))
        );
        this.form.setValue(updatedFormValue);
      }
    });

    this.form.valueChanges
      .pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        const params = this.convertToParam(next);
        const md5 = new Md5();
        const hashCode = md5.appendStr(qs.stringify(params)).end()
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { ref: hashCode },
          queryParamsHandling: 'merge'
        });
        localStorage.setItem(hashCode.toString(), qs.stringify(params));
        this.filterChange.emit(next);
        if (this.formlyUpdateComunicationService) {
          this.formlyUpdateComunicationService.updateFilter(next);
        }
      });
  }


  // ngOnInit(): void {
  //   localStorage.clear();
  //   const _isObj = (obj: any): boolean => typeof obj === 'object' && obj !== null;
  //   const _isEmpty = (obj: any): boolean => Object.keys(obj).length === 0;
  //   const overwrite = (baseObj: any, newObj: any) => {
  //     const result = {};
  //     for (const key in baseObj) {
  //       if (_isObj(baseObj[key])) {
  //         result[key] = overwrite(baseObj[key], newObj[key] || {});
  //       } else {
  //         result[key] = newObj[key] || null;
  //       }
  //     }
  //     return result;
  //   };
  //   this.route.queryParams.subscribe(params => {
  //     const paramModel = JSON.parse(localStorage.getItem(params['ref']));

  //     if (_isEmpty(this.form.getRawValue())) {
  //       this.form.patchValue({
  //         ...this.model, ...paramModel
  //       });
  //     } else {
  //       const updatedFormValue = overwrite(
  //         this.form.getRawValue(),
  //         paramModel
  //       );
  //       this.form.setValue(updatedFormValue);
  //     }
  //   });

  //   this.form.valueChanges
  //     .pipe(pairwise())
  //     .subscribe(([prev, next]: [any, any]) => {
  //       const md5 = new Md5();
  //       const hashCode = md5.appendStr(JSON.stringify(next)).end()
  //       this.router.navigate([], {
  //         relativeTo: this.route,
  //         queryParams: { ref: hashCode },
  //         queryParamsHandling: 'merge'
  //       });
  //       localStorage.setItem(hashCode.toString(), JSON.stringify(next));
  //       this.filterChange.emit(next);
  //       if (this.formlyUpdateComunicationService) {
  //         this.formlyUpdateComunicationService.updateFilter(next);
  //       }
  //     });
  // }

  convertToParam(filters) {
    const encodedValues = qs.stringify(filters,{
      skipNulls: true, encode: false
    });
    const target = {};
    encodedValues.split('&').forEach(pair => {
      if (pair !== '') {
        const splitpair = pair.split('=');
        target[splitpair[0]] = splitpair[1];
      }
    });
    return target;
  }

  convertToModel(filters) {
    let obj = {};
    const encodedValues = qs.stringify(filters, {
      skipNulls: true,
      encode: false
    });
    obj = qs.parse(encodedValues);
    return obj;
  }
}