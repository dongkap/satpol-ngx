import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PluralPipe implements PipeTransform {
    transform(input: number, label: string, pluralLabel?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PluralPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PluralPipe, "ngxPlural">;
}
