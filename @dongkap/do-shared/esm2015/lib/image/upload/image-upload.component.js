import { Component, Inject, Input, ViewEncapsulation, Optional, Self, LOCALE_ID, Output, EventEmitter, } from '@angular/core';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
import * as i4 from "../../base/directive/drag-drop.directive";
import * as i5 from "@ngx-translate/core";
export class ImageUploadComponent extends ValueAccessorDirective {
    constructor(ngControl, locale, dom) {
        super(ngControl, locale);
        this.locale = locale;
        this.dom = dom;
        this.onPreview = new EventEmitter();
        this.radius = 0;
        this.buttonUpload = true;
        this.skeleton = false;
        this.imageDefault = `${document.getElementsByTagName('base')[0].href}assets/images/avatars/default.png`;
    }
    set uploadFn(finish) {
        if (finish) {
            this.ngControl.control.markAsPristine();
            this.ngControl.control.markAsUntouched();
        }
    }
    writeValue(value) {
        if (value instanceof File) {
            this.image = URL.createObjectURL(value);
            this.value = value;
            this.onChange(this.value);
        }
        else {
            this.image = value;
        }
    }
    upload(files) {
        if (files.length) {
            this.value = files[0];
            this.image = URL.createObjectURL(this.value);
            this.onPreview.emit(this.value);
        }
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
    ngOnDestroy() { }
    onInit() { }
}
ImageUploadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ImageUploadComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: LOCALE_ID }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
ImageUploadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ImageUploadComponent, selector: "do-image-upload", inputs: { image: "image", height: "height", width: "width", radius: "radius", buttonUpload: "buttonUpload", skeleton: "skeleton", uploadFn: "uploadFn" }, outputs: { onPreview: "onPreview" }, usesInheritance: true, ngImport: i0, template: "<div class=\"body-upload\">\n  <div *ngIf=\"!skeleton; else contentskeleton\"\n    class=\"upload-container\"\n    (click)=\"img.click()\"\n    doDragDrop\n    (onFileDropped)=\"upload($event)\"\n    [ngClass]=\"{\n      'full-file': image,\n      'empty-file': !image\n    }\"\n    [ngStyle]=\"{ \n      'background-image': 'url(' + (image) + ')',\n      'height':  height ? height+'rem' : 'calc(80vw/5)',\n      'width':  width ? width+'rem' : 'calc(80vw/5)',\n      'border-radius':  radius + '%'\n    }\">\n    <label *ngIf=\"!image\"\n      class=\"label label-upload\"\n      [ngStyle]=\"{\n        'line-height':  height ? height+'rem' : 'calc(80vw/5)'\n      }\">\n      {{ 'placeholder.image-upload' | translate }}\n    </label>\n    <input\n      hidden\n      type=\"file\"\n      accept=\"image/png, image/jpeg, image/jpg\"\n      (change)=\"upload($event.target.files)\"\n      #img>\n  </div>\n  <ng-template #contentskeleton>\n    <div\n      [ngClass]=\"{\n        'skeleton': skeleton\n      }\"\n      [ngStyle]=\"{ \n        'height':  height ? height+'rem' : 'calc(80vw/5)',\n        'width':  width ? width+'rem' : 'calc(80vw/5)',\n        'border-radius':  radius + '%',\n        'margin': '0.5rem auto'\n      }\">\n    </div>\n  </ng-template>\n</div>", styles: [".nb-theme-default .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-default .empty-file{background-color:#edf1f7!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-default .full-file{background-color:#fff!important;outline:.1rem solid #8f9bb3}.nb-theme-default .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-default .upload-container:hover{cursor:pointer}.nb-theme-default .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}@media (max-width: 399.98px){.nb-theme-default .upload-container{height:10rem!important;width:10rem!important}.nb-theme-default .label-upload{line-height:10rem!important}}.nb-theme-dark .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-dark .empty-file{background-color:#151a30!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-dark .full-file{background-color:#222b45!important;outline:.1rem solid #8f9bb3}.nb-theme-dark .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-dark .upload-container:hover{cursor:pointer}.nb-theme-dark .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}@media (max-width: 399.98px){.nb-theme-dark .upload-container{height:10rem!important;width:10rem!important}.nb-theme-dark .label-upload{line-height:10rem!important}}.nb-theme-cosmic .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-cosmic .empty-file{background-color:#1b1b38!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-cosmic .full-file{background-color:#323259!important;outline:.1rem solid #8f9bb3}.nb-theme-cosmic .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-cosmic .upload-container:hover{cursor:pointer}.nb-theme-cosmic .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}@media (max-width: 399.98px){.nb-theme-cosmic .upload-container{height:10rem!important;width:10rem!important}.nb-theme-cosmic .label-upload{line-height:10rem!important}}.nb-theme-corporate .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-corporate .empty-file{background-color:#edf1f7!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-corporate .full-file{background-color:#fff!important;outline:.1rem solid #8f9bb3}.nb-theme-corporate .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-corporate .upload-container:hover{cursor:pointer}.nb-theme-corporate .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}@media (max-width: 399.98px){.nb-theme-corporate .upload-container{height:10rem!important;width:10rem!important}.nb-theme-corporate .label-upload{line-height:10rem!important}}\n"], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.DragDropDirective, selector: "[doDragDrop]", inputs: ["opacity"], outputs: ["onFileDropped"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ImageUploadComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-image-upload',
                    styleUrls: ['./image-upload.component.scss'],
                    templateUrl: './image-upload.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i2.DomSanitizer }]; }, propDecorators: { onPreview: [{
                type: Output
            }], image: [{
                type: Input
            }], height: [{
                type: Input
            }], width: [{
                type: Input
            }], radius: [{
                type: Input
            }], buttonUpload: [{
                type: Input
            }], skeleton: [{
                type: Input
            }], uploadFn: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2ltYWdlL3VwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvaW1hZ2UvdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixJQUFJLEVBQ0osU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7QUFRN0UsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHNCQUEyQjtJQWdCbkUsWUFDc0IsU0FBb0IsRUFDZCxNQUFjLEVBQ2pDLEdBQWlCO1FBQ3hCLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFGQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2pDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFsQmhCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUl4RCxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFPNUIsaUJBQVksR0FBVyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLG1DQUFtQyxDQUFDO0lBT2xILENBQUM7SUFiRCxJQUFhLFFBQVEsQ0FBQyxNQUFlO1FBQ25DLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBVU0sVUFBVSxDQUFDLEtBQVU7UUFDMUIsSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVk7UUFDakIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDdkMsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNqQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELFdBQVcsS0FBVSxDQUFDO0lBRXRCLE1BQU0sS0FBVSxDQUFDOztrSEFqRE4sb0JBQW9CLHVFQWtCckIsU0FBUztzR0FsQlIsb0JBQW9CLDZRQ3RCakMsNnZDQTJDTTs0RkRyQk8sb0JBQW9CO2tCQU5oQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO29CQUM1QyxXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OzBCQWtCSSxRQUFROzswQkFBSSxJQUFJOzswQkFDaEIsTUFBTTsyQkFBQyxTQUFTO3VFQWpCVCxTQUFTO3NCQUFsQixNQUFNO2dCQUNFLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ08sUUFBUTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBMT0NBTEVfSUQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vYmFzZS92YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1pbWFnZS11cGxvYWQnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkQ29tcG9uZW50IGV4dGVuZHMgVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZTxhbnk+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpIG9uUHJldmlldzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJhZGl1czogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgYnV0dG9uVXBsb2FkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2tlbGV0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2V0IHVwbG9hZEZuKGZpbmlzaDogYm9vbGVhbikge1xuICAgIGlmIChmaW5pc2gpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBpbWFnZURlZmF1bHQ6IHN0cmluZyA9IGAke2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZn1hc3NldHMvaW1hZ2VzL2F2YXRhcnMvZGVmYXVsdC5wbmdgO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZyxcbiAgICBwdWJsaWMgZG9tOiBEb21TYW5pdGl6ZXIpIHtcbiAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gIH1cblxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgdGhpcy5pbWFnZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwodmFsdWUpO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbWFnZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHVwbG9hZChmaWxlczogYW55W10pIHtcbiAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZmlsZXNbMF07XG4gICAgICB0aGlzLmltYWdlID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMub25QcmV2aWV3LmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBvbkluaXQoKTogdm9pZCB7fVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiYm9keS11cGxvYWRcIj5cbiAgPGRpdiAqbmdJZj1cIiFza2VsZXRvbjsgZWxzZSBjb250ZW50c2tlbGV0b25cIlxuICAgIGNsYXNzPVwidXBsb2FkLWNvbnRhaW5lclwiXG4gICAgKGNsaWNrKT1cImltZy5jbGljaygpXCJcbiAgICBkb0RyYWdEcm9wXG4gICAgKG9uRmlsZURyb3BwZWQpPVwidXBsb2FkKCRldmVudClcIlxuICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICdmdWxsLWZpbGUnOiBpbWFnZSxcbiAgICAgICdlbXB0eS1maWxlJzogIWltYWdlXG4gICAgfVwiXG4gICAgW25nU3R5bGVdPVwieyBcbiAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgKGltYWdlKSArICcpJyxcbiAgICAgICdoZWlnaHQnOiAgaGVpZ2h0ID8gaGVpZ2h0KydyZW0nIDogJ2NhbGMoODB2dy81KScsXG4gICAgICAnd2lkdGgnOiAgd2lkdGggPyB3aWR0aCsncmVtJyA6ICdjYWxjKDgwdncvNSknLFxuICAgICAgJ2JvcmRlci1yYWRpdXMnOiAgcmFkaXVzICsgJyUnXG4gICAgfVwiPlxuICAgIDxsYWJlbCAqbmdJZj1cIiFpbWFnZVwiXG4gICAgICBjbGFzcz1cImxhYmVsIGxhYmVsLXVwbG9hZFwiXG4gICAgICBbbmdTdHlsZV09XCJ7XG4gICAgICAgICdsaW5lLWhlaWdodCc6ICBoZWlnaHQgPyBoZWlnaHQrJ3JlbScgOiAnY2FsYyg4MHZ3LzUpJ1xuICAgICAgfVwiPlxuICAgICAge3sgJ3BsYWNlaG9sZGVyLmltYWdlLXVwbG9hZCcgfCB0cmFuc2xhdGUgfX1cbiAgICA8L2xhYmVsPlxuICAgIDxpbnB1dFxuICAgICAgaGlkZGVuXG4gICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWcsIGltYWdlL2pwZ1wiXG4gICAgICAoY2hhbmdlKT1cInVwbG9hZCgkZXZlbnQudGFyZ2V0LmZpbGVzKVwiXG4gICAgICAjaW1nPlxuICA8L2Rpdj5cbiAgPG5nLXRlbXBsYXRlICNjb250ZW50c2tlbGV0b24+XG4gICAgPGRpdlxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAnc2tlbGV0b24nOiBza2VsZXRvblxuICAgICAgfVwiXG4gICAgICBbbmdTdHlsZV09XCJ7IFxuICAgICAgICAnaGVpZ2h0JzogIGhlaWdodCA/IGhlaWdodCsncmVtJyA6ICdjYWxjKDgwdncvNSknLFxuICAgICAgICAnd2lkdGgnOiAgd2lkdGggPyB3aWR0aCsncmVtJyA6ICdjYWxjKDgwdncvNSknLFxuICAgICAgICAnYm9yZGVyLXJhZGl1cyc6ICByYWRpdXMgKyAnJScsXG4gICAgICAgICdtYXJnaW4nOiAnMC41cmVtIGF1dG8nXG4gICAgICB9XCI+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L2Rpdj4iXX0=