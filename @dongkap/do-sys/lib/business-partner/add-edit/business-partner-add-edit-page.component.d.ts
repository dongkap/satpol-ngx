import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseFormComponent, CheckboxModel } from '@dongkap/do-shared';
import { BusinessPartnerService } from '../services/business-partner.service';
import * as i0 from "@angular/core";
export declare class BusinessPartnerAddEditPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private route;
    private businessPartnerService;
    action: 'Add' | 'Edit';
    patternEmail: string;
    patternPhoneNumber: string;
    dataDefault: CheckboxModel[];
    isB2bNonExpired: boolean;
    constructor(injector: Injector, router: Router, route: ActivatedRoute, businessPartnerService: BusinessPartnerService);
    ngOnInit(): void;
    onReset(): void;
    onCheckB2bNonExpired(event: CheckboxModel[]): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BusinessPartnerAddEditPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BusinessPartnerAddEditPageComponent, "do-business-partner-add-edit-page", never, {}, {}, never, never>;
}
