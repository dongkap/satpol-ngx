import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { EMPTY, Subject } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { __awaiter } from 'tslib';
import * as idb from 'idb';

function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}

const HTTP_SERVICE = new InjectionToken('Http Service');

const STORAGE_SERVICE = new InjectionToken('Storage Factory Service');
const AUTH_INDEXED_DB = new InjectionToken('Auth IndexedDB Resource');
const PROFILE_INDEXED_DB = new InjectionToken('Profile IndexedDB Resource');
const SETTINGS_INDEXED_DB = new InjectionToken('Settings IndexedDB Resource');

class ErrorHandlerService {
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

class CustomPreloadingStrategy {
    constructor() {
        this.preloadedModules = [];
    }
    preload(route, load) {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            return load();
        }
        else {
            return EMPTY;
        }
    }
}
CustomPreloadingStrategy.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CustomPreloadingStrategy, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CustomPreloadingStrategy.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CustomPreloadingStrategy });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: CustomPreloadingStrategy, decorators: [{
            type: Injectable
        }] });

class EncryptionService {
    constructor() {
        this.ivSize = 128;
    }
    getHmacSha256(secret, message, hex) {
        const hash = CryptoJS.HmacSHA256(message, secret);
        if (hex) {
            return CryptoJS.enc.Hex.stringify(hash).toUpperCase();
        }
        return CryptoJS.enc.Base64.stringify(hash);
    }
    encryptAES(secretKey, message) {
        const iv = CryptoJS.lib.WordArray.random(this.ivSize / 8);
        const key = CryptoJS.enc.Utf8.parse(secretKey);
        const encrypted = CryptoJS.AES.encrypt(message, key, {
            iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC,
        });
        const encryptMessage = iv.toString() + encrypted.toString();
        return encryptMessage;
    }
    decryptAES(secretKey, encryptMessage) {
        if (encryptMessage) {
            const iv = CryptoJS.enc.Hex.parse(encryptMessage.substr(0, 32));
            const key = CryptoJS.enc.Utf8.parse(secretKey);
            const encrypted = encryptMessage.substring(32);
            const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
                iv,
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC,
            });
            try {
                return decrypted.toString(CryptoJS.enc.Utf8);
            }
            catch (error) {
                return null;
            }
        }
        return null;
    }
}
EncryptionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EncryptionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EncryptionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EncryptionService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EncryptionService, decorators: [{
            type: Injectable
        }] });

const OAUTH_INFO = new InjectionToken('OAUTH INFO Resource');

class StorageMaskService {
    constructor(enc, oauthResource) {
        this.enc = enc;
        this.oauthResource = oauthResource;
    }
    getSessionStorageEnc(key) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        if (sessionStorage.getItem(keyEncrypted)) {
            return this.enc.decryptAES(this.oauthResource['aes_key'], sessionStorage.getItem(keyEncrypted));
        }
        else {
            return null;
        }
    }
    setSessionStorageEnc(key, value) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        const valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
        sessionStorage.setItem(keyEncrypted, valueEncrypted);
    }
    removeSessionStorageEnc(key) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        sessionStorage.removeItem(keyEncrypted);
    }
    getLocalStorageEnc(key) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        if (localStorage.getItem(keyEncrypted)) {
            return this.enc.decryptAES(this.oauthResource['aes_key'], localStorage.getItem(keyEncrypted));
        }
        else {
            return null;
        }
    }
    setLocalStorageEnc(key, value) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        const valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
        localStorage.setItem(keyEncrypted, valueEncrypted);
    }
    removeLocalStorageEnc(key) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        localStorage.removeItem(keyEncrypted);
    }
    getSessionStorage(key) {
        return (key) ? sessionStorage.getItem(key) : null;
    }
    setSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
    }
    removeSessionStorage(key) {
        sessionStorage.removeItem(key);
    }
    getLocalStorage(key) {
        return (key) ? localStorage.getItem(key) : null;
    }
    setLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }
    removeLocalStorage(key) {
        localStorage.removeItem(key);
    }
    clearSessionStorage() {
        sessionStorage.clear();
    }
    clearLocalStorage() {
        localStorage.clear();
    }
    clearAll() {
        sessionStorage.clear();
        localStorage.clear();
    }
}
StorageMaskService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: StorageMaskService, deps: [{ token: EncryptionService }, { token: OAUTH_INFO }], target: i0.ɵɵFactoryTarget.Injectable });
StorageMaskService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: StorageMaskService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: StorageMaskService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: EncryptionService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }]; } });

