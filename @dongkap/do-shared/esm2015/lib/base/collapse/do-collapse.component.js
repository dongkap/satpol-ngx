import { Component, Input, } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class DoCollapseComponent {
    constructor() {
        this.toggle = () => {
            this.opened$.pipe(take(1)).subscribe(x => this.openedSubject.next(!x));
        };
        this.openedSubject = new ReplaySubject(1);
        this.openedSubject.next(false);
        this.opened$ = this.openedSubject.asObservable();
        this.openedState$ = this.opened$.pipe(map(x => x ? 'expanded' : 'collapsed'));
    }
    set expanded(expanded) {
        this.openedSubject.next(expanded);
    }
}
DoCollapseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCollapseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoCollapseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: DoCollapseComponent, selector: "do-collapse, [do-collapse]", inputs: { expanded: "expanded" }, ngImport: i0, template: "<div\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "async": i1.AsyncPipe }, animations: [
        trigger('openedState', [
            state('collapsed', style({
                opacity: 0,
                overflow: 'hidden',
                height: '0px',
                minHeight: '0',
                paddingTop: 0,
            })),
            state('expanded', style({
                opacity: 1,
                overflow: 'hidden',
                height: '*',
                paddingTop: '0.75rem',
            })),
            transition('collapsed <=> expanded', animate('500ms ease-in-out')),
        ]),
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCollapseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-collapse, [do-collapse]',
                    styleUrls: ['./do-collapse.component.scss'],
                    templateUrl: './do-collapse.component.html',
                    animations: [
                        trigger('openedState', [
                            state('collapsed', style({
                                opacity: 0,
                                overflow: 'hidden',
                                height: '0px',
                                minHeight: '0',
                                paddingTop: 0,
                            })),
                            state('expanded', style({
                                opacity: 1,
                                overflow: 'hidden',
                                height: '*',
                                paddingTop: '0.75rem',
                            })),
                            transition('collapsed <=> expanded', animate('500ms ease-in-out')),
                        ]),
                    ],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { expanded: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvYmFzZS9jb2xsYXBzZS9kby1jb2xsYXBzZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zaGFyZWQvc3JjL2xpYi9iYXNlL2NvbGxhcHNlL2RvLWNvbGxhcHNlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxPQUFPLEVBQ1AsVUFBVSxHQUNYLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUEyQjNDLE1BQU0sT0FBTyxtQkFBbUI7SUFROUI7UUFPQSxXQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQTtRQVJDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQVRELElBQW9CLFFBQVEsQ0FBQyxRQUFpQjtRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDOztpSEFOVSxtQkFBbUI7cUdBQW5CLG1CQUFtQixvR0N4Q2hDLG1JQUlNLHVKRGVRO1FBQ1YsT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUNyQixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FDdEI7Z0JBQ0UsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLFNBQVMsRUFBRSxHQUFHO2dCQUNkLFVBQVUsRUFBRSxDQUFDO2FBQ2hCLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUNyQjtnQkFDRSxPQUFPLEVBQUUsQ0FBQztnQkFDVixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsVUFBVSxFQUFFLFNBQVM7YUFDeEIsQ0FBQyxDQUFDO1lBQ0gsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ25FLENBQUM7S0FDSDs0RkFFVSxtQkFBbUI7a0JBekIvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO29CQUMzQyxXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLGFBQWEsRUFBRTs0QkFDckIsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQ3RCO2dDQUNFLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFFBQVEsRUFBRSxRQUFRO2dDQUNsQixNQUFNLEVBQUUsS0FBSztnQ0FDYixTQUFTLEVBQUUsR0FBRztnQ0FDZCxVQUFVLEVBQUUsQ0FBQzs2QkFDaEIsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUNyQjtnQ0FDRSxPQUFPLEVBQUUsQ0FBQztnQ0FDVixRQUFRLEVBQUUsUUFBUTtnQ0FDbEIsTUFBTSxFQUFFLEdBQUc7Z0NBQ1gsVUFBVSxFQUFFLFNBQVM7NkJBQ3hCLENBQUMsQ0FBQzs0QkFDSCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7eUJBQ25FLENBQUM7cUJBQ0g7aUJBQ0Y7MEVBS3FCLFFBQVE7c0JBQTNCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tY29sbGFwc2UsIFtkby1jb2xsYXBzZV0nLFxuICBzdHlsZVVybHM6IFsnLi9kby1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vZG8tY29sbGFwc2UuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignb3BlbmVkU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoXG4gICAgICAgIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICBoZWlnaHQ6ICcwcHgnLFxuICAgICAgICAgIG1pbkhlaWdodDogJzAnLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZShcbiAgICAgICAge1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIGhlaWdodDogJyonLFxuICAgICAgICAgIHBhZGRpbmdUb3A6ICcwLjc1cmVtJyxcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2NvbGxhcHNlZCA8PT4gZXhwYW5kZWQnLCBhbmltYXRlKCc1MDBtcyBlYXNlLWluLW91dCcpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9Db2xsYXBzZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgb3BlbmVkU3ViamVjdDogUmVwbGF5U3ViamVjdDxib29sZWFuPjtcbiAgb3BlbmVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgb3BlbmVkU3RhdGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgZXhwYW5kZWQoZXhwYW5kZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QubmV4dChleHBhbmRlZCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgdGhpcy5vcGVuZWQkID0gdGhpcy5vcGVuZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMub3BlbmVkU3RhdGUkID0gdGhpcy5vcGVuZWQkLnBpcGUobWFwKHggPT4geCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJykpO1xuICB9XG5cbiAgdG9nZ2xlID0gKCkgPT4ge1xuICAgIHRoaXMub3BlbmVkJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh4ID0+IHRoaXMub3BlbmVkU3ViamVjdC5uZXh0KCF4KSk7XG4gIH1cblxufVxuIiwiPGRpdlxuICAgIFtAb3BlbmVkU3RhdGVdPVwib3BlbmVkU3RhdGUkIHwgYXN5bmNcIlxuICAgIFtuZ0NsYXNzXT1cIm9wZW5lZFN0YXRlJCB8IGFzeW5jXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+Il19