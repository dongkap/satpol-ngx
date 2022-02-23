import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class SearchInputComponent {
    constructor() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    showInput() {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    }
    hideInput() {
        this.isInputShown = false;
    }
    onInput(val) {
        this.search.emit(val);
    }
}
SearchInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SearchInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: SearchInputComponent, selector: "ngx-search-input", outputs: { search: "search" }, viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true, static: true }], ngImport: i0, template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `, isInline: true, styles: [":host{display:flex;align-items:center}:host i.control-icon:before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:none;margin-left:1rem;width:15rem;transition:width .2s ease}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:transparent}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SearchInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-search-input',
                    styleUrls: ['./search-input.component.scss'],
                    template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `,
                }]
        }], propDecorators: { input: [{
                type: ViewChild,
                args: ['input', { static: true }]
            }], search: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXRoZW1lL3NyYy9saWIvY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWV2RixNQUFNLE9BQU8sb0JBQW9CO0lBYmpDO1FBZ0JZLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVwRSxpQkFBWSxHQUFHLEtBQUssQ0FBQztLQWN0QjtJQVpDLFNBQVM7UUFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOztrSEFsQlUsb0JBQW9CO3NHQUFwQixvQkFBb0IscU1BVnJCOzs7Ozs7OztHQVFUOzRGQUVVLG9CQUFvQjtrQkFiaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztvQkFDNUMsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2lCQUNGOzhCQUV1QyxLQUFLO3NCQUExQyxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBRTFCLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtc2VhcmNoLWlucHV0JyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgY2xhc3M9XCJjb250cm9sLWljb24gaW9uIGlvbi1pb3Mtc2VhcmNoXCJcbiAgICAgICAoY2xpY2spPVwic2hvd0lucHV0KClcIj48L2k+XG4gICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHNlYXJjaCByZXF1ZXN0IGhlcmUuLi5cIlxuICAgICAgICAgICAjaW5wdXRcbiAgICAgICAgICAgW2NsYXNzLmhpZGRlbl09XCIhaXNJbnB1dFNob3duXCJcbiAgICAgICAgICAgKGJsdXIpPVwiaGlkZUlucHV0KClcIlxuICAgICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaElucHV0Q29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dDogRWxlbWVudFJlZjtcblxuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGlzSW5wdXRTaG93biA9IGZhbHNlO1xuXG4gIHNob3dJbnB1dCgpIHtcbiAgICB0aGlzLmlzSW5wdXRTaG93biA9IHRydWU7XG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBoaWRlSW5wdXQoKSB7XG4gICAgdGhpcy5pc0lucHV0U2hvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG9uSW5wdXQodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHZhbCk7XG4gIH1cbn1cbiJdfQ==