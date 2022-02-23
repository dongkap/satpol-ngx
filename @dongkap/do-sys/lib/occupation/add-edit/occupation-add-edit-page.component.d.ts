import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseFormComponent, CheckboxModel } from '@dongkap/do-shared';
import { OccupationService } from '../services/occupation.service';
import * as i0 from "@angular/core";
export declare class OccupationAddEditPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private route;
    private occupationService;
    action: 'Add' | 'Edit';
    dataDefault: CheckboxModel[];
    constructor(injector: Injector, router: Router, route: ActivatedRoute, occupationService: OccupationService);
    ngOnInit(): void;
    onReset(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OccupationAddEditPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OccupationAddEditPageComponent, "do-occupation-add-edit-page", never, {}, {}, never, never>;
}
