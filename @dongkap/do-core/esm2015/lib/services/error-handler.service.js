import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import * as i0 from "@angular/core";
export class ErrorHandlerService {
    handleError(error) {
        if (error.message) {
            if (error.message.includes('No loader found for file')) {
                return EMPTY;
            }
            else if (error.message.includes('mousedown') || error.message.includes('mousemove') ||
                error.message.includes('mouseup') || error.message.includes('mouseout') ||
                error.message.includes('mousewheel') || error.message.includes('DOMMouseScroll') ||
                error.message.includes('dblclick') || error.message.includes('touchstart') ||
                error.message.includes('touchmove') || error.message.includes('touchend')) {
                return EMPTY;
            }
        }
        throw error;
    }
}
ErrorHandlerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ErrorHandlerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ErrorHandlerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ErrorHandlerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ErrorHandlerService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tY29yZS9zcmMvbGliL3NlcnZpY2VzL2Vycm9yLWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUc3QixNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLFdBQVcsQ0FBQyxLQUFZO1FBQ3RCLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7Z0JBQ3RELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7aUJBQU0sSUFBSyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBUSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7Z0JBQzlFLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFVLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDN0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ25GLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFTLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztnQkFDL0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQVEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3pGLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE1BQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7aUhBZlUsbUJBQW1CO3FIQUFuQixtQkFBbUI7NEZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFTVBUWSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVyU2VydmljZSBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XG5cbiAgaGFuZGxlRXJyb3IoZXJyb3I6IEVycm9yKSB7XG4gICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdObyBsb2FkZXIgZm91bmQgZm9yIGZpbGUnKSkge1xuICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICB9IGVsc2UgaWYgKCBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdtb3VzZWRvd24nKSAgICAgfHwgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbW91c2Vtb3ZlJykgfHxcbiAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ21vdXNldXAnKSAgICAgICB8fCBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdtb3VzZW91dCcpIHx8XG4gICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdtb3VzZXdoZWVsJykgICAgfHwgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnRE9NTW91c2VTY3JvbGwnKSB8fFxuICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnZGJsY2xpY2snKSAgICAgIHx8IGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ3RvdWNoc3RhcnQnKSB8fFxuICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygndG91Y2htb3ZlJykgICAgIHx8IGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ3RvdWNoZW5kJykpIHtcbiAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG59XG4iXX0=