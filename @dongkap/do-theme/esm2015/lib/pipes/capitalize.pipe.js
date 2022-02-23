import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class CapitalizePipe {
    transform(input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    }
}
CapitalizePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CapitalizePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
CapitalizePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CapitalizePipe, name: "ngxCapitalize" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CapitalizePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ngxCapitalize' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tdGhlbWUvc3JjL2xpYi9waXBlcy9jYXBpdGFsaXplLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3BELE1BQU0sT0FBTyxjQUFjO0lBRXpCLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNO1lBQzFCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoRSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ1osQ0FBQzs7NEdBTlUsY0FBYzswR0FBZCxjQUFjOzRGQUFkLGNBQWM7a0JBRDFCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICduZ3hDYXBpdGFsaXplJyB9KVxuZXhwb3J0IGNsYXNzIENhcGl0YWxpemVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBpbnB1dCAmJiBpbnB1dC5sZW5ndGhcbiAgICAgID8gKGlucHV0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaW5wdXQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSlcbiAgICAgIDogaW5wdXQ7XG4gIH1cbn1cbiJdfQ==