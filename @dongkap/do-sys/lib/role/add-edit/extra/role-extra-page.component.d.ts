import { EventEmitter, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseFormComponent } from '@dongkap/do-shared';
import { RoleService } from '../../services/role.service';
import * as i0 from "@angular/core";
export declare class RoleExtraPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private roleService;
    onSelect: EventEmitter<any>;
    nodeItems: any[];
    options: any;
    title: string;
    private data;
    constructor(injector: Injector, roleService: RoleService);
    ngOnInit(): void;
    loadDataMenu(extraData?: any[]): Observable<any>;
    initDataMenu(extraData?: any[]): Observable<any>;
    select(datas: any[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleExtraPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RoleExtraPageComponent, "do-role-extra-page", never, {}, { "onSelect": "onSelect"; }, never, never>;
}
