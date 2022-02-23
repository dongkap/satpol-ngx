import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class DoCollapseComponent {
    private openedSubject;
    opened$: Observable<boolean>;
    openedState$: Observable<string>;
    set expanded(expanded: boolean);
    constructor();
    toggle: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoCollapseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoCollapseComponent, "do-collapse, [do-collapse]", never, { "expanded": "expanded"; }, {}, never, ["*"]>;
}
