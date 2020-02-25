import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FormlySampleModule } from './feature/formly-sample/formly.module';
import { FormlyInputComponent } from './feature/formly-sample/formly-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FilterWrapperComponent } from './feature/filter-wrapper/filter-wrapper.component';
import { FilterWrapperSampleModule } from './feature/filter-wrapper/filter-wrapper.module';
import { FormlyFormsComponent } from './feature/formly-forms/formly-forms.component';
import { FormlyFormsModule } from './feature/formly-forms/formly-forms.module';
import { FormlyConditionalComponent } from './feature/formly-conditional/formly-conditional.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilterNgSelectComponent } from './feature/filter-ngselect/filter-ngselect.component';
import { FilterNgSelectSampleModule } from './feature/filter-ngselect/filter-ngselect.module';
export const ROUTES: Routes = [
  { path: 'formlyInput', component: FormlyInputComponent },
  { path: 'formlyFilters', component: FilterWrapperComponent},
  { path: 'formlyNgSelect', component: FilterNgSelectComponent},
  { path: 'formlyForms', component: FormlyFormsComponent },
  { path: 'formlyConditional', component:FormlyConditionalComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormlyModule,
    ReactiveFormsModule,
    NgSelectModule,
    FontAwesomeModule,
    RouterModule.forChild(ROUTES),
    FormlySampleModule,
    FormlyFormsModule,
    FilterWrapperSampleModule,
    FilterNgSelectSampleModule
  ],
  exports: [RouterModule],
  declarations: [FormlyConditionalComponent]
})
export class SamFormlySampleModule {
  constructor() {
    library.add(fas, sds);
  }
}