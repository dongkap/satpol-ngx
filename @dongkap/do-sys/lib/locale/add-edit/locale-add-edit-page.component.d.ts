import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { HttpBaseModel } from '@dongkap/do-core';
import { BaseFormComponent, CheckboxModel } from '@dongkap/do-shared';
import { LocaleService } from '../services/locale.service';
import * as i0 from "@angular/core";
export declare class LocaleAddEditPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private route;
    private localeService;
    private dialogService;
    action: 'Add' | 'Edit';
    apiSelectLanguage: HttpBaseModel;
    dataDefault: CheckboxModel[];
    constructor(injector: Injector, router: Router, route: ActivatedRoute, localeService: LocaleService, dialogService: NbDialogService);
    ngOnInit(): void;
    onSearchFlag(): void;
    onReset(): void;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocaleAddEditPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocaleAddEditPageComponent, "do-locale-add-edit-page", never, {}, {}, never, never>;
}
