import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class DoPageOutletComponent {
    private router;
    header: string;
    url: string;
    width: number;
    dataSelect: any[];
    selected: any;
    param: any;
    hidefooter: boolean;
    showToggle: boolean;
    isCollapsed: boolean;
    iconToggle: string;
    selectChange: EventEmitter<any>;
    onCollapsed: EventEmitter<any>;
    onExpanded: EventEmitter<any>;
    constructor(router: Router);
    back(): boolean;
    onChangeSelect(event: any): void;
    collapsed(event: any): void;
    expanded(event: any): void;
    toggleCollapse(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoPageOutletComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoPageOutletComponent, "do-page-outlet", never, { "header": "header"; "url": "url"; "width": "width"; "dataSelect": "dataSelect"; "selected": "selected"; "param": "param"; "hidefooter": "hidefooter"; "showToggle": "showToggle"; "isCollapsed": "isCollapsed"; "iconToggle": "iconToggle"; }, { "selectChange": "selectChange"; "onCollapsed": "onCollapsed"; "onExpanded": "onExpanded"; }, never, ["[pagecontent]", "[pagefooter]"]>;
}
