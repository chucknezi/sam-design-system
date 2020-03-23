import { IntroductionModule } from './pages/introduction/introduction.module';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { OverviewModule } from './pages/overview/overview.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';

/* Layout / Components */
import { ROUTES as HEADER_ROUTES, HeaderModule } from './components/header/header.module';
import { ROUTES as FOOTER_ROUTES, FooterModule } from './components/footer/footer.module';
import { ROUTES as SUBHEADER_ROUTES, SubHeaderModule } from './components/subheader/subheader.module';
import { ROUTES as DIALOG_ROUTES, DialogModule } from './components/dialog/dialog.module';
import { ROUTES as COLLAPSE_ROUTES, CollapseModule } from './components/collapse/collapse.module';
import { ROUTES as ACTIONS_ROUTES, ActionsModule } from './components/actions/actions.module';
import { ROUTES as PAGINATION_ROUTES, PaginationModule } from './components/pagination/pagination.module';

/* Form Types */
import { ROUTES as INPUT_ROUTES, InputModule } from './components/input/input.module';
import { ROUTES as TEXT_AREA_ROUTES, TextAreaModule } from './components/textarea/textarea.module';
import { ROUTES as CHECKBOX_ROUTES, CheckboxModule } from './components/checkbox/checkbox.module';
import { ROUTES as MULTI_CHECKBOX_ROUTES, MultiCheckboxModule } from './components/multicheckbox/multicheckbox.module';
import { ROUTES as RADIO_ROUTES, RadioModule } from './components/radio/radio.module';
import { ROUTES as SELECT_ROUTES, SelectModule } from './components/select/select.module';

/* Form Wrappers */
import { ROUTES as FORM_FIELD_ROUTES, FormFieldModule } from './components/form-field/form-field.module';
import { ROUTES as FILTER_WRAPPER_ROUTES, FilterWrapperModule } from './components/filterwrapper/filterwrapper.module';
import { ROUTES as ACCORDION_WRAPPER_ROUTES, AccordionWrapperModule } from './components/accordionwrapper/accordionwrapper.module';

/* Utilities */
import { ROUTES as ICONS_ROUTES, IconsModule } from './components/icons/icons.module';


import { DocumentationSharedModule } from './shared';
import { OverviewComponent } from './pages/overview/overview.component';

declare var require: any;

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components/header' },
  { path: 'overview', component: OverviewComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'components', pathMatch: 'full', redirectTo: 'components/alert' },
  { path: 'components/header', children: HEADER_ROUTES },
  { path: 'components/footer', children: FOOTER_ROUTES },
  { path: 'components/subheader', children: SUBHEADER_ROUTES },
  { path: 'components/dialog', children: DIALOG_ROUTES },
  { path: 'components/collapse', children: COLLAPSE_ROUTES },
  { path: 'components/actions', children: ACTIONS_ROUTES },
  { path: 'components/pagination', children: PAGINATION_ROUTES },
  { path: 'components/input', children: INPUT_ROUTES },
  { path: 'components/textarea', children: TEXT_AREA_ROUTES },
  { path: 'components/checkbox', children: CHECKBOX_ROUTES },
  { path: 'components/multicheckbox', children: MULTI_CHECKBOX_ROUTES },
  { path: 'components/radio', children: RADIO_ROUTES },
  { path: 'components/select', children: SELECT_ROUTES },
  { path: 'components/form-field', children: FORM_FIELD_ROUTES },
  { path: 'components/filterwrapper', children: FILTER_WRAPPER_ROUTES },
  { path: 'components/accordionwrapper', children: ACCORDION_WRAPPER_ROUTES },
  { path: 'components/icons', children: ICONS_ROUTES },
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationSharedModule,
    RouterModule.forChild(ROUTES),
    HeaderModule,
    FooterModule,
    SubHeaderModule,
    DialogModule,
    CollapseModule,
    ActionsModule,
    PaginationModule,
    InputModule,
    OverviewModule,
    IntroductionModule,
    TextAreaModule,
    CheckboxModule,
    MultiCheckboxModule,
    RadioModule,
    SelectModule,
    FormFieldModule,
    FilterWrapperModule,
    AccordionWrapperModule,
    IconsModule
  ]
})
export class DocumentationModule {
  constructor() {
    library.add(fas, sds);
  }
}
