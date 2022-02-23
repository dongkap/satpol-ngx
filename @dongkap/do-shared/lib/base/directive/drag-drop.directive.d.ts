import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DragDropDirective {
    onFileDropped: EventEmitter<any>;
    opacity: string;
    styleOpacity: string;
    onDragOver(evt: any): void;
    onDragLeave(evt: any): void;
    ondrop(evt: any): void;
    onMouseOver(evt: any): void;
    onMouseLeave(evt: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DragDropDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DragDropDirective, "[doDragDrop]", never, { "opacity": "opacity"; }, { "onFileDropped": "onFileDropped"; }, never>;
}
