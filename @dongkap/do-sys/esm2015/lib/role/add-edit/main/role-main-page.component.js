import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TreeMode } from 'tree-ngx';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "../../services/role.service";
import * as i2 from "tree-ngx";
import * as i3 from "@angular/common";
export class RoleMainPageComponent extends BaseFormComponent {
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
    loadDataMenu(mainData) {
        if (mainData.length > 0) {
            return of(() => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...mainData];
            });
        }
        else {
            return this.http.HTTP_AUTH(this.api['security']['get-function-menus'], null, null, null, ['main', this.roleService.getRole().authority]).pipe(map((response) => {
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
    initDataMenu(mainData) {
        if (mainData.length > 0) {
            return of(() => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...mainData];
            });
        }
        else {
            return this.http.HTTP_AUTH(this.api['security']['get-tree-menus'], null, null, null, ['main']).pipe(map((response) => {
                this.nodeItems = [];
                this.nodeItems = [...this.nodeItems, ...response];
            }));
        }
    }
    select(datas) {
        this.onSelect.emit(datas);
    }
}
RoleMainPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleMainPageComponent, deps: [{ token: i0.Injector }, { token: i1.RoleService }], target: i0.ɵɵFactoryTarget.Component });
RoleMainPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RoleMainPageComponent, selector: "do-role-main-page", outputs: { onSelect: "onSelect" }, usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <tree-ngx\n      (selectedItems)=\"select($event)\"\n      [nodeItems]=\"nodeItems\"\n      [options]=\"options\"\n      #treeMain>\n      <ng-template #nodeNameTemplate let-node=\"node\" let-context=\"context\">\n        <span\n          class=\"node-action\"\n          [ngClass]=\"{\n            'node-action': !node.item.group,\n            'node-action-group': node.item.group\n          }\">\n          {{node.name}}\n        </span>\n      </ng-template>\n    </tree-ngx>\n  </div>\n</div>\n", styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px #226699 solid}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox{display:inline-block;position:relative;top:3px;left:5px;width:16px;height:16px;cursor:pointer}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:\"\";height:25px;transition:height .3s linear,max-height 0s .3s linear;max-height:0px}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility 0s .3s,max-height 0s .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455A64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455A64}.nb-theme-default .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-default .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-default .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-default .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-default .action-trash:hover{color:#ff708d}.nb-theme-dark .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-dark .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-dark .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-dark .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-dark .action-trash:hover{color:#ff708d}.nb-theme-cosmic .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-cosmic .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#fff;border-radius:0;cursor:pointer}.nb-theme-cosmic .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-cosmic .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-cosmic .action-trash:hover{color:#ff708d}.nb-theme-corporate .node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}.nb-theme-corporate .node-action{font-family:Open Sans,sans-serif;font-weight:600;line-height:1.5rem;color:#222b45;border-radius:0;cursor:pointer}.nb-theme-corporate .node-action:hover{background-color:transparent;color:#598bff;cursor:pointer}.nb-theme-corporate .tree-action{margin-left:.5rem;cursor:pointer}.nb-theme-corporate .action-trash:hover{color:#ff708d}\n"], components: [{ type: i2.ɵa, selector: "tree-ngx", inputs: ["options", "callbacks", "filter", "nodeItems"], outputs: ["selectedItems"] }], directives: [{ type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RoleMainPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-role-main-page',
                    styleUrls: ['./role-main-page.component.scss'],
                    templateUrl: './role-main-page.component.html',
                    encapsulation: ViewEncapsulation.None,
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.RoleService }]; }, propDecorators: { onSelect: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1tYWluLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvcm9sZS9hZGQtZWRpdC9tYWluL3JvbGUtbWFpbi1wYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL3JvbGUvYWRkLWVkaXQvbWFpbi9yb2xlLW1haW4tcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBWSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFTdkQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGlCQUFzQjtJQVkvRCxZQUNTLFFBQWtCLEVBQ2pCLFdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZULGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFaeEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3pELGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFRO1lBQ3BCLElBQUksRUFBRSxRQUFRLENBQUMsV0FBVztZQUMxQixVQUFVLEVBQUUsSUFBSTtZQUNoQixrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUM7UUFDSyxVQUFLLEdBQVcsSUFBSSxDQUFDO1FBQ3BCLFNBQUksR0FBVSxFQUFF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O1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7O21IQXJFVSxxQkFBcUI7dUdBQXJCLHFCQUFxQixtSENkbEMsa2pCQW9CQTs0RkROYSxxQkFBcUI7a0JBTmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7b0JBQzlDLFdBQVcsRUFBRSxpQ0FBaUM7b0JBQzlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzt5SEFHVyxRQUFRO3NCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmVlTW9kZSB9IGZyb20gJ3RyZWUtbmd4JztcbmltcG9ydCB7IEJhc2VGb3JtQ29tcG9uZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcbmltcG9ydCB7IFJvbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcm9sZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tcm9sZS1tYWluLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9yb2xlLW1haW4tcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcm9sZS1tYWluLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBSb2xlTWFpblBhZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUNvbXBvbmVudDxhbnk+IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KCkgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHB1YmxpYyBub2RlSXRlbXM6IGFueVtdID0gW107XG4gIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgbW9kZTogVHJlZU1vZGUuTXVsdGlTZWxlY3QsXG4gICAgY2hlY2tib3hlczogdHJ1ZSxcbiAgICBhbHdheXNFbWl0U2VsZWN0ZWQ6IHRydWUsXG4gIH07XG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBkYXRhOiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb2xlU2VydmljZTogUm9sZVNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgbG9hZERhdGFNZW51KG1haW5EYXRhPzogYW55W10pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGlmIChtYWluRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gb2YoKCkgPT4ge1xuICAgICAgICB0aGlzLm5vZGVJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLm5vZGVJdGVtcyA9IFsuLi50aGlzLm5vZGVJdGVtcywgLi4ubWFpbkRhdGFdO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuSFRUUF9BVVRIKFxuICAgICAgICB0aGlzLmFwaVsnc2VjdXJpdHknXVsnZ2V0LWZ1bmN0aW9uLW1lbnVzJ10sIG51bGwsIG51bGwsIG51bGwsXG4gICAgICAgIFsnbWFpbicsIHRoaXMucm9sZVNlcnZpY2UuZ2V0Um9sZSgpLmF1dGhvcml0eV0pLnBpcGUobWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5ub2RlSXRlbXMgPSBbXTtcbiAgICAgICAgICB0aGlzLm5vZGVJdGVtcyA9IFsuLi50aGlzLm5vZGVJdGVtcywgLi4ucmVzcG9uc2VdO1xuICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgICAgIGlmICh2YWw/LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgIHZhbD8uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBbLi4udGhpcy5kYXRhLCBjaGlsZC5pdGVtXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHZhbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFsuLi50aGlzLmRhdGEsIHZhbC5pdGVtXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBpbml0RGF0YU1lbnUobWFpbkRhdGE/OiBhbnlbXSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKG1haW5EYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBvZigoKSA9PiB7XG4gICAgICAgIHRoaXMubm9kZUl0ZW1zID0gW107XG4gICAgICAgIHRoaXMubm9kZUl0ZW1zID0gWy4uLnRoaXMubm9kZUl0ZW1zLCAuLi5tYWluRGF0YV07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5IVFRQX0FVVEgoXG4gICAgICAgIHRoaXMuYXBpWydzZWN1cml0eSddWydnZXQtdHJlZS1tZW51cyddLCBudWxsLCBudWxsLCBudWxsLFxuICAgICAgICBbJ21haW4nXSkucGlwZShtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLm5vZGVJdGVtcyA9IFtdO1xuICAgICAgICAgIHRoaXMubm9kZUl0ZW1zID0gWy4uLnRoaXMubm9kZUl0ZW1zLCAuLi5yZXNwb25zZV07XG4gICAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3QoZGF0YXM6IGFueVtdKSB7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KGRhdGFzKTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtbGctNFwiPlxuICAgIDx0cmVlLW5neFxuICAgICAgKHNlbGVjdGVkSXRlbXMpPVwic2VsZWN0KCRldmVudClcIlxuICAgICAgW25vZGVJdGVtc109XCJub2RlSXRlbXNcIlxuICAgICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gICAgICAjdHJlZU1haW4+XG4gICAgICA8bmctdGVtcGxhdGUgI25vZGVOYW1lVGVtcGxhdGUgbGV0LW5vZGU9XCJub2RlXCIgbGV0LWNvbnRleHQ9XCJjb250ZXh0XCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJub2RlLWFjdGlvblwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgJ25vZGUtYWN0aW9uJzogIW5vZGUuaXRlbS5ncm91cCxcbiAgICAgICAgICAgICdub2RlLWFjdGlvbi1ncm91cCc6IG5vZGUuaXRlbS5ncm91cFxuICAgICAgICAgIH1cIj5cbiAgICAgICAgICB7e25vZGUubmFtZX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC90cmVlLW5neD5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==