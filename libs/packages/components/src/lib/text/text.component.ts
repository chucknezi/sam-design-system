import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


const noop = () => {};

@Component({
  selector: 'sds-text',
  template: ` <input [(ngModel)]="value" class="usa-input" (blur)="onBlur()"/>
  <br/>
  <sds-text-child [inputtest]="value"></sds-text-child>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SdsTextComponent),
      multi: true
    }
  ]
})
export class SdsTextComponent implements ControlValueAccessor {
   private innerValue;

   private onTouchedCallback: () => {};
   private onChangeCallback: (_: any) => {};

   get value(): any {
       return this.innerValue;
   }

   set value(v: any) {
       if (v !== this.innerValue) {
           this.innerValue = v;
           this.onChangeCallback(v);
       }
   }

   onBlur() {
       this.onTouchedCallback();
   }

   writeValue(value: any) {
       if (value !== this.innerValue) {
           this.innerValue = value;
       }
   }

   registerOnChange(fn: any) {
       this.onChangeCallback = fn;
   }

   registerOnTouched(fn: any) {
       this.onTouchedCallback = fn;
   }
}
