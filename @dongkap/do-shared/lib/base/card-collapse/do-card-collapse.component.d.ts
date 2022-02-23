import { OnDestroy } from '@angular/core';
import { DoCollapseComponent } from '../collapse/do-collapse.component';
import * as i0 from "@angular/core";
export declare class DoCardCollapseComponent implements OnDestroy {
    private defaultExpanded;
    show: boolean;
    collapse: DoCollapseComponent;
    header: string;
    set expanded(expanded: boolean);
    get expanded(): boolean;
    ngOnDestroy(): void;
    doCollapse(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoCardCollapseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoCardCollapseComponent, "do-card-collapse", never, { "header": "header"; "expanded": "expanded"; }, {}, never, ["*"]>;
}
