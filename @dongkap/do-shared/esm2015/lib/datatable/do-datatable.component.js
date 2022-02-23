import { Component, Input, ViewEncapsulation, Inject, LOCALE_ID, ChangeDetectorRef, ChangeDetectionStrategy, EventEmitter, Output, } from '@angular/core';
import { Subject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ColumnMode, SelectionType, SortType } from '@swimlane/ngx-datatable';
import { HTTP_SERVICE } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "./header/do-datatable-header.component";
import * as i2 from "./base/do-datatable-base.component";
export class DoDatatableComponent {
    constructor(locale, injector) {
        this.locale = locale;
        this.injector = injector;
        this.rows = [];
        this.columns = [];
        this.filters = [];
        this.selected = [];
        this.limit = 10;
        this.count = 0;
        this.offset = 0;
        this.externalPaging = false;
        this.externalSorting = false;
        this.loadingIndicator = false;
        this.scrollbarH = true;
        this.scrollbarV = false;
        this.reorderable = true;
        this.sortType = SortType.single;
        this.selectionType = SelectionType.checkbox;
        this.columnMode = ColumnMode.force;
        this.headerHeight = 40;
        this.footerHeight = 'auto';
        this.rowHeight = 'auto';
        this.header = true;
        this.column = true;
        this.footer = true;
        this.add = true;
        this.edit = true;
        this.delete = true;
        this.filter = true;
        this.startWithOpenData = true;
        this.filterEvent = false;
        this.autoLoad = true;
        this.onAdd = new EventEmitter();
        this.onEdit = new EventEmitter();
        this.onDelete = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onButtonCell = new EventEmitter();
        this.onLoading = new EventEmitter();
        this.onSelected = new EventEmitter();
        this.isDelete = false;
        this.destroy$ = new Subject();
        this.pageOffset = 0;
        this.http = injector.get(HTTP_SERVICE);
        this.cdref = injector.get(ChangeDetectorRef);
    }
    //  @ViewChild('datatable', {static: false}) datatable: DatatableComponent;
    set filterFn(keyword) {
        this.keywordParam = keyword;
        this._keyword = keyword;
        this.count = 0;
        this.offset = 0;
    }
    set filterDoFetchFn(keyword) {
        if (keyword) {
            this.keywordParam = keyword;
            this._keyword = keyword;
        }
        this.count = 0;
        this.offset = 0;
        this.fetch();
    }
    set reloadFn(reload) {
        if (reload && !this.loadingIndicator) {
            this.selected = [];
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    }
    ngOnInit() {
        if (this.startWithOpenData) {
            this.fetch();
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    doSearch(search) {
        this.isDelete = false;
        this.onSearch.emit(search);
        if (this.keywordParam) {
            this._keyword = this.keywordParam;
            this._keyword['_all'] = search;
        }
        else {
            this._keyword = {
                _all: search,
            };
        }
        this.count = 0;
        this.offset = 0;
        this.fetch();
    }
    doFilter(search) {
        this.isDelete = false;
        if (this.filterEvent) {
            this.onFilter.emit(search);
        }
        else {
            if (this.keywordParam) {
                this._keyword = this.keywordParam;
            }
            else {
                this._keyword = {};
            }
            this.filters.forEach(filter => {
                switch (filter.type) {
                    case 'input':
                    case 'datepicker':
                    case 'radio':
                        this._keyword[filter.controlName] = search[filter.controlName] ? search[filter.controlName] : null;
                        break;
                    case 'select':
                        this._keyword[filter.controlName] = search[filter.controlName].label ? search[filter.controlName] : null;
                        break;
                    case 'checkbox':
                        this._keyword[filter.controlName] = search[filter.controlName].name ? search[filter.controlName].name : null;
                        break;
                    default:
                        break;
                }
            });
            this.count = 0;
            this.offset = 0;
            this.fetch();
        }
    }
    doAdd(add) {
        this.onAdd.emit(add);
    }
    doEdit(row) {
        this.onEdit.emit(row);
    }
    doDelete() {
        this.onDelete.emit(this.selected);
    }
    onKeyDown(event) {
        if (event.key.toUpperCase() === 'ENTER') {
            this.doSearch(this._search);
        }
    }
    fetch() {
        if (this.api) {
            this.externalPaging = true;
            this.externalSorting = true;
            this.getRequest().subscribe(rows => {
                this.rows = rows;
                this.cdref.detectChanges();
            });
        }
    }
    setPage(page) {
        this.pageOffset = page.offset * this.limit;
        this.fetch();
    }
    onSort(order) {
        if (order) {
            if (Array.isArray(order.sorts)) {
                order.sorts.forEach(sort => {
                    if (sort['dir'] === 'asc') {
                        this.sort = { asc: [sort['prop']] };
                    }
                    else {
                        this.sort = { desc: [sort['prop']] };
                    }
                });
            }
        }
        this.fetch();
    }
    onSelect({ selected }) {
        if (Array.isArray(selected)) {
            if (selected.length > 0) {
                if (this.delete) {
                    this.isDelete = true;
                }
            }
            else {
                this.isDelete = false;
            }
            this.selected = selected;
            this.onSelected.emit(this.selected);
        }
        else {
            this.isDelete = false;
        }
    }
    onClickButton(event) {
        this.onButtonCell.emit(event);
    }
    getRequest() {
        const body = {
            offset: this.pageOffset,
            limit: this.limit,
            keyword: this._keyword,
            order: this.sort,
        };
        this.loadingIndicator = true;
        this.onLoading.emit(this.loadingIndicator);
        return this.http.HTTP_AUTH(this.api, body)
            .pipe(map((response) => {
            this.count = Number(response.totalRecord);
            this.loadingIndicator = false;
            this.onLoading.emit(this.loadingIndicator);
            return response['data'];
        }), catchError(() => {
            this.loadingIndicator = false;
            this.count = 0;
            this.onLoading.emit(this.loadingIndicator);
            return of([]);
        }));
    }
}
DoDatatableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableComponent, deps: [{ token: LOCALE_ID }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DoDatatableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatatableComponent, selector: "do-datatable", inputs: { rows: "rows", columns: "columns", filters: "filters", selected: "selected", limit: "limit", count: "count", offset: "offset", externalPaging: "externalPaging", externalSorting: "externalSorting", loadingIndicator: "loadingIndicator", scrollbarH: "scrollbarH", scrollbarV: "scrollbarV", reorderable: "reorderable", sortType: "sortType", messages: "messages", selectionType: "selectionType", columnMode: "columnMode", headerHeight: "headerHeight", footerHeight: "footerHeight", rowHeight: "rowHeight", header: "header", column: "column", footer: "footer", add: "add", edit: "edit", delete: "delete", filter: "filter", api: "api", startWithOpenData: "startWithOpenData", filterEvent: "filterEvent", formGroupFilter: "formGroupFilter", sort: "sort", sortsDefault: "sortsDefault", autoLoad: "autoLoad", filterFn: "filterFn", filterDoFetchFn: "filterDoFetchFn", reloadFn: "reloadFn" }, outputs: { onAdd: "onAdd", onEdit: "onEdit", onDelete: "onDelete", onSearch: "onSearch", onFilter: "onFilter", onButtonCell: "onButtonCell", onLoading: "onLoading", onSelected: "onSelected" }, ngImport: i0, template: "<do-datatable-header\n    [header]=\"header\"\n    [add]=\"add\"\n    [delete]=\"isDelete\"\n    [filter]=\"filter\"\n    [formGroupFilter]=\"formGroupFilter\"\n    (onSearch)=\"doSearch($event)\"\n    (onFilter)=\"doFilter($event)\"\n    (onAdd)=\"doAdd($event)\"\n    (onDelete)=\"doDelete()\">\n    <ng-content></ng-content>\n</do-datatable-header>\n<do-datatable-base\n    [rows]=\"rows\"\n    [columns]=\"columns\"\n    [selected]=\"selected\"\n    [limit]=\"limit\"\n    [count]=\"count\"\n    [offset]=\"offset\"\n    [externalPaging]=\"externalPaging\"\n    [externalSorting]=\"externalSorting\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [scrollbarH]=\"scrollbarH\"\n    [scrollbarV]=\"scrollbarV\"\n    [reorderable]=\"reorderable\"\n    [sortType]=\"sortType\"\n    [sortsDefault]=\"sortsDefault\"\n    [messages]=\"messages\"\n    [selectionType]=\"selectionType\"\n    [columnMode]=\"columnMode\"\n    [headerHeight]=\"headerHeight\"\n    [footerHeight]=\"footerHeight\"\n    [rowHeight]=\"rowHeight\"\n    [header]=\"header\"\n    [column]=\"column\"\n    [footer]=\"footer\"\n    [add]=\"add\"\n    [edit]=\"edit\"\n    [delete]=\"delete\"\n    [filter]=\"filter\"\n    [startWithOpenData]=\"startWithOpenData\"\n    (page)=\"setPage($event)\"\n    (sort)=\"onSort($event)\"\n    (select)=\"onSelect($event)\"\n    (activate)=\"doEdit($event)\"\n    (onButtonCell)=\"onClickButton($event)\">\n</do-datatable-base>\n", styles: [""], components: [{ type: i1.DoDatatableHeaderComponent, selector: "do-datatable-header", inputs: ["header", "footer", "add", "edit", "delete", "filter", "formGroupFilter"], outputs: ["onSearch", "onFilter", "onAdd", "onDelete"] }, { type: i2.DoDatatableBaseComponent, selector: "do-datatable-base", inputs: ["rows", "selected", "limit", "count", "offset", "externalPaging", "externalSorting", "loadingIndicator", "scrollbarH", "scrollbarV", "reorderable", "sortType", "sortsDefault", "messages", "selectionType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "header", "column", "footer", "add", "edit", "delete", "filter", "startWithOpenData", "columns"], outputs: ["page", "sort", "select", "activate", "onButtonCell"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-datatable',
                    styleUrls: ['./do-datatable.component.scss'],
                    templateUrl: './do-datatable.component.html',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i0.Injector }]; }, propDecorators: { rows: [{
                type: Input
            }], columns: [{
                type: Input
            }], filters: [{
                type: Input
            }], selected: [{
                type: Input
            }], limit: [{
                type: Input
            }], count: [{
                type: Input
            }], offset: [{
                type: Input
            }], externalPaging: [{
                type: Input
            }], externalSorting: [{
                type: Input
            }], loadingIndicator: [{
                type: Input
            }], scrollbarH: [{
                type: Input
            }], scrollbarV: [{
                type: Input
            }], reorderable: [{
                type: Input
            }], sortType: [{
                type: Input
            }], messages: [{
                type: Input
            }], selectionType: [{
                type: Input
            }], columnMode: [{
                type: Input
            }], headerHeight: [{
                type: Input
            }], footerHeight: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], header: [{
                type: Input
            }], column: [{
                type: Input
            }], footer: [{
                type: Input
            }], add: [{
                type: Input
            }], edit: [{
                type: Input
            }], delete: [{
                type: Input
            }], filter: [{
                type: Input
            }], api: [{
                type: Input
            }], startWithOpenData: [{
                type: Input
            }], filterEvent: [{
                type: Input
            }], formGroupFilter: [{
                type: Input
            }], sort: [{
                type: Input
            }], sortsDefault: [{
                type: Input
            }], autoLoad: [{
                type: Input
            }], onAdd: [{
                type: Output
            }], onEdit: [{
                type: Output
            }], onDelete: [{
                type: Output
            }], onSearch: [{
                type: Output
            }], onFilter: [{
                type: Output
            }], onButtonCell: [{
                type: Output
            }], onLoading: [{
                type: Output
            }], onSelected: [{
                type: Output
            }], filterFn: [{
                type: Input
            }], filterDoFetchFn: [{
                type: Input
            }], reloadFn: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0YXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2RhdGF0YWJsZS9kby1kYXRhdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvZGF0YXRhYmxlL2RvLWRhdGF0YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFxQyxNQUFNLGtCQUFrQixDQUFDOzs7O0FBVW5GLE1BQU0sT0FBTyxvQkFBb0I7SUE2RS9CLFlBQzRCLE1BQWMsRUFDakMsUUFBa0I7UUFEQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2pDLGFBQVEsR0FBUixRQUFRLENBQVU7UUE5RWxCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFzQixFQUFFLENBQUM7UUFDaEMsWUFBTyxHQUFzQixFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQXVCLEVBQUUsQ0FBQztRQUMvQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBVyxDQUFDLENBQUM7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LE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTtnQkFDRyxRQUFRO3NCQUFqQixNQUFNO2dCQUNHLFlBQVk7c0JBQXJCLE1BQU07Z0JBQ0csU0FBUztzQkFBbEIsTUFBTTtnQkFDRyxVQUFVO3NCQUFuQixNQUFNO2dCQUVNLFFBQVE7c0JBQXBCLEtBQUs7Z0JBTU8sZUFBZTtzQkFBM0IsS0FBSztnQkFTTyxRQUFRO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEluamVjdCxcbiAgTE9DQUxFX0lELFxuICBJbmplY3RvcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbHVtbk1vZGUsIFNlbGVjdGlvblR5cGUsIFNvcnRUeXBlIH0gZnJvbSAnQHN3aW1sYW5lL25neC1kYXRhdGFibGUnO1xuaW1wb3J0IHsgSFRUUF9TRVJWSUNFLCBIdHRwRmFjdG9yeVNlcnZpY2UsIEh0dHBCYXNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IFBhZ2UsIFNvcnQsIEtleXdvcmQsIERhdGF0YWJsZUZpbHRlciwgRGF0YXRhYmxlQ29sdW1uIH0gZnJvbSAnLi9tb2RlbHMvZGF0YXRhYmxlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZGF0YXRhYmxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tZGF0YXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9kby1kYXRhdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRG9EYXRhdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHJvd3M6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGNvbHVtbnM6IERhdGF0YWJsZUNvbHVtbltdID0gW107XG4gIEBJbnB1dCgpIGZpbHRlcnM6IERhdGF0YWJsZUZpbHRlcltdID0gW107XG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBsaW1pdDogbnVtYmVyIHwgdW5kZWZpbmVkID0gMTA7XG4gIEBJbnB1dCgpIGNvdW50OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBvZmZzZXQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGV4dGVybmFsUGFnaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGV4dGVybmFsU29ydGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNjcm9sbGJhckg6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzY3JvbGxiYXJWOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJlb3JkZXJhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc29ydFR5cGU6IFNvcnRUeXBlID0gU29ydFR5cGUuc2luZ2xlO1xuICBASW5wdXQoKSBtZXNzYWdlczogYW55O1xuICBASW5wdXQoKSBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlID0gU2VsZWN0aW9uVHlwZS5jaGVja2JveDtcbiAgQElucHV0KCkgY29sdW1uTW9kZTogQ29sdW1uTW9kZSA9IENvbHVtbk1vZGUuZm9yY2U7XG4gIEBJbnB1dCgpIGhlYWRlckhlaWdodDogYW55ID0gNDA7XG4gIEBJbnB1dCgpIGZvb3RlckhlaWdodDogYW55ID0gJ2F1dG8nO1xuICBASW5wdXQoKSByb3dIZWlnaHQ6IG51bWJlciB8ICdhdXRvJyB8ICgocm93PzogYW55KSA9PiBudW1iZXIpID0gJ2F1dG8nO1xuICBASW5wdXQoKSBoZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBjb2x1bW46IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBmb290ZXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBhZGQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBlZGl0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZGVsZXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZmlsdGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYXBpOiBIdHRwQmFzZU1vZGVsO1xuICBASW5wdXQoKSBzdGFydFdpdGhPcGVuRGF0YTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGZpbHRlckV2ZW50OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cEZpbHRlcjogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBzb3J0OiBTb3J0O1xuICBASW5wdXQoKSBzb3J0c0RlZmF1bHQ6IGFueVtdO1xuICBASW5wdXQoKSBhdXRvTG9hZDogYm9vbGVhbiA9IHRydWU7XG4gIEBPdXRwdXQoKSBvbkFkZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgb25FZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25EZWxldGU6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICBAT3V0cHV0KCkgb25TZWFyY2g6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uQnV0dG9uQ2VsbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uTG9hZGluZzogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgb25TZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbi8vICBAVmlld0NoaWxkKCdkYXRhdGFibGUnLCB7c3RhdGljOiBmYWxzZX0pIGRhdGF0YWJsZTogRGF0YXRhYmxlQ29tcG9uZW50O1xuICBASW5wdXQoKSBzZXQgZmlsdGVyRm4oa2V5d29yZDogS2V5d29yZCkge1xuICAgIHRoaXMua2V5d29yZFBhcmFtID0ga2V5d29yZDtcbiAgICB0aGlzLl9rZXl3b3JkID0ga2V5d29yZDtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gIH1cbiAgQElucHV0KCkgc2V0IGZpbHRlckRvRmV0Y2hGbihrZXl3b3JkOiBLZXl3b3JkKSB7XG4gICAgaWYgKGtleXdvcmQpIHtcbiAgICAgIHRoaXMua2V5d29yZFBhcmFtID0ga2V5d29yZDtcbiAgICAgIHRoaXMuX2tleXdvcmQgPSBrZXl3b3JkO1xuICAgIH1cbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgdGhpcy5mZXRjaCgpO1xuICB9XG4gIEBJbnB1dCgpIHNldCByZWxvYWRGbihyZWxvYWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAocmVsb2FkICYmICF0aGlzLmxvYWRpbmdJbmRpY2F0b3IpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcbiAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMga2V5d29yZFBhcmFtOiBLZXl3b3JkO1xuICBwdWJsaWMgX2tleXdvcmQ6IEtleXdvcmQ7XG4gIHB1YmxpYyBpc0RlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgaHR0cDogSHR0cEZhY3RvcnlTZXJ2aWNlO1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgY2RyZWY6IENoYW5nZURldGVjdG9yUmVmO1xuICBwcml2YXRlIHBhZ2VPZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgcHJvdGVjdGVkIF9zZWFyY2g6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nLFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLmh0dHAgPSBpbmplY3Rvci5nZXQoSFRUUF9TRVJWSUNFKTtcbiAgICB0aGlzLmNkcmVmID0gaW5qZWN0b3IuZ2V0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXJ0V2l0aE9wZW5EYXRhKSB7XG4gICAgICB0aGlzLmZldGNoKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBkb1NlYXJjaChzZWFyY2g6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaXNEZWxldGUgPSBmYWxzZTtcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoc2VhcmNoKTtcbiAgICBpZiAodGhpcy5rZXl3b3JkUGFyYW0pIHtcbiAgICAgIHRoaXMuX2tleXdvcmQgPSB0aGlzLmtleXdvcmRQYXJhbTtcbiAgICAgIHRoaXMuX2tleXdvcmRbJ19hbGwnXSA9IHNlYXJjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fa2V5d29yZCA9IHtcbiAgICAgICAgX2FsbDogc2VhcmNoLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgIHRoaXMuZmV0Y2goKTtcbiAgfVxuXG4gIGRvRmlsdGVyKHNlYXJjaDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pc0RlbGV0ZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmZpbHRlckV2ZW50KSB7XG4gICAgICB0aGlzLm9uRmlsdGVyLmVtaXQoc2VhcmNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMua2V5d29yZFBhcmFtKSB7XG4gICAgICAgIHRoaXMuX2tleXdvcmQgPSB0aGlzLmtleXdvcmRQYXJhbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2tleXdvcmQgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIHN3aXRjaCAoZmlsdGVyLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgY2FzZSAnZGF0ZXBpY2tlcic6XG4gICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgdGhpcy5fa2V5d29yZFtmaWx0ZXIuY29udHJvbE5hbWVdID0gc2VhcmNoW2ZpbHRlci5jb250cm9sTmFtZV0gPyBzZWFyY2hbZmlsdGVyLmNvbnRyb2xOYW1lXSA6IG51bGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgdGhpcy5fa2V5d29yZFtmaWx0ZXIuY29udHJvbE5hbWVdID0gc2VhcmNoW2ZpbHRlci5jb250cm9sTmFtZV0ubGFiZWwgPyBzZWFyY2hbZmlsdGVyLmNvbnRyb2xOYW1lXSA6IG51bGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICB0aGlzLl9rZXl3b3JkW2ZpbHRlci5jb250cm9sTmFtZV0gPSBzZWFyY2hbZmlsdGVyLmNvbnRyb2xOYW1lXS5uYW1lID8gc2VhcmNoW2ZpbHRlci5jb250cm9sTmFtZV0ubmFtZSA6IG51bGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICB0aGlzLmZldGNoKCk7XG4gICAgfVxuICB9XG5cbiAgZG9BZGQoYWRkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vbkFkZC5lbWl0KGFkZCk7XG4gIH1cblxuICBkb0VkaXQocm93OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uRWRpdC5lbWl0KHJvdyk7XG4gIH1cblxuICBkb0RlbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uRGVsZXRlLmVtaXQodGhpcy5zZWxlY3RlZCk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkgPT09ICdFTlRFUicpIHtcbiAgICAgIHRoaXMuZG9TZWFyY2godGhpcy5fc2VhcmNoKTtcbiAgICB9XG4gIH1cblxuICBmZXRjaCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hcGkpIHtcbiAgICAgIHRoaXMuZXh0ZXJuYWxQYWdpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5leHRlcm5hbFNvcnRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5nZXRSZXF1ZXN0KCkuc3Vic2NyaWJlKHJvd3MgPT4ge1xuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgICAgICB0aGlzLmNkcmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhZ2UocGFnZTogUGFnZSk6IHZvaWQge1xuICAgIHRoaXMucGFnZU9mZnNldCA9IHBhZ2Uub2Zmc2V0ICogdGhpcy5saW1pdDtcbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cblxuICBvblNvcnQob3JkZXI6IGFueSk6IHZvaWQge1xuICAgIGlmIChvcmRlcikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3JkZXIuc29ydHMpKSB7XG4gICAgICAgIG9yZGVyLnNvcnRzLmZvckVhY2goc29ydCA9PiB7XG4gICAgICAgICAgaWYgKHNvcnRbJ2RpciddID09PSAnYXNjJykge1xuICAgICAgICAgICAgdGhpcy5zb3J0ID0geyBhc2MgOiBbc29ydFsncHJvcCddXX07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc29ydCA9IHsgZGVzYyA6IFtzb3J0Wydwcm9wJ11dfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZldGNoKCk7XG4gIH1cblxuICBvblNlbGVjdCh7IHNlbGVjdGVkIH0pOiB2b2lkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RlZCkpIHtcbiAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGV0ZSkgeyB0aGlzLmlzRGVsZXRlID0gdHJ1ZTsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0RlbGV0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgdGhpcy5vblNlbGVjdGVkLmVtaXQodGhpcy5zZWxlY3RlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNEZWxldGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrQnV0dG9uKGV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkJ1dHRvbkNlbGwuZW1pdChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlcXVlc3QoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IGJvZHk6IGFueSA9IHtcbiAgICAgIG9mZnNldDogdGhpcy5wYWdlT2Zmc2V0LFxuICAgICAgbGltaXQ6IHRoaXMubGltaXQsXG4gICAgICBrZXl3b3JkIDogdGhpcy5fa2V5d29yZCxcbiAgICAgIG9yZGVyOiB0aGlzLnNvcnQsXG4gICAgfTtcbiAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuICAgIHRoaXMub25Mb2FkaW5nLmVtaXQodGhpcy5sb2FkaW5nSW5kaWNhdG9yKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaSwgYm9keSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmNvdW50ID0gTnVtYmVyKHJlc3BvbnNlLnRvdGFsUmVjb3JkKTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm9uTG9hZGluZy5lbWl0KHRoaXMubG9hZGluZ0luZGljYXRvcik7XG4gICAgICAgICAgcmV0dXJuIChyZXNwb25zZVsnZGF0YSddIGFzIGFueVtdKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICAgIHRoaXMub25Mb2FkaW5nLmVtaXQodGhpcy5sb2FkaW5nSW5kaWNhdG9yKTtcbiAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICB9KSk7XG4gIH1cblxufVxuIiwiPGRvLWRhdGF0YWJsZS1oZWFkZXJcbiAgICBbaGVhZGVyXT1cImhlYWRlclwiXG4gICAgW2FkZF09XCJhZGRcIlxuICAgIFtkZWxldGVdPVwiaXNEZWxldGVcIlxuICAgIFtmaWx0ZXJdPVwiZmlsdGVyXCJcbiAgICBbZm9ybUdyb3VwRmlsdGVyXT1cImZvcm1Hcm91cEZpbHRlclwiXG4gICAgKG9uU2VhcmNoKT1cImRvU2VhcmNoKCRldmVudClcIlxuICAgIChvbkZpbHRlcik9XCJkb0ZpbHRlcigkZXZlbnQpXCJcbiAgICAob25BZGQpPVwiZG9BZGQoJGV2ZW50KVwiXG4gICAgKG9uRGVsZXRlKT1cImRvRGVsZXRlKClcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2RvLWRhdGF0YWJsZS1oZWFkZXI+XG48ZG8tZGF0YXRhYmxlLWJhc2VcbiAgICBbcm93c109XCJyb3dzXCJcbiAgICBbY29sdW1uc109XCJjb2x1bW5zXCJcbiAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxuICAgIFtsaW1pdF09XCJsaW1pdFwiXG4gICAgW2NvdW50XT1cImNvdW50XCJcbiAgICBbb2Zmc2V0XT1cIm9mZnNldFwiXG4gICAgW2V4dGVybmFsUGFnaW5nXT1cImV4dGVybmFsUGFnaW5nXCJcbiAgICBbZXh0ZXJuYWxTb3J0aW5nXT1cImV4dGVybmFsU29ydGluZ1wiXG4gICAgW2xvYWRpbmdJbmRpY2F0b3JdPVwibG9hZGluZ0luZGljYXRvclwiXG4gICAgW3Njcm9sbGJhckhdPVwic2Nyb2xsYmFySFwiXG4gICAgW3Njcm9sbGJhclZdPVwic2Nyb2xsYmFyVlwiXG4gICAgW3Jlb3JkZXJhYmxlXT1cInJlb3JkZXJhYmxlXCJcbiAgICBbc29ydFR5cGVdPVwic29ydFR5cGVcIlxuICAgIFtzb3J0c0RlZmF1bHRdPVwic29ydHNEZWZhdWx0XCJcbiAgICBbbWVzc2FnZXNdPVwibWVzc2FnZXNcIlxuICAgIFtzZWxlY3Rpb25UeXBlXT1cInNlbGVjdGlvblR5cGVcIlxuICAgIFtjb2x1bW5Nb2RlXT1cImNvbHVtbk1vZGVcIlxuICAgIFtoZWFkZXJIZWlnaHRdPVwiaGVhZGVySGVpZ2h0XCJcbiAgICBbZm9vdGVySGVpZ2h0XT1cImZvb3RlckhlaWdodFwiXG4gICAgW3Jvd0hlaWdodF09XCJyb3dIZWlnaHRcIlxuICAgIFtoZWFkZXJdPVwiaGVhZGVyXCJcbiAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgW2Zvb3Rlcl09XCJmb290ZXJcIlxuICAgIFthZGRdPVwiYWRkXCJcbiAgICBbZWRpdF09XCJlZGl0XCJcbiAgICBbZGVsZXRlXT1cImRlbGV0ZVwiXG4gICAgW2ZpbHRlcl09XCJmaWx0ZXJcIlxuICAgIFtzdGFydFdpdGhPcGVuRGF0YV09XCJzdGFydFdpdGhPcGVuRGF0YVwiXG4gICAgKHBhZ2UpPVwic2V0UGFnZSgkZXZlbnQpXCJcbiAgICAoc29ydCk9XCJvblNvcnQoJGV2ZW50KVwiXG4gICAgKHNlbGVjdCk9XCJvblNlbGVjdCgkZXZlbnQpXCJcbiAgICAoYWN0aXZhdGUpPVwiZG9FZGl0KCRldmVudClcIlxuICAgIChvbkJ1dHRvbkNlbGwpPVwib25DbGlja0J1dHRvbigkZXZlbnQpXCI+XG48L2RvLWRhdGF0YWJsZS1iYXNlPlxuIl19