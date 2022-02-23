/**
 * Returns true if the component extends the NgWizardStep class or implements the NgWizardStepInterface.
 *
 * @param componentRef The reference to the component to verify
 */
export function componentImplementsNgWizardStepInterface(componentRef) {
    return 'isValid' in componentRef && 'onNext' in componentRef && 'onPrevious' in componentRef;
}
/**
 * Returns the NgWizardStepData with the given path in the stepData list or undefined if none is
 * found.
 *
 * @param stepData The list with NgWizardStepDatas
 * @param path The path you want to get the NgWizardStepData for
 */
export function getStepDataForPath(stepData, path) {
    return stepData.find(data => data.path === path);
}
/**
 * Returns the NgWizardStepData for the given url in the stepData list or undefined if none is
 * found.
 *
 * @param stepData The list with NgWizardStepDatas
 * @param url The url which you want to get the NgWizardStepData for
 */
export function getStepDataForUrl(stepData, url) {
    // gets 'path' in the url '/wizard/path?key=value'
    const path = url.split('/').pop().split('?')[0];
    return getStepDataForPath(stepData, path);
}
/**
 * Returns the default wizard options.
 */
export function getDefaultWizardOptions() {
    return {
        name: '',
        baseUrl: '/',
        navBar: {
            icons: {
                previous: '<i class="cil-check-alt"></i>',
                current: '<i class="cil-pencil"></i>',
                next: '<i class="cil-lock-locked"></i>',
            },
        },
        buttons: {
            cancel: {
                label: 'Cancel',
            },
            previous: {
                label: 'Back',
            },
            next: {
                label: 'Next',
            },
            finish: {
                label: 'Submit',
            },
        }
    };
}
/**
 * Merges the wizard options in the wizard route's config with the default wizard options.
 *
 * @param wizardOptions The wizard options in the wizard route's config
 */
export function mergeWizardOptions(wizardOptions) {
    if (!wizardOptions) {
        return getDefaultWizardOptions();
    }
    return Object.assign(Object.assign({}, getDefaultWizardOptions()), wizardOptions);
}
/**
 * Returns the options passed to the wizard step route with an added title attribute.
 *
 * @param route The wizard step route configuration
 */
export function getWizardStepOptions(route) {
    if (!route.data) {
        return { title: getStepTitleFromRoute(route) };
    }
    return Object.assign(Object.assign({}, route.data), { title: getStepTitleFromRoute(route) });
}
/**
 * Returns the step title based on the Route configuration.
 * If the route has a data.title attribute it will be returned.
 * Else the path will be capitalized and '-' or '_' characters will be replaces by spaces.
 *
 * @param route The Angular Route object
 */
export function getStepTitleFromRoute(route) {
    if (route.data && route.data.title) {
        return route.data.title;
    }
    return capitalize(insertSpaces(route.path));
}
/**
 * Capitalizes the first character of the passed value.
 */
