import * as i0 from "@angular/core";
export declare class DoLabelTextComponent {
    colLabel: number;
    colContent: number;
    skeleton: boolean;
    name: string;
    set content(data: string);
    dividerlabel: boolean;
    numeric: boolean;
    label: string;
    nolabel: boolean;
    required: boolean;
    showMoreMode: boolean;
    maxShowMore: number;
    paramError: any;
    originalContent: string;
    value: string;
    showMore: boolean;
    constructor();
    onShowMore(): void;
    private onLess;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoLabelTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoLabelTextComponent, "do-label-text", never, { "colLabel": "colLabel"; "colContent": "colContent"; "skeleton": "skeleton"; "name": "name"; "content": "content"; "dividerlabel": "dividerlabel"; "numeric": "numeric"; "label": "label"; "nolabel": "nolabel"; "required": "required"; "showMoreMode": "showMoreMode"; "maxShowMore": "maxShowMore"; "paramError": "paramError"; }, {}, never, never>;
}
