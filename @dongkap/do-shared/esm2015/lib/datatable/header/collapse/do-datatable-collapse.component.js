import { Component, } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DoDatatableCollapseComponent {
    constructor() {
        this.toggle = () => {
            this.opened$.pipe(take(1)).subscribe(x => this.openedSubject.next(!x));
        };
        this.openedSubject = new ReplaySubject(1);
        this.openedSubject.next(false);
        this.opened$ = this.openedSubject.asObservable();
        this.openedState$ = this.opened$.pipe(map(x => x ? 'expanded' : 'collapsed'));
    }
}
DoDatatableCollapseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableCollapseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoDatatableCollapseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoDatatableCollapseComponent, selector: "do-datatable-collapse, [do-datatable-collapse]", ngImport: i0, template: "<div\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i1.AsyncPipe }, animations: [
        trigger('openedState', [
            state('collapsed', style({
                opacity: 0,
                overflow: 'hidden',
                height: '0px',
                minHeight: '0',
                padding: '0 0 0 0.5rem',
            })),
            state('expanded', style({
                opacity: 1,
                overflow: 'hidden',
                height: '*',
                padding: '1.5rem 0 0.5rem 0.5rem',
                'border-bottom': '1px solid #d1d4d7',
            })),
            transition('collapsed <=> expanded', animate('500ms ease-in-out')),
        ]),
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoDatatableCollapseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-datatable-collapse, [do-datatable-collapse]',
                    styleUrls: ['./do-datatable-collapse.component.scss'],
                    templateUrl: './do-datatable-collapse.component.html',
                    animations: [
                        trigger('openedState', [
                            state('collapsed', style({
                                opacity: 0,
                                overflow: 'hidden',
                                height: '0px',
                                minHeight: '0',
                                padding: '0 0 0 0.5rem',
                            })),
                            state('expanded', style({
                                opacity: 1,
                                overflow: 'hidden',
                                height: '*',
                                padding: '1.5rem 0 0.5rem 0.5rem',
                                'border-bottom': '1px solid #d1d4d7',
                            })),
                            transition('collapsed <=> expanded', animate('500ms ease-in-out')),
                        ]),
                    ],
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tZGF0YXRhYmxlLWNvbGxhcHNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2RhdGF0YWJsZS9oZWFkZXIvY29sbGFwc2UvZG8tZGF0YXRhYmxlLWNvbGxhcHNlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXNoYXJlZC9zcmMvbGliL2RhdGF0YWJsZS9oZWFkZXIvY29sbGFwc2UvZG8tZGF0YXRhYmxlLWNvbGxhcHNlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEdBQ1gsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQTRCM0MsTUFBTSxPQUFPLDRCQUE0QjtJQUt2QztRQU9BLFdBQU0sR0FBRyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFBO1FBUkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDOzswSEFWVSw0QkFBNEI7OEdBQTVCLDRCQUE0QixzRkN6Q3pDLG1JQUlNLHVKRGVRO1FBQ1YsT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUNyQixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FDdEI7Z0JBQ0UsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLFNBQVMsRUFBRSxHQUFHO2dCQUNkLE9BQU8sRUFBRSxjQUFjO2FBQzFCLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUNyQjtnQkFDRSxPQUFPLEVBQUUsQ0FBQztnQkFDVixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsT0FBTyxFQUFFLHdCQUF3QjtnQkFDakMsZUFBZSxFQUFFLG1CQUFtQjthQUN2QyxDQUFDLENBQUM7WUFDSCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDbkUsQ0FBQztLQUNIOzRGQUVVLDRCQUE0QjtrQkExQnhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdEQUFnRDtvQkFDMUQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7b0JBQ3JELFdBQVcsRUFBRSx3Q0FBd0M7b0JBQ3JELFVBQVUsRUFBRTt3QkFDVixPQUFPLENBQUMsYUFBYSxFQUFFOzRCQUNyQixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FDdEI7Z0NBQ0UsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsUUFBUSxFQUFFLFFBQVE7Z0NBQ2xCLE1BQU0sRUFBRSxLQUFLO2dDQUNiLFNBQVMsRUFBRSxHQUFHO2dDQUNkLE9BQU8sRUFBRSxjQUFjOzZCQUMxQixDQUFDLENBQUM7NEJBQ0gsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQ3JCO2dDQUNFLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFFBQVEsRUFBRSxRQUFRO2dDQUNsQixNQUFNLEVBQUUsR0FBRztnQ0FDWCxPQUFPLEVBQUUsd0JBQXdCO2dDQUNqQyxlQUFlLEVBQUUsbUJBQW1COzZCQUN2QyxDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3lCQUNuRSxDQUFDO3FCQUNIO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWRhdGF0YWJsZS1jb2xsYXBzZSwgW2RvLWRhdGF0YWJsZS1jb2xsYXBzZV0nLFxuICBzdHlsZVVybHM6IFsnLi9kby1kYXRhdGFibGUtY29sbGFwc2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLWRhdGF0YWJsZS1jb2xsYXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdvcGVuZWRTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZShcbiAgICAgICAge1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIGhlaWdodDogJzBweCcsXG4gICAgICAgICAgbWluSGVpZ2h0OiAnMCcsXG4gICAgICAgICAgcGFkZGluZzogJzAgMCAwIDAuNXJlbScsXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZShcbiAgICAgICAge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIGhlaWdodDogJyonLFxuICAgICAgICAgIHBhZGRpbmc6ICcxLjVyZW0gMCAwLjVyZW0gMC41cmVtJyxcbiAgICAgICAgICAnYm9yZGVyLWJvdHRvbSc6ICcxcHggc29saWQgI2QxZDRkNycsXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdjb2xsYXBzZWQgPD0+IGV4cGFuZGVkJywgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbi1vdXQnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvRGF0YXRhYmxlQ29sbGFwc2VDb21wb25lbnQge1xuICBwcml2YXRlIG9wZW5lZFN1YmplY3Q6IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj47XG4gIG9wZW5lZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIG9wZW5lZFN0YXRlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub3BlbmVkU3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICAgIHRoaXMub3BlbmVkU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLm9wZW5lZCQgPSB0aGlzLm9wZW5lZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5vcGVuZWRTdGF0ZSQgPSB0aGlzLm9wZW5lZCQucGlwZShtYXAoeCA9PiB4ID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnKSk7XG4gIH1cblxuICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5vcGVuZWQkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHggPT4gdGhpcy5vcGVuZWRTdWJqZWN0Lm5leHQoIXgpKTtcbiAgfVxuXG59XG4iLCI8ZGl2XG4gICAgW0BvcGVuZWRTdGF0ZV09XCJvcGVuZWRTdGF0ZSQgfCBhc3luY1wiXG4gICAgW25nQ2xhc3NdPVwib3BlbmVkU3RhdGUkIHwgYXN5bmNcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj4iXX0=