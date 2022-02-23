import { Directive, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class DragDropDirective {
    constructor() {
        this.onFileDropped = new EventEmitter();
        this.opacity = '0.9';
        this.styleOpacity = '0.9';
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.styleOpacity = '0.9';
        this.opacity = this.styleOpacity;
    }
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.styleOpacity = '0.9';
        this.opacity = this.styleOpacity;
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    }
    onMouseOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.styleOpacity = '0.5';
        this.opacity = this.styleOpacity;
    }
    onMouseLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.styleOpacity = '0.9';
        this.opacity = this.styleOpacity;
    }
}
DragDropDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DragDropDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DragDropDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.16", type: DragDropDirective, selector: "[doDragDrop]", inputs: { opacity: "opacity" }, outputs: { onFileDropped: "onFileDropped" }, host: { listeners: { "dragover": "onDragOver($event)", "dragleave": "onDragLeave($event)", "drop": "ondrop($event)", "mouseover": "onMouseOver($event)", "mouseleave": "onMouseLeave($event)" }, properties: { "style.opacity": "this.styleOpacity" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DragDropDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[doDragDrop]',
                }]
        }], propDecorators: { onFileDropped: [{
                type: Output
            }], opacity: [{
                type: Input
            }], styleOpacity: [{
                type: HostBinding,
                args: ['style.opacity']
            }], onDragOver: [{
                type: HostListener,
                args: ['dragover', ['$event']]
            }], onDragLeave: [{
                type: HostListener,
                args: ['dragleave', ['$event']]
            }], ondrop: [{
                type: HostListener,
                args: ['drop', ['$event']]
            }], onMouseOver: [{
                type: HostListener,
                args: ['mouseover', ['$event']]
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2Jhc2UvZGlyZWN0aXZlL2RyYWctZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUtsRyxNQUFNLE9BQU8saUJBQWlCO0lBSDlCO1FBSWMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3pDLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFFSSxpQkFBWSxHQUFHLEtBQUssQ0FBQztLQXlDN0Q7SUF2Q3lDLFVBQVUsQ0FBQyxHQUFHO1FBQ2hELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFNkMsV0FBVyxDQUFDLEdBQUc7UUFDekQsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUV3QyxNQUFNLENBQUMsR0FBRztRQUMvQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNqQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUU2QyxXQUFXLENBQUMsR0FBRztRQUN6RCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNyQyxDQUFDO0lBRThDLFlBQVksQ0FBQyxHQUFHO1FBQzNELEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7OytHQTNDUSxpQkFBaUI7bUdBQWpCLGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs4QkFFYSxhQUFhO3NCQUF0QixNQUFNO2dCQUNFLE9BQU87c0JBQWYsS0FBSztnQkFFK0IsWUFBWTtzQkFBaEQsV0FBVzt1QkFBQyxlQUFlO2dCQUVVLFVBQVU7c0JBQS9DLFlBQVk7dUJBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQU9VLFdBQVc7c0JBQXhELFlBQVk7dUJBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQU9JLE1BQU07c0JBQTlDLFlBQVk7dUJBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQVdjLFdBQVc7c0JBQXhELFlBQVk7dUJBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQU9VLFlBQVk7c0JBQTFELFlBQVk7dUJBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2RvRHJhZ0Ryb3BdJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BEaXJlY3RpdmUge1xuICAgIEBPdXRwdXQoKSBvbkZpbGVEcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQElucHV0KCkgb3BhY2l0eTogc3RyaW5nID0gJzAuOSc7XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLm9wYWNpdHknKSBwdWJsaWMgc3R5bGVPcGFjaXR5ID0gJzAuOSc7XG5cbiAgICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pIG9uRHJhZ092ZXIoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc3R5bGVPcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHRoaXMuc3R5bGVPcGFjaXR5O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pIHB1YmxpYyBvbkRyYWdMZWF2ZShldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5zdHlsZU9wYWNpdHkgPSAnMC45JztcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gdGhpcy5zdHlsZU9wYWNpdHk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pIHB1YmxpYyBvbmRyb3AoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc3R5bGVPcGFjaXR5ID0gJzAuOSc7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHRoaXMuc3R5bGVPcGFjaXR5O1xuICAgICAgICBjb25zdCBmaWxlcyA9IGV2dC5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm9uRmlsZURyb3BwZWQuZW1pdChmaWxlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInLCBbJyRldmVudCddKSBwdWJsaWMgb25Nb3VzZU92ZXIoZXZ0KSB7XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuc3R5bGVPcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHRoaXMuc3R5bGVPcGFjaXR5O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbJyRldmVudCddKSBwdWJsaWMgb25Nb3VzZUxlYXZlKGV2dCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnN0eWxlT3BhY2l0eSA9ICcwLjknO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSB0aGlzLnN0eWxlT3BhY2l0eTtcbiAgICB9XG5cbn1cbiJdfQ==