import { APIModel, HttpMethod } from '@dongkap/do-core';
import { environment } from '../environments/environment';

export const apiPath: APIModel = {
    openapi: {
        parameter: {
            server: environment.host.openapi,
            method: HttpMethod.POST,
            path: '/api/master/oa/vw/parameter-i18n/v.1',
        }
    },
    auth: {
        token: {
            server: environment.host.auth,
            method: HttpMethod.POST,
            path: '/api/security/oauth/token',
        },
        force: {
            server: environment.host.auth,
            method: HttpMethod.POST,
            path: '/api/security/oauth/force',
        },
        'extract-token': {
            server: environment.host.auth,
            method: HttpMethod.POST,
            path: '/api/security/oauth/extract-token',
        },
        authorize: {
            server: environment.host.auth,
            method: HttpMethod.POST,
            path: '/api/security/oauth2/authorize',
        },
        signup: {
            server: environment.host.auth,
            method: HttpMethod.POST,
            path: '/api/security/oauth/signup',
        },
        'request-forgot-password': {
            server: environment.host.auth,
            method: HttpMethod.POST,
            path: '/api/security/oauth/request-forgot-password',
        },
        'forgot-password': {
            server: environment.host.auth,
            method: HttpMethod.POST,
            path: '/api/security/oauth/forgot-password',
        },
        'activate-account': {
            server: environment.host.auth,
            method: HttpMethod.POST,
            path: '/api/security/oauth/activate',
        },
        'check-user': {
            server: environment.host.auth,
            method: HttpMethod.POST,
            path: '/api/security/oauth/check-user',
        },
    },
    security: {
        revoke: {
            server: environment.host.security,
            method: HttpMethod.DELETE,
            path: '/api/security/001/oauth/token/revoke',
        },
        'change-password': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/post/change-password/v.1',
        },
        deactivated: {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/post/deactivated/v.1',
        },
        'change-settings': {
            server: environment.host.security,
            method: HttpMethod.PUT,
            path: '/api/security/001/trx/put/settings/v.1',
        },
        'get-settings': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/api/security/001/vw/get/settings/v.1',
        },
        'get-menus': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/api/security/001/vw/get/menus/v.1',
        },
        'get-tree-menus': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/api/security/001/vw/auth/tree/menus/v.1',
        },
        'get-function-menus': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/api/security/001/vw/auth/tree/menu/function/v.1',
        },
        'post-functions': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/function/v.1',
        },
        'select-main-menus': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/api/security/001/vw/auth/select/main-menus/v.1',
        },
        'delete-menu': {
            server: environment.host.security,
            method: HttpMethod.DELETE,
            path: '/api/security/001/trx/auth/delete/menu/v.1',
        },
        'post-menus': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/menu/v.1',
        },
        'datatable-user': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/datatable/user/v.1',
        },
        'datatable-role': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/datatable/role/v.1',
        },
        'select-role': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/select/role/v.2',
        },
        'post-role': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/role/v.1',
        },
        'select-group': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/select/sys-auth/v.1',
        },
        'post-function-role': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/function-role/v.1',
        },
        'get-user-role': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/api/security/001/vw/get/user/role/v.1',
        },
        'select-user-role': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/api/security/001/vw/get/select/user/role/v.1',
        },
        'switch-role': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/post/switch/role/v.1',
        },
        'datatable-corporate': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/datatable/corporate/v.1',
        },
        'post-corporate': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/corporate/v.1',
        },
        'select-corporate': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/select/corporate/v.1',
        },
        'delete-corporate': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/delete/corporate/v.1',
        },
        'datatable-apps': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/datatable/app/v.1',
        },
        'post-apps': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/app/v.1',
        },
        'select-apps': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/select/app/v.1',
        },
        'delete-apps': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/delete/app/v.1',
        },
        'datatable-occupation': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/datatable/occupation/v.1',
        },
        'post-occupation': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/occupation/v.1',
        },
        'select-occupation': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/select/occupation/v.1',
        },
        'delete-occupation': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/delete/occupation/v.1',
        },
        'select-employee': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/select/employee/v.1',
        },
        'select-employee-parent': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/select/employee-parent/v.1',
        },
        'datatable-employee': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/datatable/employee/v.1',
        },
        'post-employee': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/add/employee/v.1',
        },
        'put-employee-personal-info': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/put/personal-info/employee/v.1',
        },
        'put-employee-status': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/put/status/employee/v.1',
        },
        'get-employee-personal-info': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/personal-info/employee/v.1',
        },
        'get-employee-status': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/status/employee/v.1',
        },
        'datatable-education-employee': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/datatable/education-employee/v.1',
        },
        'datatable-training-employee': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/vw/auth/datatable/training-employee/v.1',
        },
        'post-employee-education': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/post/education/employee/v.1',
        },
        'post-employee-training': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/post/training/employee/v.1',
        },
        'delete-employee-education': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/delete/education/employee/v.1',
        },
        'delete-employee-training': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/api/security/001/trx/auth/delete/training/employee/v.1',
        },
    },
    profile: {
        'change-profile': {
            server: environment.host.profile,
            method: HttpMethod.POST,
            path: '/api/security/002/trx/post/profile/v.1',
        },
        'get-profile': {
            server: environment.host.profile,
            method: HttpMethod.GET,
            path: '/api/security/002/vw/get/profile/v.1',
        },
        'get-profile-education-employee': {
            server: environment.host.profile,
            method: HttpMethod.POST,
            path: '/api/security/002/vw/post/datatable/education-employee/v.1',
        },
        'get-profile-training-employee': {
            server: environment.host.profile,
            method: HttpMethod.POST,
            path: '/api/security/002/vw/post/datatable/training-employee/v.1',
        },
        'post-profile-employee-education': {
            server: environment.host.profile,
            method: HttpMethod.POST,
            path: '/api/security/002/trx/post/education/employee/v.1',
        },
        'post-profile-employee-training': {
            server: environment.host.profile,
            method: HttpMethod.POST,
            path: '/api/security/002/trx/post/training/employee/v.1',
        },
        'delete-profile-employee-education': {
            server: environment.host.profile,
            method: HttpMethod.POST,
            path: '/api/security/002/trx/delete/education/employee/v.1',
        },
        'delete-profile-employee-training': {
            server: environment.host.profile,
            method: HttpMethod.POST,
            path: '/api/security/002/trx/delete/training/employee/v.1',
        },
        'get-profile-employee-status': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/api/security/002/vw/get/status/employee/v.1',
        },
        'upload-photo-profile': {
            server: environment.host.profile,
            method: HttpMethod.POST,
            path: '/api/security/002/trx/post/photo-profile/v.1',
        },
        'get-photo-profile': {
            server: environment.host.profile,
            method: HttpMethod.GET,
            path: '/api/security/002/vw/get/photo-profile/v.1',
        },
    },
    master: {
        'select-country': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/post/select/country/v.1',
        },
        'select-province': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/post/select/province/v.1',
        },
        'select-city': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/post/select/city/v.1',
        },
        'select-district': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/post/select/district/v.1',
        },
        'select-subdistrict': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/post/select/subdistrict/v.1',
        },
        'datatable-city': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/auth/datatable/city/v.1',
        },
        'select-language': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/post/select/language/v.1',
        },
        'select-all-locale': {
            server: environment.host.master,
            method: HttpMethod.GET,
            path: '/api/master/003/vw/get/select/all/locale/v.1',
        },
        'all-locale': {
            server: environment.host.master,
            method: HttpMethod.GET,
            path: '/api/master/003/vw/get/all/locale/v.1',
        },
        'post-locale': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/trx/auth/locale/v.1',
        },
        'datatable-locale': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/auth/datatable/locale/v.1',
        },
        'select-parameter': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/post/select/parameter-i18n/v.1',
        },
        'radio-parameter': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/post/radio/parameter-i18n/v.1',
        },
        'checkbox-parameter': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/post/checkbox/parameter-i18n/v.1',
        },
        'datatable-parameter-group': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/auth/datatable/parameter-group/v.1',
        },
        'datatable-parameter': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/auth/datatable/parameter/v.1',
        },
        parameter: {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/post/parameter-i18n/v.1',
        },
        'all-parameter-i18n': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/auth/all/parameter-i18n/v.1',
        },
        'post-parameter-i18n': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/trx/auth/parameter-i18n/v.1',
        },
        'post-parameter-group': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/trx/auth/parameter-group/v.1',
        },
        'delete-parameter-group': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/trx/auth/delete/parameter-group/v.1',
        },
        'datatable-business-partner': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/auth/datatable/business-partner/v.1',
        },
        'post-business-partner': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/trx/auth/business-partner/v.1',
        },
        'select-business-partner': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/auth/select/business-partner/v.1',
        },
        'get-business-partner': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/auth/get/business-partner/v.1',
        },
        'datatable-inventory': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/auth/datatable/asset/v.1',
        },
        'post-inventory': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/trx/auth/asset/v.1',
        },
        'select-inventory': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/vw/auth/select/asset/v.1',
        },
        'delete-inventory': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/api/master/003/trx/auth/delete/asset/v.1',
        },
    },
    activity: {
        'datatable-assignment-group': {
            server: environment.host.activity,
            method: HttpMethod.POST,
            path: '/api/activity/004/vw/auth/datatable/assignment-group/v.1',
        },
        'datatable-assignment': {
            server: environment.host.activity,
            method: HttpMethod.POST,
            path: '/api/activity/004/vw/auth/datatable/assignment/v.1',
        },
        'post-assignment': {
            server: environment.host.activity,
            method: HttpMethod.POST,
            path: '/api/activity/004/trx/auth/add/assignment/v.1',
        },
        'delete-assignment': {
            server: environment.host.activity,
            method: HttpMethod.POST,
            path: '/api/activity/004/trx/auth/delete/assignment/v.1',
        },
    },
    notification: {
        'send-broadcast': {
            server: environment.host.notification,
            method: HttpMethod.POST,
            path: '/api/notification/005/trx/post/broadcast/v.1',
        },
        'push-subscribe': {
            server: environment.host.notification,
            method: HttpMethod.POST,
            path: '/api/notification/005/push/subscribe/v.1',
        },
    },
};
