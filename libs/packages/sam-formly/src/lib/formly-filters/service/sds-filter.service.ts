import { Subject } from 'rxjs';
export class SDSFilterService {

    /**
     * Filter update subject
     */
    private updateFilterSource = new Subject<any>();


    /**
     * Observable to subscribe to for get updates of the filter
     */
    filterUpdate = this.updateFilterSource.asObservable();

    /**
     * Update the filter
     * @param filterData
     */
    updateFilter(filterData: any) {
        this.updateFilterSource.next(filterData);
    }

}