function capitalize(value) {
    if (!value) {
        return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}
/**
 * Replaces '-' and '_' characters by spaces.
 */
function insertSpaces(value) {
    if (!value) {
        return value;
    }
    return value.replace(/[-_]/g, ' ').trim();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8td2l6YXJkLnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc2hhcmVkL3NyYy9saWIvd2l6YXJkL3V0aWxzL2RvLXdpemFyZC51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLHdDQUF3QyxDQUFDLFlBQStCO0lBQ3RGLE9BQU8sU0FBUyxJQUFJLFlBQVksSUFBSSxRQUFRLElBQUksWUFBWSxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUM7QUFDL0YsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxRQUE0QixFQUFFLElBQVk7SUFDM0UsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFFBQTRCLEVBQUUsR0FBVztJQUN6RSxrREFBa0Q7SUFDbEQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsT0FBTyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLHVCQUF1QjtJQUNyQyxPQUFPO1FBQ0wsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsR0FBRztRQUNaLE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRTtnQkFDTCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxPQUFPLEVBQUUsNEJBQTRCO2dCQUNyQyxJQUFJLEVBQUUsaUNBQWlDO2FBQ3hDO1NBQ0Y7UUFDRCxPQUFPLEVBQUU7WUFDUCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLFFBQVE7YUFDaEI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsTUFBTTthQUNkO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1NBQ0Y7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsYUFBaUI7SUFDbEQsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNsQixPQUFPLHVCQUF1QixFQUFFLENBQUM7S0FDbEM7SUFFRCx1Q0FBWSx1QkFBdUIsRUFBRSxHQUFLLGFBQWEsRUFBRztBQUM1RCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxLQUFZO0lBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ2YsT0FBTyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0tBQ2hEO0lBRUQsdUNBQ0ssS0FBSyxDQUFDLElBQUksS0FDYixLQUFLLEVBQUUscUJBQXFCLENBQUMsS0FBSyxDQUFDLElBQ25DO0FBQ0osQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxLQUFZO0lBQ2hELElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNsQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3pCO0lBQ0QsT0FBTyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsVUFBVSxDQUFDLEtBQWE7SUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN0RSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLFlBQVksQ0FBQyxLQUFhO0lBQ2pDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb1dpemFyZFN0ZXBEYXRhIH0gZnJvbSAnLi4vd2l6YXJkLXN0ZXAvZG8td2l6YXJkLXN0ZXAtZGF0YS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRG9XaXphcmRPcHRpb25zIH0gZnJvbSAnLi4vd2l6YXJkLW9wdGlvbnMvZG8td2l6YXJkLW9wdGlvbnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IERvV2l6YXJkU3RlcE9wdGlvbnMgfSBmcm9tICcuLi93aXphcmQtc3RlcC9kby13aXphcmQtc3RlcC1vcHRpb25zJztcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbXBvbmVudCBleHRlbmRzIHRoZSBOZ1dpemFyZFN0ZXAgY2xhc3Mgb3IgaW1wbGVtZW50cyB0aGUgTmdXaXphcmRTdGVwSW50ZXJmYWNlLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRSZWYgVGhlIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHRvIHZlcmlmeVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50SW1wbGVtZW50c05nV2l6YXJkU3RlcEludGVyZmFjZShjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+KTogYm9vbGVhbiB7XG4gIHJldHVybiAnaXNWYWxpZCcgaW4gY29tcG9uZW50UmVmICYmICdvbk5leHQnIGluIGNvbXBvbmVudFJlZiAmJiAnb25QcmV2aW91cycgaW4gY29tcG9uZW50UmVmO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIE5nV2l6YXJkU3RlcERhdGEgd2l0aCB0aGUgZ2l2ZW4gcGF0aCBpbiB0aGUgc3RlcERhdGEgbGlzdCBvciB1bmRlZmluZWQgaWYgbm9uZSBpc1xuICogZm91bmQuXG4gKlxuICogQHBhcmFtIHN0ZXBEYXRhIFRoZSBsaXN0IHdpdGggTmdXaXphcmRTdGVwRGF0YXNcbiAqIEBwYXJhbSBwYXRoIFRoZSBwYXRoIHlvdSB3YW50IHRvIGdldCB0aGUgTmdXaXphcmRTdGVwRGF0YSBmb3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0ZXBEYXRhRm9yUGF0aChzdGVwRGF0YTogRG9XaXphcmRTdGVwRGF0YVtdLCBwYXRoOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ZXBEYXRhLmZpbmQoZGF0YSA9PiBkYXRhLnBhdGggPT09IHBhdGgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIE5nV2l6YXJkU3RlcERhdGEgZm9yIHRoZSBnaXZlbiB1cmwgaW4gdGhlIHN0ZXBEYXRhIGxpc3Qgb3IgdW5kZWZpbmVkIGlmIG5vbmUgaXNcbiAqIGZvdW5kLlxuICpcbiAqIEBwYXJhbSBzdGVwRGF0YSBUaGUgbGlzdCB3aXRoIE5nV2l6YXJkU3RlcERhdGFzXG4gKiBAcGFyYW0gdXJsIFRoZSB1cmwgd2hpY2ggeW91IHdhbnQgdG8gZ2V0IHRoZSBOZ1dpemFyZFN0ZXBEYXRhIGZvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RlcERhdGFGb3JVcmwoc3RlcERhdGE6IERvV2l6YXJkU3RlcERhdGFbXSwgdXJsOiBzdHJpbmcpIHtcbiAgLy8gZ2V0cyAncGF0aCcgaW4gdGhlIHVybCAnL3dpemFyZC9wYXRoP2tleT12YWx1ZSdcbiAgY29uc3QgcGF0aCA9IHVybC5zcGxpdCgnLycpLnBvcCgpLnNwbGl0KCc/JylbMF07XG4gIHJldHVybiBnZXRTdGVwRGF0YUZvclBhdGgoc3RlcERhdGEsIHBhdGgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgd2l6YXJkIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0V2l6YXJkT3B0aW9ucygpOiBEb1dpemFyZE9wdGlvbnMge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICcnLFxuICAgIGJhc2VVcmw6ICcvJyxcbiAgICBuYXZCYXI6IHtcbiAgICAgIGljb25zOiB7XG4gICAgICAgIHByZXZpb3VzOiAnPGkgY2xhc3M9XCJjaWwtY2hlY2stYWx0XCI+PC9pPicsXG4gICAgICAgIGN1cnJlbnQ6ICc8aSBjbGFzcz1cImNpbC1wZW5jaWxcIj48L2k+JyxcbiAgICAgICAgbmV4dDogJzxpIGNsYXNzPVwiY2lsLWxvY2stbG9ja2VkXCI+PC9pPicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnV0dG9uczoge1xuICAgICAgY2FuY2VsOiB7XG4gICAgICAgIGxhYmVsOiAnQ2FuY2VsJyxcbiAgICAgIH0sXG4gICAgICBwcmV2aW91czoge1xuICAgICAgICBsYWJlbDogJ0JhY2snLFxuICAgICAgfSxcbiAgICAgIG5leHQ6IHtcbiAgICAgICAgbGFiZWw6ICdOZXh0JyxcbiAgICAgIH0sXG4gICAgICBmaW5pc2g6IHtcbiAgICAgICAgbGFiZWw6ICdTdWJtaXQnLFxuICAgICAgfSxcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogTWVyZ2VzIHRoZSB3aXphcmQgb3B0aW9ucyBpbiB0aGUgd2l6YXJkIHJvdXRlJ3MgY29uZmlnIHdpdGggdGhlIGRlZmF1bHQgd2l6YXJkIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIHdpemFyZE9wdGlvbnMgVGhlIHdpemFyZCBvcHRpb25zIGluIHRoZSB3aXphcmQgcm91dGUncyBjb25maWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlV2l6YXJkT3B0aW9ucyh3aXphcmRPcHRpb25zOiB7fSk6IERvV2l6YXJkT3B0aW9ucyB7XG4gIGlmICghd2l6YXJkT3B0aW9ucykge1xuICAgIHJldHVybiBnZXREZWZhdWx0V2l6YXJkT3B0aW9ucygpO1xuICB9XG5cbiAgcmV0dXJuIHsgLi4uZ2V0RGVmYXVsdFdpemFyZE9wdGlvbnMoKSwgLi4ud2l6YXJkT3B0aW9ucyB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG9wdGlvbnMgcGFzc2VkIHRvIHRoZSB3aXphcmQgc3RlcCByb3V0ZSB3aXRoIGFuIGFkZGVkIHRpdGxlIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0gcm91dGUgVGhlIHdpemFyZCBzdGVwIHJvdXRlIGNvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdpemFyZFN0ZXBPcHRpb25zKHJvdXRlOiBSb3V0ZSk6IERvV2l6YXJkU3RlcE9wdGlvbnMge1xuICBpZiAoIXJvdXRlLmRhdGEpIHtcbiAgICByZXR1cm4geyB0aXRsZTogZ2V0U3RlcFRpdGxlRnJvbVJvdXRlKHJvdXRlKSB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yb3V0ZS5kYXRhLFxuICAgIHRpdGxlOiBnZXRTdGVwVGl0bGVGcm9tUm91dGUocm91dGUpLFxuICB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0ZXAgdGl0bGUgYmFzZWQgb24gdGhlIFJvdXRlIGNvbmZpZ3VyYXRpb24uXG4gKiBJZiB0aGUgcm91dGUgaGFzIGEgZGF0YS50aXRsZSBhdHRyaWJ1dGUgaXQgd2lsbCBiZSByZXR1cm5lZC5cbiAqIEVsc2UgdGhlIHBhdGggd2lsbCBiZSBjYXBpdGFsaXplZCBhbmQgJy0nIG9yICdfJyBjaGFyYWN0ZXJzIHdpbGwgYmUgcmVwbGFjZXMgYnkgc3BhY2VzLlxuICpcbiAqIEBwYXJhbSByb3V0ZSBUaGUgQW5ndWxhciBSb3V0ZSBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0ZXBUaXRsZUZyb21Sb3V0ZShyb3V0ZTogUm91dGUpOiBzdHJpbmcge1xuICBpZiAocm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLnRpdGxlKSB7XG4gICAgcmV0dXJuIHJvdXRlLmRhdGEudGl0bGU7XG4gIH1cbiAgcmV0dXJuIGNhcGl0YWxpemUoaW5zZXJ0U3BhY2VzKHJvdXRlLnBhdGgpKTtcbn1cblxuLyoqXG4gKiBDYXBpdGFsaXplcyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIHRoZSBwYXNzZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBSZXBsYWNlcyAnLScgYW5kICdfJyBjaGFyYWN0ZXJzIGJ5IHNwYWNlcy5cbiAqL1xuZnVuY3Rpb24gaW5zZXJ0U3BhY2VzKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bLV9dL2csICcgJykudHJpbSgpO1xufVxuIl19