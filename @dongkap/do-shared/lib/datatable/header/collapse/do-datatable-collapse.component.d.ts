import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class DoDatatableCollapseComponent {
    private openedSubject;
    opened$: Observable<boolean>;
    openedState$: Observable<string>;
    constructor();
    toggle: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoDatatableCollapseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoDatatableCollapseComponent, "do-datatable-collapse, [do-datatable-collapse]", never, {}, {}, never, ["*"]>;
}
