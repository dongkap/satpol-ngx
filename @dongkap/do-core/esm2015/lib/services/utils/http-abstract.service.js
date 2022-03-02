export class HttpAbstractService {
    API(api, pathVariable) {
        let url = api.server.protocol +
            '://' +
            api.server.host +
            ((api.server.port) ? ':' + api.server.port : '') +
            api.path;
        if (pathVariable) {
            pathVariable.forEach(path => {
                url = url + '/' + path;
            });
        }
        return url;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1hYnN0cmFjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tY29yZS9zcmMvbGliL3NlcnZpY2VzL3V0aWxzL2h0dHAtYWJzdHJhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxNQUFNLE9BQWdCLG1CQUFtQjtJQThCaEMsR0FBRyxDQUFDLEdBQWtCLEVBQUUsWUFBdUI7UUFDcEQsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQ3JCLEtBQUs7WUFDTCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDZixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDaEQsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLFlBQVksRUFBRTtZQUNoQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cEZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLWZhY3Rvcnkuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQmFzZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh0dHBBYnN0cmFjdFNlcnZpY2UgaW1wbGVtZW50cyBIdHRwRmFjdG9yeVNlcnZpY2Uge1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBIVFRQX0FVVEgoXG4gICAgYXBpOiBIdHRwQmFzZU1vZGVsLFxuICAgIGJvZHk/OiBhbnksXG4gICAgaGVhZGVycz86IEh0dHBIZWFkZXJzLFxuICAgIHBhcmFtcz86IEh0dHBQYXJhbXMsXG4gICAgcGF0aFZhcmlhYmxlPzogc3RyaW5nW10sXG4gICAgcmVzcG9uc2VUeXBlPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgYWJzdHJhY3QgSFRUUF9CQVNFKFxuICAgIGFwaTogSHR0cEJhc2VNb2RlbCxcbiAgICBib2R5PzogYW55LFxuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyxcbiAgICBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgIHBhdGhWYXJpYWJsZT86IHN0cmluZ1tdLFxuICAgIHJlc3BvbnNlVHlwZT86IGFueSk6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIGFic3RyYWN0IEdFVChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICByZXNwb25zZVR5cGU/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG4gIHB1YmxpYyBhYnN0cmFjdCBQT1NUKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMsXG4gICAgcGFyYW1zPzogSHR0cFBhcmFtcyxcbiAgICByZXNwb25zZVR5cGU/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT47XG4gIHB1YmxpYyBhYnN0cmFjdCBQVVQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVycz86IEh0dHBIZWFkZXJzLCBwYXJhbXM/OiBIdHRwUGFyYW1zKTogT2JzZXJ2YWJsZTxhbnk+O1xuICBwdWJsaWMgYWJzdHJhY3QgREVMRVRFKHVybDogc3RyaW5nLCBoZWFkZXJzPzogSHR0cEhlYWRlcnMsIHBhcmFtcz86IEh0dHBQYXJhbXMpOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgcHVibGljIEFQSShhcGk6IEh0dHBCYXNlTW9kZWwsIHBhdGhWYXJpYWJsZT86IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICBsZXQgdXJsOiBzdHJpbmcgPSBhcGkuc2VydmVyLnByb3RvY29sICtcbiAgICAgICAgICAgICAgICAgICAgJzovLycgK1xuICAgICAgICAgICAgICAgICAgICBhcGkuc2VydmVyLmhvc3QgK1xuICAgICAgICAgICAgICAgICAgICAoKGFwaS5zZXJ2ZXIucG9ydCkgPyAnOicgKyBhcGkuc2VydmVyLnBvcnQgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICBhcGkucGF0aDtcbiAgICBpZiAocGF0aFZhcmlhYmxlKSB7XG4gICAgICBwYXRoVmFyaWFibGUuZm9yRWFjaChwYXRoID0+IHtcbiAgICAgICAgdXJsID0gdXJsICsgJy8nICsgcGF0aDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbn1cbiJdfQ==