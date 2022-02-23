import { LocaleModel } from '@dongkap/do-core';
import { ParameterGroupModel, ParameterModel } from '../models/parameter.model';
import * as i0 from "@angular/core";
export declare class ParameterService {
    private parameter;
    private parameterGroup;
    private locales;
    getParameter(): ParameterModel;
    setParameter(parameter: ParameterModel): void;
    getParameterGroup(): ParameterGroupModel;
    setParameterGroup(parameterGroup: ParameterGroupModel): void;
    getLocales(): LocaleModel[];
    setLocales(locales: LocaleModel[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParameterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ParameterService>;
}
