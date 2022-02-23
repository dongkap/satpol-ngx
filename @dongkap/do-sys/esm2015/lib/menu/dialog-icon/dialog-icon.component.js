import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@angular/common";
import * as i3 from "@ngx-translate/core";
export class DialogIconComponent {
    constructor(ref, iconsLibrary) {
        this.ref = ref;
        this.evaIcons = [];
        this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
            .filter(icon => icon.indexOf('outline') !== -1);
    }
    choose(icon) {
        this.ref.close(icon);
    }
}
DialogIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialogIconComponent, deps: [{ token: i1.NbDialogRef }, { token: i1.NbIconLibraries }], target: i0.ɵɵFactoryTarget.Component });
DialogIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DialogIconComponent, selector: "do-dialog-icon", ngImport: i0, template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Icon' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <nb-icon *ngFor=\"let icon of evaIcons\" class=\"choose-icon\" (click)=\"choose(icon)\" [icon]=\"icon\" pack=\"eva\"></nb-icon>\n  </nb-card-body>\n</nb-card>\n", styles: [".nb-theme-default :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-dark :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-cosmic :host .choose-icon{margin:.75rem;cursor:pointer}.nb-theme-corporate :host .choose-icon{margin:.75rem;cursor:pointer}\n"], components: [{ type: i1.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i1.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i1.NbCardBodyComponent, selector: "nb-card-body" }, { type: i1.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DialogIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-dialog-icon',
                    templateUrl: 'dialog-icon.component.html',
                    styleUrls: ['dialog-icon.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.NbDialogRef }, { type: i1.NbIconLibraries }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvbWVudS9kaWFsb2ctaWNvbi9kaWFsb2ctaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9tZW51L2RpYWxvZy1pY29uL2RpYWxvZy1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUTFDLE1BQU0sT0FBTyxtQkFBbUI7SUFJOUIsWUFBc0IsR0FBcUMsRUFBRSxZQUE2QjtRQUFwRSxRQUFHLEdBQUgsR0FBRyxDQUFrQztRQUZwRCxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBRzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7O2lIQVhVLG1CQUFtQjtxR0FBbkIsbUJBQW1CLHNEQ1JoQyxpUkFRQTs0RkRBYSxtQkFBbUI7a0JBTC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsV0FBVyxFQUFFLDRCQUE0QjtvQkFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7aUJBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYkRpYWxvZ1JlZiwgTmJJY29uTGlicmFyaWVzIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1kaWFsb2ctaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGlhbG9nLWljb24uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nSWNvbkNvbXBvbmVudCB7XG5cbiAgcHVibGljIGV2YUljb25zOiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWY6IE5iRGlhbG9nUmVmPERpYWxvZ0ljb25Db21wb25lbnQ+LCBpY29uc0xpYnJhcnk6IE5iSWNvbkxpYnJhcmllcykge1xuICAgIHRoaXMuZXZhSWNvbnMgPSBBcnJheS5mcm9tKGljb25zTGlicmFyeS5nZXRQYWNrKCdldmEnKS5pY29ucy5rZXlzKCkpXG4gICAgICAuZmlsdGVyKGljb24gPT4gaWNvbi5pbmRleE9mKCdvdXRsaW5lJykgIT09IC0xKTtcbiAgfVxuXG4gIGNob29zZShpY29uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlZi5jbG9zZShpY29uKTtcbiAgfVxufVxuIiwiPG5iLWNhcmQ+XG4gIDxuYi1jYXJkLWhlYWRlcj5cbiAgICB7eyAnQ2hvb3NlIEljb24nIHwgdHJhbnNsYXRlIH19XG4gIDwvbmItY2FyZC1oZWFkZXI+XG4gIDxuYi1jYXJkLWJvZHk+XG4gICAgPG5iLWljb24gKm5nRm9yPVwibGV0IGljb24gb2YgZXZhSWNvbnNcIiBjbGFzcz1cImNob29zZS1pY29uXCIgKGNsaWNrKT1cImNob29zZShpY29uKVwiIFtpY29uXT1cImljb25cIiBwYWNrPVwiZXZhXCI+PC9uYi1pY29uPlxuICA8L25iLWNhcmQtYm9keT5cbjwvbmItY2FyZD5cbiJdfQ==