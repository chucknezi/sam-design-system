import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components'
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-side-menu-filters-sample',
  templateUrl: 'side-menu-filters-sample.component.html'
})

export class SideMenuFiltersSampleComponent implements OnInit{

  results: any = {};
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
    /**
   * Event when something is checked/selected in the grid
   */
  public filterChange$ = new BehaviorSubject<object>(null);


  fields: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Keyword' },
      fieldGroup: [{
        key: 'keyword',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Keyword',
          hideLabel: true
        },

      }]
    },

    {
      key: 'searchEntity',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Entity' },
      fieldGroup: [
        {
          key: 'legalBusinessName',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: '',
            inputType: 'text',
          },
        },
        {
          key: 'uniqueEntityIdSam',
          type: 'input',
          templateOptions: {
            required: true,
            label: 'Unique Entity ID (SAM)',
            placeholder: '',
            min: 13,
            max: 40,
            inputType: 'number',
            inputStyle: 'error',
          },
        },
        {
          key: 'cageNcge',
          type: 'input',
          templateOptions: {
            label: 'CAGE/NCAGE',
            placeholder: '',
            inputType: 'text',
          },
        },
        {
          key: 'uniqueEntityIdDuns',
          type: 'input',
          templateOptions: {
            required: true,
            label: 'Unique Entity ID (DUNS)',
            placeholder: '',
            min: 13,
            max: 40,
            inputType: 'number',
            inputStyle: 'error',
          },
        }
      ],
    },
    {
      key: 'status',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Status' },
      fieldGroup: [
        {
          key: 'statusCheckbox',
          type: 'multicheckbox',
          templateOptions: {
            options: [
              {
                key: 'Active',
                value: 'Active'
              },
              {
                key: 'Draft',
                value: 'Draft'
              },
              {
                key: 'Expired',
                value: 'Expired'
              },
              {
                key: 'InProgress',
                value: 'In Progress'
              }
            ]
          },
        }
      ]
    },
    {
      key: 'expirationDate',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Expiration Date' },
      fieldGroup: [
        {
          key: 'expirationDateOption',
          type: 'radio',
          templateOptions: {
            options: [
              { label: '30 Days', value: '30' },
              { label: '60 Days', value: '60' },
              { label: '90 Days', value: '90' },

            ]
          },
        }
      ]
    },
    {
      key: 'addressUpdate',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Address Update' },
      fieldGroup: [
        {
          key: 'addressUpdateOption',
          type: 'radio',
          templateOptions: {
            options: [
              { label: 'Update Required', value: 'adrupr' },
              { label: 'Update Not Required', value: 'adrupn' },

            ]
          },
        }
      ]
    },
    {
      key: 'entityType',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Entity Type' },
      fieldGroup: [
        {
          key: 'entityType',
          type: 'select',
          templateOptions: {
            label: 'Entity Type',
            multiple: false,
            options: [
              { label: 'Contract Opportunities', value: 'co' },
              { label: 'Entity Information', value: 'ei' },
              { label: 'Assitance Listings', value: 'al' },
              { label: 'Contract Data', value: 'cd' },
              { label: 'Federal Heirarchy', value: 'fh' },
              { label: 'Wage Determination', value: 'wd' },
            ],
          },
        },
      ]
    }
  ];
  public ngOnInit() {
    this.filterChange$.subscribe(
      res =>
        this.results = res
  );
  }

}