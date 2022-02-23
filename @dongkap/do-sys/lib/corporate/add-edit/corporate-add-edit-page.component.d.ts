import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseFormComponent, CheckboxModel } from '@dongkap/do-shared';
import { CorporateService } from '../services/corporate.service';
import * as i0 from "@angular/core";
export declare class CorporateAddEditPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private route;
    private corporateService;
    action: 'Add' | 'Edit';
    patternEmail: string;
    patternPhoneNumber: string;
    dataDefault: CheckboxModel[];
    constructor(injector: Injector, router: Router, route: ActivatedRoute, corporateService: CorporateService);
    ngOnInit(): void;
    onReset(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CorporateAddEditPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CorporateAddEditPageComponent, "do-corporate-add-edit-page", never, {}, {}, never, never>;
}
