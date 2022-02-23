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
        this.height = 14;
        this.width = 14;
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
ImageUploadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ImageUploadComponent, selector: "do-image-upload", inputs: { image: "image", height: "height", width: "width", radius: "radius", buttonUpload: "buttonUpload", skeleton: "skeleton", uploadFn: "uploadFn" }, outputs: { onPreview: "onPreview" }, usesInheritance: true, ngImport: i0, template: "<div class=\"body-upload\">\n  <div *ngIf=\"!skeleton; else contentskeleton\"\n    class=\"upload-container\"\n    (click)=\"img.click()\"\n    doDragDrop\n    (onFileDropped)=\"upload($event)\"\n    [ngClass]=\"{\n      'full-file': image,\n      'empty-file': !image\n    }\"\n    [ngStyle]=\"{ \n      'background-image': 'url(' + (image) + ')',\n      'height':  height + 'rem',\n      'width':  width + 'rem',\n      'border-radius':  radius + '%'\n    }\">\n    <label *ngIf=\"!image\"\n      class=\"label label-upload\"\n      [ngStyle]=\"{\n        'line-height': height+'rem'\n      }\">\n      {{ 'placeholder.image-upload' | translate }}\n    </label>\n    <input\n      hidden\n      type=\"file\"\n      accept=\"image/png, image/jpeg, image/jpg\"\n      (change)=\"upload($event.target.files)\"\n      #img>\n  </div>\n  <ng-template #contentskeleton>\n    <div\n      [ngClass]=\"{\n        'skeleton': skeleton\n      }\"\n      [ngStyle]=\"{ \n        'height':  height + 'rem',\n        'width':  width + 'rem',\n        'border-radius':  radius + '%',\n        'margin': '0.5rem auto'\n      }\">\n    </div>\n  </ng-template>\n</div>", styles: [".nb-theme-default .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-default .empty-file{background-color:#edf1f7!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-default .full-file{background-color:#fff!important;outline:.1rem solid #8f9bb3}.nb-theme-default .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-default .upload-container:hover{cursor:pointer}.nb-theme-default .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}.nb-theme-dark .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-dark .empty-file{background-color:#151a30!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-dark .full-file{background-color:#222b45!important;outline:.1rem solid #8f9bb3}.nb-theme-dark .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-dark .upload-container:hover{cursor:pointer}.nb-theme-dark .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}.nb-theme-cosmic .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-cosmic .empty-file{background-color:#1b1b38!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-cosmic .full-file{background-color:#323259!important;outline:.1rem solid #8f9bb3}.nb-theme-cosmic .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-cosmic .upload-container:hover{cursor:pointer}.nb-theme-cosmic .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}.nb-theme-corporate .upload-container{background-repeat:no-repeat;background-size:cover;margin:.5rem auto}.nb-theme-corporate .empty-file{background-color:#edf1f7!important;outline:.125rem dashed #8f9bb3;outline-offset:-.4rem}.nb-theme-corporate .full-file{background-color:#fff!important;outline:.1rem solid #8f9bb3}.nb-theme-corporate .label-upload{display:flex;align-items:center;justify-content:center}.nb-theme-corporate .upload-container:hover{cursor:pointer}.nb-theme-corporate .body-upload{margin:.5rem;display:flex;justify-content:center;align-items:center}\n"], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.DragDropDirective, selector: "[doDragDrop]", inputs: ["opacity"], outputs: ["onFileDropped"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], pipes: { "translate": i5.TranslatePipe }, encapsulation: i0.ViewEncapsulation.None });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2ltYWdlL3VwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvaW1hZ2UvdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixJQUFJLEVBQ0osU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7QUFRN0UsTUFBTSxPQUFPLG9CQUFxQixTQUFRLHNCQUEyQjtJQWdCbkUsWUFDc0IsU0FBb0IsRUFDZCxNQUFjLEVBQ2pDLEdBQWlCO1FBQ3hCLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFGQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2pDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFsQmhCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV4RCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBTzVCLGlCQUFZLEdBQVcsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQ0FBbUMsQ0FBQztJQU9sSCxDQUFDO0lBYkQsSUFBYSxRQUFRLENBQUMsTUFBZTtRQUNuQyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQVVNLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFZO1FBQ2pCLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztRQUNELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDakMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxXQUFXLEtBQVUsQ0FBQztJQUV0QixNQUFNLEtBQVUsQ0FBQzs7a0hBakROLG9CQUFvQix1RUFrQnJCLFNBQVM7c0dBbEJSLG9CQUFvQiw2UUN0QmpDLG9vQ0EyQ007NEZEckJPLG9CQUFvQjtrQkFOaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztvQkFDNUMsV0FBVyxFQUFFLCtCQUErQjtvQkFDNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzswQkFrQkksUUFBUTs7MEJBQUksSUFBSTs7MEJBQ2hCLE1BQU07MkJBQUMsU0FBUzt1RUFqQlQsU0FBUztzQkFBbEIsTUFBTTtnQkFDRSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNPLFFBQVE7c0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgTE9DQUxFX0lELFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2Jhc2UvdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8taW1hZ2UtdXBsb2FkJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9pbWFnZS11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZENvbXBvbmVudCBleHRlbmRzIFZhbHVlQWNjZXNzb3JEaXJlY3RpdmU8YW55PiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKSBvblByZXZpZXc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gMTQ7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgPSAxNDtcbiAgQElucHV0KCkgcmFkaXVzOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBidXR0b25VcGxvYWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBza2VsZXRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzZXQgdXBsb2FkRm4oZmluaXNoOiBib29sZWFuKSB7XG4gICAgaWYgKGZpbmlzaCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGltYWdlRGVmYXVsdDogc3RyaW5nID0gYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5ocmVmfWFzc2V0cy9pbWFnZXMvYXZhdGFycy9kZWZhdWx0LnBuZ2A7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nLFxuICAgIHB1YmxpYyBkb206IERvbVNhbml0aXplcikge1xuICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICB0aGlzLmltYWdlID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh2YWx1ZSk7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmltYWdlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKGZpbGVzOiBhbnlbXSkge1xuICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBmaWxlc1swXTtcbiAgICAgIHRoaXMuaW1hZ2UgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5vblByZXZpZXcuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIG9uSW5pdCgpOiB2b2lkIHt9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJib2R5LXVwbG9hZFwiPlxuICA8ZGl2ICpuZ0lmPVwiIXNrZWxldG9uOyBlbHNlIGNvbnRlbnRza2VsZXRvblwiXG4gICAgY2xhc3M9XCJ1cGxvYWQtY29udGFpbmVyXCJcbiAgICAoY2xpY2spPVwiaW1nLmNsaWNrKClcIlxuICAgIGRvRHJhZ0Ryb3BcbiAgICAob25GaWxlRHJvcHBlZCk9XCJ1cGxvYWQoJGV2ZW50KVwiXG4gICAgW25nQ2xhc3NdPVwie1xuICAgICAgJ2Z1bGwtZmlsZSc6IGltYWdlLFxuICAgICAgJ2VtcHR5LWZpbGUnOiAhaW1hZ2VcbiAgICB9XCJcbiAgICBbbmdTdHlsZV09XCJ7IFxuICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyAoaW1hZ2UpICsgJyknLFxuICAgICAgJ2hlaWdodCc6ICBoZWlnaHQgKyAncmVtJyxcbiAgICAgICd3aWR0aCc6ICB3aWR0aCArICdyZW0nLFxuICAgICAgJ2JvcmRlci1yYWRpdXMnOiAgcmFkaXVzICsgJyUnXG4gICAgfVwiPlxuICAgIDxsYWJlbCAqbmdJZj1cIiFpbWFnZVwiXG4gICAgICBjbGFzcz1cImxhYmVsIGxhYmVsLXVwbG9hZFwiXG4gICAgICBbbmdTdHlsZV09XCJ7XG4gICAgICAgICdsaW5lLWhlaWdodCc6IGhlaWdodCsncmVtJ1xuICAgICAgfVwiPlxuICAgICAge3sgJ3BsYWNlaG9sZGVyLmltYWdlLXVwbG9hZCcgfCB0cmFuc2xhdGUgfX1cbiAgICA8L2xhYmVsPlxuICAgIDxpbnB1dFxuICAgICAgaGlkZGVuXG4gICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWcsIGltYWdlL2pwZ1wiXG4gICAgICAoY2hhbmdlKT1cInVwbG9hZCgkZXZlbnQudGFyZ2V0LmZpbGVzKVwiXG4gICAgICAjaW1nPlxuICA8L2Rpdj5cbiAgPG5nLXRlbXBsYXRlICNjb250ZW50c2tlbGV0b24+XG4gICAgPGRpdlxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAnc2tlbGV0b24nOiBza2VsZXRvblxuICAgICAgfVwiXG4gICAgICBbbmdTdHlsZV09XCJ7IFxuICAgICAgICAnaGVpZ2h0JzogIGhlaWdodCArICdyZW0nLFxuICAgICAgICAnd2lkdGgnOiAgd2lkdGggKyAncmVtJyxcbiAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiAgcmFkaXVzICsgJyUnLFxuICAgICAgICAnbWFyZ2luJzogJzAuNXJlbSBhdXRvJ1xuICAgICAgfVwiPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+Il19