import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CustomPreloadingStrategy implements PreloadingStrategy {
    preloadedModules: string[];
    preload(route: Route, load: () => Observable<any>): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomPreloadingStrategy, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomPreloadingStrategy>;
}
