import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TreeMode } from 'tree-ngx';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "../../services/role.service";
import * as i2 from "tree-ngx";
import * as i3 from "@angular/common";
export class RoleExtraPageComponent extends BaseFormComponent {
    constructor(injector, roleService) {
        super(injector);
        this.injector = injector;
        this.roleService = roleService;
        this.onSelect = new EventEmitter();
        this.nodeItems = [];
        this.options = {
            mode: TreeMode.MultiSelect,
            checkboxes: true,
            alwaysEmitSelected: true,
        };
        this.title = null;
        this.data = [];
    }
    ngOnInit() { }
    loadDataMenu(extraData) {
        if (extraData.length > 0) {
            return of(() => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...extraData];
            });
        }
        else {
            return this.http.HTTP_AUTH(this.api['security']['get-function-menus'], null, null, null, ['extra', this.roleService.getRole().authority]).pipe(map((response) => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...response];
                this.data = [];
                response.forEach(val => {
                    if (val === null || val === void 0 ? void 0 : val.children) {
                        val === null || val === void 0 ? void 0 : val.children.forEach(child => {
                            if (child.selected) {
                                this.data = [...this.data, child.item];
                            }
                        });
                    }
                    else {
                        if (val.selected) {
                            this.data = [...this.data, val.item];
                        }
                    }
                });
                return this.data;
            }));
        }
    }
    initDataMenu(extraData) {
        if (extraData.length > 0) {
            return of(() => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...extraData];
            });
        }
        else {
            return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['extra']).pipe(map((response) => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...response];
            }));
        }
    }
    select(datas) {
        this.onSelect.emit(datas);
    }
}
RoleExtraPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleExtraPageComponent, deps: [{ token: i0.Injector }, { token: i1.RoleService }], target: i0.ɵɵFactoryTarget.Component });
RoleExtraPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RoleExtraPageComponent, selector: "do-role-extra-page", outputs: { onSelect: "onSelect" }, usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <tree-ngx\n      (selectedItems)=\"select($event)\"\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeExtra>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group\n          }\">\n          {{node.name}}\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n</div>\n", styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px #226699 solid}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox{display:inline-block;position:relative;top:3px;left:5px;width:16px;height:16px;cursor:pointer}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:\"\";height:25px;transition:height .3s linear,max-height 0s .3s linear;max-height:0px}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility 0s .3s,max-height 0s .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455A64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455A64}.nb-theme-default .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-default .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-default .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-default .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-default .action-trash:hover{color:#ff708d}.nb-theme-dark .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-dark .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-dark .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-dark .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-dark .action-trash:hover{color:#ff708d}.nb-theme-cosmic .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-cosmic .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-cosmic .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-cosmic .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-cosmic .action-trash:hover{color:#ff708d}.nb-theme-corporate .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-corporate .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-corporate .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-corporate .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-corporate .action-trash:hover{color:#ff708d}\n"], components: [{ type: i2.ɵa, selector: "tree-ngx", inputs: ["options", "callbacks", "filter", "nodeItems"], outputs: ["selectedItems"] }], directives: [{ type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleExtraPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-role-extra-page',
                    styleUrls: ['./role-extra-page.component.scss'],
                    templateUrl: './role-extra-page.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.RoleService }]; }, propDecorators: { onSelect: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1leHRyYS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL3JvbGUvYWRkLWVkaXQvZXh0cmEvcm9sZS1leHRyYS1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL3JvbGUvYWRkLWVkaXQvZXh0cmEvcm9sZS1leHRyYS1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFZLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQVN2RCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsaUJBQXNCO0lBWWhFLFlBQ1MsUUFBa0IsRUFDakIsV0FBd0I7UUFDaEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRlQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVp4QixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDekQsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQVE7WUFDcEIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxXQUFXO1lBQzFCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGtCQUFrQixFQUFFLElBQUk7U0FDekIsQ0FBQztRQUNLLFVBQUssR0FBVyxJQUFJLENBQUM7UUFDcEIsU0FBSSxHQUFV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LEtBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7b0hBckVVLHNCQUFzQjt3R0FBdEIsc0JBQXNCLG9IQ2RuQyxnZ0JBbUJBOzRGRExhLHNCQUFzQjtrQkFObEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztvQkFDL0MsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDO3lIQUdXLFFBQVE7c0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRyZWVNb2RlIH0gZnJvbSAndHJlZS1uZ3gnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQgfSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHsgUm9sZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yb2xlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1yb2xlLWV4dHJhLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9yb2xlLWV4dHJhLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3JvbGUtZXh0cmEtcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFJvbGVFeHRyYVBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KCkgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHB1YmxpYyBub2RlSXRlbXM6IGFueVtdID0gW107XG4gIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgbW9kZTogVHJlZU1vZGUuTXVsdGlTZWxlY3QsXG4gICAgY2hlY2tib3hlczogdHJ1ZSxcbiAgICBhbHdheXNFbWl0U2VsZWN0ZWQ6IHRydWUsXG4gIH07XG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBkYXRhOiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb2xlU2VydmljZTogUm9sZVNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgbG9hZERhdGFNZW51KGV4dHJhRGF0YT86IGFueVtdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAoZXh0cmFEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBvZigoKSA9PiB7XG4gICAgICAgIHRoaXMubm9kZUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMubm9kZUl0ZW1zID0gWy4uLnRoaXMubm9kZUl0ZW1zLCAuLi5leHRyYURhdGFdO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuSFRUUF9BVVRIKFxuICAgICAgICB0aGlzLmFwaVsnc2VjdXJpdHknXVsnZ2V0LWZ1bmN0aW9uLW1lbnVzJ10sIG51bGwsIG51bGwsIG51bGwsXG4gICAgICAgIFsnZXh0cmEnLCB0aGlzLnJvbGVTZXJ2aWNlLmdldFJvbGUoKS5hdXRob3JpdHldKS5waXBlKG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubm9kZUl0ZW1zID0gW107XG4gICAgICAgICAgdGhpcy5ub2RlSXRlbXMgPSBbLi4udGhpcy5ub2RlSXRlbXMsIC4uLnJlc3BvbnNlXTtcbiAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgICAgICByZXNwb25zZS5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICBpZiAodmFsPy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICB2YWw/LmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gWy4uLnRoaXMuZGF0YSwgY2hpbGQuaXRlbV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh2YWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBbLi4udGhpcy5kYXRhLCB2YWwuaXRlbV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaW5pdERhdGFNZW51KGV4dHJhRGF0YT86IGFueVtdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAoZXh0cmFEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBvZigoKSA9PiB7XG4gICAgICAgIHRoaXMubm9kZUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMubm9kZUl0ZW1zID0gWy4uLnRoaXMubm9kZUl0ZW1zLCAuLi5leHRyYURhdGFdO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuSFRUUF9BVVRIKFxuICAgICAgICB0aGlzLmFwaVsnc2VjdXJpdHknXVsnZ2V0LXRyZWUtbWVudXMnXSwgbnVsbCwgbnVsbCwgbnVsbCxcbiAgICAgICAgWydleHRyYSddKS5waXBlKG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMubm9kZUl0ZW1zID0gW107XG4gICAgICAgICAgdGhpcy5ub2RlSXRlbXMgPSBbLi4udGhpcy5ub2RlSXRlbXMsIC4uLnJlc3BvbnNlXTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdChkYXRhczogYW55W10pIHtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoZGF0YXMpO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC1sZy00XCI+XG4gICAgPHRyZWUtbmd4XG4gICAgICAoc2VsZWN0ZWRJdGVtcyk9XCJzZWxlY3QoJGV2ZW50KVwiXG4gICAgICBbbm9kZUl0ZW1zXT1cIm5vZGVJdGVtc1wiXG4gICAgICBbb3B0aW9uc109XCJvcHRpb25zXCJcbiAgICAgICN0cmVlRXh0cmE+XG4gICAgICA8bmctdGVtcGxhdGUgI25vZGVOYW1lVGVtcGxhdGUgbGV0LW5vZGU9XCJub2RlXCIgbGV0LWNvbnRleHQ9XCJjb250ZXh0XCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJub2RlLWFjdGlvblwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgJ25vZGUtYWN0aW9uJzogIW5vZGUuaXRlbS5ncm91cFxuICAgICAgICAgIH1cIj5cbiAgICAgICAgICB7e25vZGUubmFtZX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC90cmVlLW5neD5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==