class HttpAbstractService {
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

var ResponseCode;
(function (ResponseCode) {
    ResponseCode["ERR_XXAKEY"] = "ERR_XXAKEY";
    ResponseCode["ERR_XXATIMESTAMP"] = "ERR_XXATIMESTAMP";
    ResponseCode["ERR_XXASIGNATURE"] = "ERR_XXASIGNATURE";
    ResponseCode["ERR_UNAUTHORIZED"] = "ERR_UNAUTHORIZED";
    ResponseCode["ERR_SYS0001"] = "ERR_SYS0001";
    ResponseCode["ERR_SYS0002"] = "ERR_SYS0002";
    ResponseCode["ERR_SYS0500"] = "ERR_SYS0500";
    ResponseCode["ERR_SYS0404"] = "ERR_SYS0404";
    ResponseCode["ERR_SYS0501"] = "ERR_SYS0501";
    ResponseCode["ERR_SYS0502"] = "ERR_SYS0502";
    ResponseCode["ERR_SYS0302"] = "ERR_SYS0302";
    ResponseCode["ERR_SCR0000"] = "ERR_SCR0000";
    ResponseCode["ERR_SCR0001"] = "ERR_SCR0001";
    ResponseCode["ERR_SCR0002"] = "ERR_SCR0002";
    ResponseCode["ERR_SCR0003"] = "ERR_SCR0003";
    ResponseCode["ERR_SCR0004"] = "ERR_SCR0004";
    ResponseCode["ERR_SCR0005"] = "ERR_SCR0005";
    ResponseCode["ERR_SCR0006"] = "ERR_SCR0006";
    ResponseCode["ERR_SCR0007A"] = "ERR_SCR0007A";
    ResponseCode["ERR_SCR0007B"] = "ERR_SCR0007B";
    ResponseCode["ERR_SCR0008"] = "ERR_SCR0008";
    ResponseCode["ERR_SCR0009"] = "ERR_SCR0009";
    ResponseCode["ERR_SCR0010"] = "ERR_SCR0010";
    ResponseCode["ERR_SCR0011"] = "ERR_SCR0011";
    ResponseCode["ERR_SCR0012"] = "ERR_SCR0012";
    ResponseCode["OK_DEFAULT"] = "OK_DEFAULT";
    ResponseCode["OK_INSERTED"] = "OK_INSERTED";
    ResponseCode["OK_UPDATED"] = "OK_UPDATED";
    ResponseCode["OK_DELETED"] = "OK_DELETED";
    ResponseCode["OK_LOGOUT"] = "OK_LOGOUT";
    ResponseCode["OK_REGISTERED"] = "OK_REGISTERED";
    ResponseCode["OK_CHANGE_ROLE"] = "OK_CHANGE_ROLE";
    ResponseCode["OK_REQUEST_FORGOT_PASSWORD"] = "OK_REQUEST_FORGOT_PASSWORD";
    ResponseCode["OK_FORGOT_PASSWORD"] = "OK_FORGOT_PASSWORD";
    ResponseCode["OK_ACTIVATE_ACCOUNT"] = "OK_ACTIVATE_ACCOUNT";
    ResponseCode["OK_SCR001"] = "OK_SCR001";
    ResponseCode["OK_SCR002"] = "OK_SCR002";
    ResponseCode["OK_SCR003"] = "OK_SCR003";
    ResponseCode["OK_SCR004"] = "OK_SCR004";
    ResponseCode["OK_SCR005"] = "OK_SCR005";
    ResponseCode["OK_SCR006"] = "OK_SCR006";
    ResponseCode["OK_SCR007"] = "OK_SCR007";
    ResponseCode["OK_SCR008"] = "OK_SCR008";
    ResponseCode["OK_SCR009"] = "OK_SCR009";
    ResponseCode["OK_SCR010"] = "OK_SCR010";
    ResponseCode["OK_SCR011"] = "OK_SCR011";
    ResponseCode["OK_SCR012"] = "OK_SCR012";
})(ResponseCode || (ResponseCode = {}));

class Environment {
    constructor() {
        this.production = true;
        this.locale = 'en-US';
        this.basePath = '/';
    }
}
class Server {
    constructor() {
        this.protocol = 'http';
    }
}

var HttpMethod;
(function (HttpMethod) {
    HttpMethod["POST"] = "POST";
    HttpMethod["GET"] = "GET";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["DELETE"] = "DELETE";
})(HttpMethod || (HttpMethod = {}));
class HostModel {
    constructor() {
        this.protocol = 'https';
    }
}

class LocaleModel {
}

class RoleModel {
}
class SystemAuthority {
}

class UserModel {
}

const oauthInfo = {
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    token_type: 'token_type',
    public_key: 'xrkey',
    expires_in: 'expires_in',
    authority: 'authority',
    provider: 'provider',
    username: 'username',
    image: 'image',
    email: 'email',
    menus: 'menus',
    extras: 'extras',
    server_date: 'server_date',
    locale: 'locale',
    theme: 'theme',
    name: 'name',
};
const additionalInfo = {
    imageBase64: 'image-base64',
};
var TypeDataOauth;
(function (TypeDataOauth) {
    TypeDataOauth["OAUTH"] = "oauth";
    TypeDataOauth["PROFILE"] = "profile";
    TypeDataOauth["SETTINGS"] = "settings";
    TypeDataOauth["LOCALSTORAGE"] = "localstorage";
})(TypeDataOauth || (TypeDataOauth = {}));
const oauthInfoModels = [
    { key: oauthInfo.access_token, enc: true, type: TypeDataOauth.OAUTH, string: true, persist: true },
    { key: oauthInfo.refresh_token, enc: true, type: TypeDataOauth.OAUTH, string: true, persist: true },
    { key: oauthInfo.token_type, enc: true, type: TypeDataOauth.OAUTH, string: true, persist: true },
    { key: oauthInfo.public_key, enc: true, type: TypeDataOauth.OAUTH, string: true, persist: true },
    { key: oauthInfo.expires_in, enc: true, type: TypeDataOauth.OAUTH, string: false, persist: true },
    { key: oauthInfo.authority, enc: true, type: TypeDataOauth.OAUTH, string: true, persist: true },
    { key: oauthInfo.provider, enc: true, type: TypeDataOauth.OAUTH, string: true, persist: true },
    { key: oauthInfo.menus, enc: true, type: TypeDataOauth.OAUTH, string: false, persist: true },
    { key: oauthInfo.extras, enc: true, type: TypeDataOauth.OAUTH, string: false, persist: true },
    { key: oauthInfo.username, enc: false, type: TypeDataOauth.OAUTH, string: true, persist: true },
    { key: oauthInfo.name, enc: false, type: TypeDataOauth.PROFILE, string: true, persist: true },
    { key: oauthInfo.email, enc: false, type: TypeDataOauth.PROFILE, string: true, persist: true },
    { key: oauthInfo.image, enc: false, type: TypeDataOauth.PROFILE, string: true, persist: true },
    { key: oauthInfo.locale, enc: false, type: TypeDataOauth.SETTINGS, string: true, persist: true },
    { key: oauthInfo.theme, enc: false, type: TypeDataOauth.SETTINGS, string: true, persist: true },
    { key: oauthInfo.server_date, enc: false, type: TypeDataOauth.SETTINGS, string: true, persist: true },
];
const additionalInfoModels = [
    { key: additionalInfo.imageBase64, enc: false, type: TypeDataOauth.PROFILE, string: true, persist: true },
];
const signatureHeader = {
    authorization: 'Authorization',
    signature: 'X-DONGKAP-Signature',
    timestamp: 'X-DONGKAP-Timestamp',
    key: 'X-DONGKAP-Key',
    mark: 'X-DONGKAP-Mark',
};

var DatePattern;
(function (DatePattern) {
    DatePattern["SLASH"] = "^((?:(?:31(\\/)(?:0[13578]|1[02]))|((29|30)(\\/)(0[1,3-9]|1[0-2])))(\\/)(?:(?:1[6-9]|[2-9]\\d)?\\d{2}))$|^(?:29(\\/)02(\\/)(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(\\/)(?:(?:0[1-9])|(?:1[0-2]))(\\/)(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$";
    DatePattern["SLASH_DDMMYYYY"] = "^((?:(?:31(\\/)(?:0[13578]|1[02]))|((29|30)(\\/)(0[1,3-9]|1[0-2])))(\\/)(?:(?:1[6-9]|[2-9]\\d)?\\d{4}))$|^(?:29(\\/)02(\\/)(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(\\/)(?:(?:0[1-9])|(?:1[0-2]))(\\/)(?:(?:1[6-9]|[2-9]\\d)?\\d{4})$";
    DatePattern["SLASH_YYYYMMDD"] = "^((?:(?:1[6-9]|[2-9]\\d)?\\d{2})(\\/)(?:(?:(?:0[13578]|1[02])(\\/)31)|((0[1,3-9]|1[0-2])(\\/)(29|30))))$|^(?:(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\\/)02(\\/)29)$|^(?:(?:1[6-9]|[2-9]\\d)?\\d{2})(\\/)(?:(?:0[1-9])|(?:1[0-2]))(\\/)(?:0[1-9]|1\\d|2[0-8])$";
    DatePattern["DASH"] = "^((?:(?:31(-)(?:0[13578]|1[02]))|((29|30)(-)(0[1,3-9]|1[0-2])))(-)(?:(?:1[6-9]|[2-9]\\d)?\\d{2}))$|^(?:29(-)02(-)(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(-)(?:(?:0[1-9])|(?:1[0-2]))(-)(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$";
    DatePattern["DOT"] = "^((?:(?:31(\\.)(?:0[13578]|1[02]))|((29|30)(\\.)(0[1,3-9]|1[0-2])))(\\.)(?:(?:1[6-9]|[2-9]\\d)?\\d{2}))$|^(?:29(\\.)02(\\.)(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0[1-9]|1\\d|2[0-8])(\\.)(?:(?:0[1-9])|(?:1[0-2]))(\\.)(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$";
})(DatePattern || (DatePattern = {}));
var DateFormat;
(function (DateFormat) {
    DateFormat["DATE"] = "dd/MM/yyyy";
    DateFormat["DATETIME"] = "dd/MM/yyyy HH:mm:ss.S";
})(DateFormat || (DateFormat = {}));
/**
 * https://stackoverflow.com/a/52478926
 * original regex yyyy/MM/dd or yy/MM/dd
 * ^((?:(?:1[6-9]|[2-9]\d)?\d{2})(\/)(?:(?:(?:0[13578]|1[02])(\/)31)|((0[1,3-9]|1[0-2])(\/)(29|30))))$|
 * ^(?:(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(\/)02(\/)29)$|
 * ^(?:(?:1[6-9]|[2-9]\d)?\d{2})(\/)(?:(?:0[1-9])|(?:1[0-2]))(\/)(?:0[1-9]|1\d|2[0-8])$
 * original regex dd/MM/yyyy or dd/MM/yy
 * ^((?:(?:31(\/)(?:0[13578]|1[02]))|((29|30)(\/)(0[1,3-9]|1[0-2])))(\/)(?:(?:1[6-9]|[2-9]\d)?\d{2}))$|
 * ^(?:29(\/)02(\/)(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|
 * ^(?:0[1-9]|1\d|2[0-8])(\/)(?:(?:0[1-9])|(?:1[0-2]))(\/)(?:(?:1[6-9]|[2-9]\d)?\d{2})$
 */

var Pattern;
(function (Pattern) {
    Pattern["FULLNAME"] = "[a-zA-Z .,]+$";
    Pattern["EMAIL"] = ".+@.+..+";
    Pattern["USERNAME"] = "[a-z0-9.]*$";
    Pattern["PHONE_NUMBER"] = "^(([+]([0-9]{1,2}))|([0-9]{1}))([0-9]{2}-?)([0-9]{4}-?)([0-9]{1,6}-?)$";
    Pattern["PASSWORD_MEDIUM"] = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([@$!%*?&]*)[A-Za-z0-9@$!%*?&]{8,}$";
    Pattern["PASSWORD_STRONG"] = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$";
    Pattern["LOCALE"] = "^en-US$|^id-ID$";
})(Pattern || (Pattern = {}));

class HttpCommonService extends HttpAbstractService {
    constructor(http) {
        super();
        this.http = http;
    }
    HTTP_AUTH(api, body, headers, params, pathVariable, responseType) {
        if (headers) {
            headers = headers.append(signatureHeader.mark, 'true');
        }
        else {
            headers = new HttpHeaders().append(signatureHeader.mark, 'true');
        }
        responseType = responseType ? responseType : 'json';
        return this.HTTP_BASE(api, body, headers, params, pathVariable, responseType);
    }
    HTTP_BASE(api, body, headers, params, pathVariable, responseType) {
        let response = null;
        responseType = responseType ? responseType : 'json';
        switch (api.method) {
            case HttpMethod.POST:
                response = this.POST(this.API(api, pathVariable), body, headers, params, responseType);
                break;
            case HttpMethod.PUT:
                response = this.PUT(this.API(api, pathVariable), body, headers, params);
                break;
            case HttpMethod.DELETE:
                response = this.DELETE(this.API(api, pathVariable), headers, params);
                break;
            default:
                response = this.GET(this.API(api, pathVariable), headers, params, responseType);
                break;
        }
        return response;
    }
    GET(url, headers, params, responseType) {
        return this.http.get(url, { headers, params, responseType });
    }
    POST(url, body, headers, params, responseType) {
        return this.http.post(url, body, { headers, params, responseType });
    }
    PUT(url, body, headers, params) {
        return this.http.put(url, body, { headers, params });
    }
    DELETE(url, headers, params) {
        return this.http.delete(url, { headers, params });
    }
}
HttpCommonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpCommonService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
HttpCommonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpCommonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpCommonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

class TranslationService extends TranslateHttpLoader {
    constructor(http, prefix, suffix) {
        super(http, prefix, suffix);
    }
    getTranslation(lang) {
        return super.getTranslation(lang);
    }
}

const CORE_PROVIDERS = [
    CustomPreloadingStrategy,
    EncryptionService,
    { provide: HTTP_SERVICE, useClass: HttpCommonService },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: STORAGE_SERVICE, useClass: StorageMaskService },
];
function createTranslateLoader(http) {
    return new TranslationService(http, './assets/i18n/', '.json');
}
class DoCoreModule {
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'DoCoreModule');
    }
    static forRoot() {
        return {
            ngModule: DoCoreModule,
            providers: [
                ...CORE_PROVIDERS,
                ...TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient],
                    },
                }).providers,
            ],
        };
    }
}
DoCoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCoreModule, deps: [{ token: DoCoreModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
DoCoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCoreModule, imports: [CommonModule] });
DoCoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCoreModule, imports: [[
            CommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoCoreModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                    declarations: [],
                }]
        }], ctorParameters: function () { return [{ type: DoCoreModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });

class UserService {
}

class IndexedDBService {
    constructor(injector, dbname, version, storeName) {
        this.storeName = storeName;
        this.openSessionIDB(dbname, version);
        this.enc = injector.get(EncryptionService);
        this.oauthResource = injector.get(OAUTH_INFO);
    }
    openSessionIDB(dbname, version) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.$dbPromise = idb.openDB(dbname, version);
        });
    }
    getAllOf() {
        const result$ = new Subject();
        this.getAllVal(this.storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    getOf(key) {
        const result$ = new Subject();
        this.getKeyVal(key, this.storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    putOf(key, val) {
        const result$ = new Subject();
        this.putKeyVal(key, val, this.storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    removeOf(key) {
        const result$ = new Subject();
        this.removeKeyVal(key, this.storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    getAll() {
        return this.getAllVal(this.storeName);
    }
    get(key) {
        return this.getKeyVal(this.storeName, key);
    }
    put(key, val) {
        return this.putKeyVal(this.storeName, key, val);
    }
    remove(key) {
        return this.removeKeyVal(this.storeName, key);
    }
    clearAll() {
        return this.clearAllKeyVal(this.storeName);
    }
    keys() {
        return this.keysKeyVal(this.storeName);
    }
    getAllVal(storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).getAll(storeName);
        });
    }
    getKeyVal(storeName, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).get(storeName, key);
        });
    }
    putKeyVal(storeName, key, val) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).put(storeName, val, key);
        });
    }
    removeKeyVal(storeName, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).delete(storeName, key);
        });
    }
    clearAllKeyVal(storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).clear(storeName);
        });
    }
    keysKeyVal(storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).getAllKeys(storeName);
        });
    }
    addArticle(storeName, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.$dbPromise).add(storeName, value);
        });
    }
    addAllArticle(storeName, values) {
        return __awaiter(this, void 0, void 0, function* () {
            const tx = (yield this.$dbPromise).transaction(storeName, 'readwrite');
            values.forEach((value) => {
                tx.store.add(value);
            });
            return yield tx.done;
        });
    }
}

const USER_SERVICE = new InjectionToken('USER Service');

const API = new InjectionToken('API');

const ENVIRONMENT = new InjectionToken('Environment Config');

/*
 * Public API Surface of do-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { API, AUTH_INDEXED_DB, CORE_PROVIDERS, CustomPreloadingStrategy, DateFormat, DatePattern, DoCoreModule, ENVIRONMENT, EncryptionService, Environment, ErrorHandlerService, HTTP_SERVICE, HostModel, HttpCommonService, HttpMethod, IndexedDBService, LocaleModel, OAUTH_INFO, PROFILE_INDEXED_DB, Pattern, ResponseCode, RoleModel, SETTINGS_INDEXED_DB, STORAGE_SERVICE, SystemAuthority, TranslationService, TypeDataOauth, USER_SERVICE, UserModel, UserService, additionalInfo, additionalInfoModels, createTranslateLoader, oauthInfo, oauthInfoModels, signatureHeader };
//# sourceMappingURL=dongkap-do-core.js.map
