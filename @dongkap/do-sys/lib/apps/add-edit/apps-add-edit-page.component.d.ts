import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseFormComponent } from '@dongkap/do-shared';
import { AppsService } from '../services/apps.service';
import * as i0 from "@angular/core";
export declare class AppsAddEditPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private route;
    private appsService;
    action: 'Add' | 'Edit';
    constructor(injector: Injector, router: Router, route: ActivatedRoute, appsService: AppsService);
    ngOnInit(): void;
    onReset(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppsAddEditPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppsAddEditPageComponent, "do-apps-add-edit-page", never, {}, {}, never, never>;
}
