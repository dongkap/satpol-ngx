import { EventEmitter } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ValueAccessorDirective } from '../../base/value-accessor.component';
import * as i0 from "@angular/core";
export declare class ImageUploadComponent extends ValueAccessorDirective<any> implements OnDestroy {
    locale: string;
    dom: DomSanitizer;
    onPreview: EventEmitter<any>;
    image: string;
    height: number;
    width: number;
    radius: number;
    buttonUpload: boolean;
    skeleton: boolean;
    set uploadFn(finish: boolean);
    imageDefault: string;
    constructor(ngControl: NgControl, locale: string, dom: DomSanitizer);
    writeValue(value: any): void;
    upload(files: any[]): void;
    ngOnDestroy(): void;
    onInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageUploadComponent, [{ optional: true; self: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageUploadComponent, "do-image-upload", never, { "image": "image"; "height": "height"; "width": "width"; "radius": "radius"; "buttonUpload": "buttonUpload"; "skeleton": "skeleton"; "uploadFn": "uploadFn"; }, { "onPreview": "onPreview"; }, never, never>;
}
