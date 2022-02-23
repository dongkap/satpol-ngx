import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFormComponent, CheckboxModel, SelectParamModel } from '@dongkap/do-shared';
import { InventoryService } from '../services/inventory.service';
import * as i0 from "@angular/core";
export declare class InventoryAddEditPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private route;
    private inventoryService;
    action: 'Add' | 'Edit';
    apiSelectCondition: HttpBaseModel;
    paramSelectCondition: SelectParamModel[];
    apiSelectBusinessPartner: HttpBaseModel;
    dataDefault: CheckboxModel[];
    isAtOffice: boolean;
    constructor(injector: Injector, router: Router, route: ActivatedRoute, inventoryService: InventoryService);
    ngOnInit(): void;
    onReset(): void;
    onCheckAtOffice(event: CheckboxModel[]): void;
    onSubmit(): void;
    selectLabel(prop: string): string;
    selectValue(prop: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<InventoryAddEditPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InventoryAddEditPageComponent, "do-inventory-add-edit-page", never, {}, {}, never, never>;
}
