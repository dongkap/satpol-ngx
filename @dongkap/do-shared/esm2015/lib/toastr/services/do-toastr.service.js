import { Injectable } from '@angular/core';
import { NbGlobalPhysicalPosition, } from '@nebular/theme';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@ngx-translate/core";
export class DoToastrService {
    constructor(toastrService, translate) {
        this.toastrService = toastrService;
        this.translate = translate;
        this.status = 'success';
        this.position = NbGlobalPhysicalPosition.TOP_RIGHT;
        this.duration = 5000;
        this.hasIcon = true;
        this.destroyByClick = true;
        this.preventDuplicates = false;
    }
    show(content, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title) {
            title = this.title(status);
        }
        this.build(content, title, status, position, duration, hasIcon, destroyByClick);
    }
    showI18n(content, contentHasI18n, title, status, position, duration, hasIcon, destroyByClick) {
        if (!title) {
            title = this.title(status);
        }
        this.translate.get(title).subscribe((resultTitle) => {
            title = resultTitle;
            if (contentHasI18n) {
                this.build(content, title, status, position, duration, hasIcon, destroyByClick);
            }
            else {
                this.translate.get(content).subscribe((resultContent) => {
                    this.build(resultContent, title, status, position, duration, hasIcon, destroyByClick);
                });
            }
        });
    }
    build(content, title, status, position, duration, hasIcon, destroyByClick) {
        this.toastrService.show(content, title, {
            status: status ? status : this.status,
            position: position ? position : this.position,
            duration: duration ? duration : this.duration,
            hasIcon: hasIcon ? hasIcon : this.hasIcon,
            destroyByClick: destroyByClick ? destroyByClick : this.destroyByClick,
            preventDuplicates: this.preventDuplicates,
        });
    }
    title(status) {
        let title = 'Success';
        switch (status) {
            case 'primary':
                title = 'Notification';
                break;
            case 'warning':
                title = 'Warning';
                break;
            case 'danger':
                title = 'Failure';
                break;
            case 'info':
                title = 'Information';
                break;
            default:
                break;
        }
        return title;
    }
}
DoToastrService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrService, deps: [{ token: i1.NbToastrService }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable });
DoToastrService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoToastrService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbToastrService }, { type: i2.TranslateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdG9hc3RyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi90b2FzdHIvc2VydmljZXMvZG8tdG9hc3RyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsd0JBQXdCLEdBRXpCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFNeEIsTUFBTSxPQUFPLGVBQWU7SUFFMUIsWUFDVSxhQUE4QixFQUM5QixTQUEyQjtRQUQzQixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFFN0IsV0FBTSxHQUFzQixTQUFTLENBQUM7UUFDdEMsYUFBUSxHQUFxQix3QkFBd0IsQ0FBQyxTQUFTLENBQUM7UUFDaEUsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLHNCQUFpQixHQUFZLEtBQUssQ0FBQztJQVBILENBQUM7SUFTbEMsSUFBSSxDQUNULE9BQWUsRUFDZixLQUFjLEVBQ2QsTUFBMEIsRUFDMUIsUUFBMkIsRUFDM0IsUUFBaUIsRUFDakIsT0FBaUIsRUFDakIsY0FBd0I7UUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQUU7UUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sUUFBUSxDQUNiLE9BQWUsRUFDZixjQUF3QixFQUN4QixLQUFjLEVBQ2QsTUFBMEIsRUFDMUIsUUFBMkIsRUFDM0IsUUFBaUIsRUFDakIsT0FBaUIsRUFDakIsY0FBd0I7UUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQUU7UUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBbUIsRUFBRSxFQUFFO1lBQzFELEtBQUssR0FBRyxXQUFXLENBQUM7WUFDcEIsSUFBSSxjQUFjLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDakY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBcUIsRUFBRSxFQUFFO29CQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUN4RixDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sS0FBSyxDQUNYLE9BQWUsRUFDZixLQUFhLEVBQ2IsTUFBeUIsRUFDekIsUUFBMEIsRUFDMUIsUUFBZ0IsRUFDaEIsT0FBZ0IsRUFDaEIsY0FBdUI7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtZQUN0QyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3JDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDN0MsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUM3QyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3pDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFDckUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUMxQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sS0FBSyxDQUFDLE1BQXlCO1FBQ3JDLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN0QixRQUFRLE1BQU0sRUFBRTtZQUNkLEtBQUssU0FBUztnQkFDWixLQUFLLEdBQUcsY0FBYyxDQUFDO2dCQUN2QixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLEtBQUssR0FBRyxTQUFTLENBQUM7Z0JBQ2xCLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFDbEIsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxLQUFLLEdBQUcsYUFBYSxDQUFDO2dCQUN0QixNQUFNO1lBQ1I7Z0JBQ0UsTUFBTTtTQUNUO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs2R0FwRlUsZUFBZTtpSEFBZixlQUFlOzRGQUFmLGVBQWU7a0JBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbixcbiAgTmJUb2FzdHJTZXJ2aWNlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOYkdsb2JhbFBvc2l0aW9uIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgTmJDb21wb25lbnRTdGF0dXMgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEb1RvYXN0clNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG9hc3RyU2VydmljZTogTmJUb2FzdHJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgc3RhdHVzOiBOYkNvbXBvbmVudFN0YXR1cyA9ICdzdWNjZXNzJztcbiAgcHJpdmF0ZSBwb3NpdGlvbjogTmJHbG9iYWxQb3NpdGlvbiA9IE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbi5UT1BfUklHSFQ7XG4gIHByaXZhdGUgZHVyYXRpb246IG51bWJlciA9IDUwMDA7XG4gIHByaXZhdGUgaGFzSWNvbjogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgZGVzdHJveUJ5Q2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuICBwcml2YXRlIHByZXZlbnREdXBsaWNhdGVzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIHNob3coXG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIHN0YXR1cz86IE5iQ29tcG9uZW50U3RhdHVzLFxuICAgIHBvc2l0aW9uPzogTmJHbG9iYWxQb3NpdGlvbixcbiAgICBkdXJhdGlvbj86IG51bWJlcixcbiAgICBoYXNJY29uPzogYm9vbGVhbixcbiAgICBkZXN0cm95QnlDbGljaz86IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRpdGxlKSB7IHRpdGxlID0gdGhpcy50aXRsZShzdGF0dXMpOyB9XG4gICAgdGhpcy5idWlsZChjb250ZW50LCB0aXRsZSwgc3RhdHVzLCBwb3NpdGlvbiwgZHVyYXRpb24sIGhhc0ljb24sIGRlc3Ryb3lCeUNsaWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93STE4bihcbiAgICBjb250ZW50OiBzdHJpbmcsXG4gICAgY29udGVudEhhc0kxOG4/OiBib29sZWFuLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIHN0YXR1cz86IE5iQ29tcG9uZW50U3RhdHVzLFxuICAgIHBvc2l0aW9uPzogTmJHbG9iYWxQb3NpdGlvbixcbiAgICBkdXJhdGlvbj86IG51bWJlcixcbiAgICBoYXNJY29uPzogYm9vbGVhbixcbiAgICBkZXN0cm95QnlDbGljaz86IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRpdGxlKSB7IHRpdGxlID0gdGhpcy50aXRsZShzdGF0dXMpOyB9XG4gICAgdGhpcy50cmFuc2xhdGUuZ2V0KHRpdGxlKS5zdWJzY3JpYmUoKHJlc3VsdFRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRpdGxlID0gcmVzdWx0VGl0bGU7XG4gICAgICBpZiAoY29udGVudEhhc0kxOG4pIHtcbiAgICAgICAgdGhpcy5idWlsZChjb250ZW50LCB0aXRsZSwgc3RhdHVzLCBwb3NpdGlvbiwgZHVyYXRpb24sIGhhc0ljb24sIGRlc3Ryb3lCeUNsaWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChjb250ZW50KS5zdWJzY3JpYmUoKHJlc3VsdENvbnRlbnQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRoaXMuYnVpbGQocmVzdWx0Q29udGVudCwgdGl0bGUsIHN0YXR1cywgcG9zaXRpb24sIGR1cmF0aW9uLCBoYXNJY29uLCBkZXN0cm95QnlDbGljayk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZChcbiAgICBjb250ZW50OiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBzdGF0dXM6IE5iQ29tcG9uZW50U3RhdHVzLFxuICAgIHBvc2l0aW9uOiBOYkdsb2JhbFBvc2l0aW9uLFxuICAgIGR1cmF0aW9uOiBudW1iZXIsXG4gICAgaGFzSWNvbjogYm9vbGVhbixcbiAgICBkZXN0cm95QnlDbGljazogYm9vbGVhbikge1xuICAgIHRoaXMudG9hc3RyU2VydmljZS5zaG93KGNvbnRlbnQsIHRpdGxlLCB7XG4gICAgICBzdGF0dXM6IHN0YXR1cyA/IHN0YXR1cyA6IHRoaXMuc3RhdHVzLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uID8gcG9zaXRpb24gOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uID8gZHVyYXRpb24gOiB0aGlzLmR1cmF0aW9uLFxuICAgICAgaGFzSWNvbjogaGFzSWNvbiA/IGhhc0ljb24gOiB0aGlzLmhhc0ljb24sXG4gICAgICBkZXN0cm95QnlDbGljazogZGVzdHJveUJ5Q2xpY2sgPyBkZXN0cm95QnlDbGljayA6IHRoaXMuZGVzdHJveUJ5Q2xpY2ssXG4gICAgICBwcmV2ZW50RHVwbGljYXRlczogdGhpcy5wcmV2ZW50RHVwbGljYXRlcyxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdGl0bGUoc3RhdHVzOiBOYkNvbXBvbmVudFN0YXR1cykge1xuICAgIGxldCB0aXRsZSA9ICdTdWNjZXNzJztcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSAncHJpbWFyeSc6XG4gICAgICAgIHRpdGxlID0gJ05vdGlmaWNhdGlvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHRpdGxlID0gJ1dhcm5pbmcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XG4gICAgICAgIHRpdGxlID0gJ0ZhaWx1cmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICB0aXRsZSA9ICdJbmZvcm1hdGlvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG59XG4iXX0=