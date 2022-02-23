import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { PROFILE_INDEXED_DB, ResponseCode, Pattern, USER_SERVICE, } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@dongkap/do-auth";
import * as i2 from "@dongkap/do-shared";
import * as i3 from "@nebular/theme";
import * as i4 from "@angular/forms";
import * as i5 from "@ngx-translate/core";
import * as i6 from "@dongkap/do-core";
export class ProfilePageComponent extends BaseFormComponent {
    constructor(injector, userService, profileIndexedDB, authIndexedDB) {
        super(injector, {
            username: [{
                    value: null,
                    disabled: true,
                }],
            name: [],
            idNumber: [],
            placeOfBirth: [],
            dateOfBirth: [],
            gender: [],
            height: [],
            weight: [],
            bloodType: [],
            email: [],
            phoneNumber: [],
            address: [null, [Validators.minLength(5)]],
            country: [],
            province: [],
            city: [],
            district: [],
            subDistrict: [],
        });
        this.injector = injector;
        this.userService = userService;
        this.profileIndexedDB = profileIndexedDB;
        this.authIndexedDB = authIndexedDB;
        this.patternEmail = Pattern.EMAIL;
        this.patternPhoneNumber = Pattern.PHONE_NUMBER;
        this.minLength = 5;
        this.disabledUpload = false;
        this.provider = 'local';
        this.bloodTypeData = [{
                label: 'A',
                value: 'A',
                disabled: false,
            }, {
                label: 'B',
                value: 'B',
                disabled: false,
            }, {
                label: 'AB',
                value: 'AB',
                disabled: false,
            }, {
                label: 'O',
                value: 'O',
                disabled: false,
            }];
        this.formGroupImage = this.formBuilder.group({
            image: [],
        });
        this.apiSelectGender = this.api['master']['select-parameter'];
        this.apiSelectCountry = this.api['master']['select-country'];
        this.apiSelectProvince = this.api['master']['select-province'];
        this.apiSelectCity = this.api['master']['select-city'];
        this.apiSelectDistrict = this.api['master']['select-district'];
        this.apiSelectSubDistrict = this.api['master']['select-subdistrict'];
        this.authIndexedDB.getEnc('provider').then((value) => {
            if (value !== 'local') {
                this.provider = value;
                this.formGroup.controls['email'].disable();
            }
        });
    }
    ngOnInit() {
        this.onInit('profile', 'get-profile');
        this.profileIndexedDB.get('image-base64').then((image) => {
            this.formGroupImage.get('image').setValue(image);
            this.formGroupImage.markAsPending();
        });
        this.paramSelectGender = [{
                key: 'parameterGroupCode',
                value: 'GENDER',
            }];
        this.paramSelectProvince = [{
                key: 'country',
                value: 'undefined',
            }];
        this.paramSelectCity = [{
                key: 'province',
                value: 'undefined',
            }];
        this.paramSelectDistrict = [{
                key: 'city',
                value: 'undefined',
            }];
        this.paramSelectSubDistrict = [{
                key: 'district',
                value: 'undefined',
            }];
    }
    onInit(serviceName, apiName) {
        this.loadingForm = true;
        this.exec(serviceName, apiName)
            .subscribe((success) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
            this.loadingForm = false;
            this.formGroup.controls['name'].setValue(success.name);
            this.formGroup.controls['username'].setValue(success.username);
            this.formGroup.controls['email'].setValue(success.email);
            if (success === null || success === void 0 ? void 0 : success.personalInfo) {
                this.formGroup.controls['idNumber'].setValue((_a = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _a === void 0 ? void 0 : _a.idNumber);
                if ((_b = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _b === void 0 ? void 0 : _b.genderCode) {
                    this.formGroup.controls['gender'].setValue({
                        label: success === null || success === void 0 ? void 0 : success.personalInfo.genderValue,
                        value: success === null || success === void 0 ? void 0 : success.personalInfo.genderCode
                    });
                }
                this.formGroup.controls['placeOfBirth'].setValue((_c = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _c === void 0 ? void 0 : _c.placeOfBirth);
                if ((_d = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _d === void 0 ? void 0 : _d.dateOfBirth) {
                    this.formGroup.controls['dateOfBirth'].setValue((_e = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _e === void 0 ? void 0 : _e.dateOfBirth);
                }
                this.formGroup.controls['height'].setValue((_f = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _f === void 0 ? void 0 : _f.height);
                this.formGroup.controls['weight'].setValue((_g = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _g === void 0 ? void 0 : _g.weight);
                this.formGroup.controls['bloodType'].setValue({
                    value: (_h = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _h === void 0 ? void 0 : _h.bloodType,
                    label: (_j = success === null || success === void 0 ? void 0 : success.personalInfo) === null || _j === void 0 ? void 0 : _j.bloodType,
                });
            }
            if (success === null || success === void 0 ? void 0 : success.contact) {
                if ((_k = success === null || success === void 0 ? void 0 : success.contact) === null || _k === void 0 ? void 0 : _k.address) {
                    this.formGroup.controls['address'].setValue((_l = success === null || success === void 0 ? void 0 : success.contact) === null || _l === void 0 ? void 0 : _l.address);
                }
                if ((_m = success === null || success === void 0 ? void 0 : success.contact) === null || _m === void 0 ? void 0 : _m.phoneNumber) {
                    this.formGroup.controls['phoneNumber'].setValue((_o = success === null || success === void 0 ? void 0 : success.contact) === null || _o === void 0 ? void 0 : _o.phoneNumber);
                }
                if ((_p = success === null || success === void 0 ? void 0 : success.contact) === null || _p === void 0 ? void 0 : _p.country) {
                    this.formGroup.controls['country'].setValue({
                        label: (_q = success === null || success === void 0 ? void 0 : success.contact) === null || _q === void 0 ? void 0 : _q.country,
                        value: (_r = success === null || success === void 0 ? void 0 : success.contact) === null || _r === void 0 ? void 0 : _r.countryCode
                    });
                    this.paramSelectProvince = [
                        {
                            key: 'country',
                            value: (_s = success === null || success === void 0 ? void 0 : success.contact) === null || _s === void 0 ? void 0 : _s.countryCode,
                        },
                    ];
                }
                if ((_t = success === null || success === void 0 ? void 0 : success.contact) === null || _t === void 0 ? void 0 : _t.province) {
                    this.formGroup.controls['province'].setValue({
                        label: (_u = success === null || success === void 0 ? void 0 : success.contact) === null || _u === void 0 ? void 0 : _u.province,
                        value: (_v = success === null || success === void 0 ? void 0 : success.contact) === null || _v === void 0 ? void 0 : _v.provinceCode
                    });
                    this.paramSelectCity = [
                        {
                            key: 'province',
                            value: (_w = success === null || success === void 0 ? void 0 : success.contact) === null || _w === void 0 ? void 0 : _w.provinceCode,
                        },
                    ];
                }
                if ((_x = success === null || success === void 0 ? void 0 : success.contact) === null || _x === void 0 ? void 0 : _x.city) {
                    this.formGroup.controls['city'].setValue({
                        label: (_y = success === null || success === void 0 ? void 0 : success.contact) === null || _y === void 0 ? void 0 : _y.city,
                        value: (_z = success === null || success === void 0 ? void 0 : success.contact) === null || _z === void 0 ? void 0 : _z.cityCode
                    });
                    this.paramSelectDistrict = [
                        {
                            key: 'city',
                            value: (_0 = success === null || success === void 0 ? void 0 : success.contact) === null || _0 === void 0 ? void 0 : _0.cityCode,
                        },
                    ];
                }
                if ((_1 = success === null || success === void 0 ? void 0 : success.contact) === null || _1 === void 0 ? void 0 : _1.district) {
                    this.formGroup.controls['district'].setValue({
                        label: (_2 = success === null || success === void 0 ? void 0 : success.contact) === null || _2 === void 0 ? void 0 : _2.district,
                        value: (_3 = success === null || success === void 0 ? void 0 : success.contact) === null || _3 === void 0 ? void 0 : _3.districtCode
                    });
                    this.paramSelectSubDistrict = [
                        {
                            key: 'district',
                            value: (_4 = success === null || success === void 0 ? void 0 : success.contact) === null || _4 === void 0 ? void 0 : _4.districtCode,
                        },
                    ];
                }
                if ((_5 = success === null || success === void 0 ? void 0 : success.contact) === null || _5 === void 0 ? void 0 : _5.subDistrict) {
                    this.formGroup.controls['subDistrict'].setValue({
                        label: (_6 = success === null || success === void 0 ? void 0 : success.contact) === null || _6 === void 0 ? void 0 : _6.subDistrict,
                        value: (_7 = success === null || success === void 0 ? void 0 : success.contact) === null || _7 === void 0 ? void 0 : _7.subDistrictCode
                    });
                }
            }
            this.authIndexedDB.getEnc('provider').then((value) => {
                if (value !== 'local') {
                    this.provider = value;
                    this.formGroup.controls['email'].disable();
                }
            });
            this.formGroup.markAsPristine();
        }, (error) => {
            this.loadingForm = true;
            if (error instanceof HttpErrorResponse) {
                error = error['error'];
            }
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
        });
    }
    onSelectCountry(select) {
        this.paramSelectProvince = [
            {
                key: 'country',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearProvince();
    }
    onSelectProvince(select) {
        this.paramSelectCity = [
            {
                key: 'province',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearProvince();
    }
    onSelectCity(select) {
        this.paramSelectDistrict = [
            {
                key: 'city',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearCity();
    }
    onSelectDistrict(select) {
        this.paramSelectSubDistrict = [
            {
                key: 'district',
                value: select ? select.value : 'undefined',
            },
        ];
        this.onClearDistrict();
    }
    onClearCountry() {
        this.formGroup.patchValue({
            province: null,
            city: null,
            district: null,
            subDistrict: null,
        });
    }
    onClearProvince() {
        this.formGroup.patchValue({
            city: null,
            district: null,
            subDistrict: null,
        });
    }
    onClearCity() {
        this.formGroup.patchValue({
            district: null,
            subDistrict: null,
        });
    }
    onClearDistrict() {
        this.formGroup.patchValue({
            subDistrict: null,
        });
    }
    uploadImage() {
        const file = this.formGroupImage.get('image').value;
        const data = new FormData();
        data.append('photo', file);
        this.formGroupImage.get('image').disable();
        this.initProgress();
        this.setProgress(65);
        this.exec('profile', 'upload-photo-profile', data).subscribe((success) => {
            this.setProgress(95);
            this.userService.updatePhoto(success.respStatusMessage['checksum']);
            this.uploadFinished = true;
            this.formGroupImage.markAsPristine();
            this.toastr.showI18n(success.respStatusMessage[success.respStatusCode], true, null, 'success');
            this.doneProgress();
        }, (error) => {
            this.formGroupImage.get('image').enable();
            this.toastr.showI18n(error.respStatusMessage[error.respStatusCode], true, null, 'danger');
            this.doneProgress();
        });
    }
    valueSelect(prop) {
        if (this.formGroup.get(prop).value) {
            if (this.formGroup.get(prop).value.label) {
                return this.formGroup.get(prop).value.label;
            }
            else {
                return this.formGroup.get(prop).value;
            }
        }
        else {
            return null;
        }
    }
    valueSelectNonLabel(prop) {
        if (this.formGroup.get(prop).value) {
            if (this.formGroup.get(prop).value.value) {
                return this.formGroup.get(prop).value.value;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    onSubmit() {
        var _a;
        const contact = {
            phoneNumber: this.formGroup.get('phoneNumber').value,
            address: this.formGroup.get('address').value,
            country: this.valueSelect('country'),
            countryCode: this.valueSelectNonLabel('country'),
            province: this.valueSelect('province'),
            provinceCode: this.valueSelectNonLabel('province'),
            city: this.valueSelect('city'),
            cityCode: this.valueSelectNonLabel('city'),
            district: this.valueSelect('district'),
            districtCode: this.valueSelectNonLabel('district'),
            subDistrict: this.valueSelect('subDistrict'),
            subDistrictCode: this.valueSelectNonLabel('subDistrict'),
        };
        const personalInfo = {
            idNumber: this.formGroup.get('idNumber').value,
            placeOfBirth: this.formGroup.get('placeOfBirth').value,
            dateOfBirth: this.formGroup.get('dateOfBirth').value,
            genderCode: this.valueSelectNonLabel('gender'),
            genderValue: this.valueSelect('gender'),
            height: this.formGroup.get('height').value,
            weight: this.formGroup.get('weight').value,
            bloodType: (_a = this.formGroup.get('bloodType').value) === null || _a === void 0 ? void 0 : _a.value,
        };
        const data = {
            name: this.formGroup.get('name').value,
            contact,
            personalInfo,
        };
        if (this.provider === 'local') {
            data['email'] = this.formGroup.get('email').value;
        }
        super.onSubmit(data, 'profile', 'change-profile')
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            if (response) {
                switch (response.respStatusCode) {
                    case ResponseCode.ERR_SCR0008.toString():
                        this.formGroup.controls['email'].setErrors({
                            email: true,
                        });
                        break;
                    case ResponseCode.ERR_SCR0007A.toString():
                        this.formGroup.controls['phoneNumber'].setErrors({
                            'error.pattern.phoneNumber': true,
                        });
                        break;
                    case ResponseCode.OK_SCR004.toString():
                        this.userService.updateName(this.formGroup.get('name').value);
                        break;
                    default:
                        break;
                }
            }
        });
    }
}
ProfilePageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ProfilePageComponent, deps: [{ token: i0.Injector }, { token: USER_SERVICE }, { token: PROFILE_INDEXED_DB }, { token: i1.AuthIndexedDBService }], target: i0.ɵɵFactoryTarget.Component });
ProfilePageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ProfilePageComponent, selector: "do-profile-page", usesInheritance: true, ngImport: i0, template: "<do-page-outlet [header]=\"'Profile'\">\n  <div class=\"row\" pagecontent>\n    <div class=\"col-md-4 col-lg-4\">\n      <form [formGroup]=\"formGroupImage\">\n        <do-image-upload\n          [radius]=\"50\"\n          [skeleton]=\"loadingForm\"\n          [required]=\"true\"\n          [uploadFn]=\"uploadFinished\"\n          formControlName=\"image\">\n        </do-image-upload>\n        <do-button\n          class=\"upload-bg\"\n          (onSubmit)=\"uploadImage()\"\n          [name]=\"'Upload'\"\n          [formGroupButton]=\"formGroupImage\"\n          [disabledButton]=\"formGroupImage.pristine\"\n          [skeleton]=\"loadingForm\">\n          <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\" buttonicon></nb-icon>\n        </do-button>\n      </form>\n    </div>\n    <div class=\"accordion-container col-md-8 col-lg-8\">\n      <form [formGroup]=\"formGroup\">\n        <nb-accordion multi>\n          <nb-accordion-item [expanded]=\"true\">\n            <nb-accordion-item-header>\n              {{'label.account' | translate}}\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <do-input-text\n                [name]=\"'name'\"\n                [label]=\"'Name'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"name\">\n              </do-input-text>\n              <do-input-text\n                [name]=\"'email'\"\n                [label]=\"'Email'\"\n                [required]=\"true\"\n                [pattern]=\"patternEmail\"\n                [paramError]=\"{value:5}\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"email\">\n              </do-input-text>\n              <do-input-text\n                [name]=\"'username'\"\n                [label]=\"'Username'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"username\">\n              </do-input-text>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n          <nb-accordion-item [expanded]=\"true\">\n            <nb-accordion-item-header>\n              {{'label.personal-info' | translate}}\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <do-input-text\n                [name]=\"'idNumber'\"\n                [label]=\"'ID Number'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"idNumber\">\n              </do-input-text>\n              <do-select\n                [name]=\"'gender'\"\n                [label]=\"'Gender'\"\n                [required]=\"true\"\n                [api]=\"apiSelectGender\"\n                [queryParam]=\"paramSelectGender\"\n                [searchable]=\"false\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"gender\">\n              </do-select>\n              <do-input-text\n                [name]=\"'placeOfBirth'\"\n                [label]=\"'Place of Birth'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"placeOfBirth\">\n              </do-input-text>\n              <do-datepicker\n                [name]=\"'dateOfBirth'\"\n                [label]=\"'Date of Birth'\"\n                [required]=\"true\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"dateOfBirth\">\n              </do-datepicker>\n              <do-input-text\n                [name]=\"'height'\"\n                [label]=\"'height.body'\"\n                [placeholder]=\"'Centimeter'\"\n                [type]=\"'number'\"\n                [step]=\"'any'\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"height\">\n              </do-input-text>\n              <do-input-text\n                [name]=\"'weight'\"\n                [label]=\"'weight.body'\"\n                [placeholder]=\"'Kilogram'\"\n                [type]=\"'number'\"\n                [step]=\"'any'\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"weight\">\n              </do-input-text>\n              <do-select\n                [name]=\"'bloodType'\"\n                [label]=\"'Blood Type'\"\n                [placeholder]=\"'Blood Type'\"\n                [items]=\"bloodTypeData\"\n                [searchable]=\"false\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"bloodType\">\n              </do-select>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n          <nb-accordion-item [expanded]=\"true\">\n            <nb-accordion-item-header>\n              {{'label.contact-person' | translate}}\n            </nb-accordion-item-header>\n            <nb-accordion-item-body >\n              <do-input-text\n                [name]=\"'phoneNumber'\"\n                [label]=\"'Telephone'\"\n                [required]=\"true\"\n                [pattern]=\"patternPhoneNumber\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"phoneNumber\">\n              </do-input-text>\n              <do-textarea\n                [name]=\"'address'\"\n                [label]=\"'Address'\"\n                [required]=\"true\"\n                [minLength]=\"minLength\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"address\">\n              </do-textarea>\n              <do-select\n                [name]=\"'country'\"\n                [label]=\"'Country'\"\n                [api]=\"apiSelectCountry\"\n                [skeleton]=\"loadingForm\"\n                (onSelect)=\"onSelectCountry($event)\"\n                (onClear)=\"onClearCountry()\"\n                formControlName=\"country\">\n              </do-select>\n              <do-select\n                [name]=\"'province'\"\n                [label]=\"'Province'\"\n                [api]=\"apiSelectProvince\"\n                [queryParam]=\"paramSelectProvince\"\n                [skeleton]=\"loadingForm\"\n                (onSelect)=\"onSelectProvince($event)\"\n                (onClear)=\"onClearProvince()\"\n                formControlName=\"province\">\n              </do-select>\n              <do-select\n                [name]=\"'city'\"\n                [label]=\"'City'\"\n                [api]=\"apiSelectCity\"\n                [queryParam]=\"paramSelectCity\"\n                [skeleton]=\"loadingForm\"\n                (onSelect)=\"onSelectCity($event)\"\n                (onClear)=\"onClearCity()\"\n                formControlName=\"city\">\n              </do-select>\n              <do-select\n                [name]=\"'district'\"\n                [label]=\"'District'\"\n                [api]=\"apiSelectDistrict\"\n                [queryParam]=\"paramSelectDistrict\"\n                [skeleton]=\"loadingForm\"\n                (onSelect)=\"onSelectDistrict($event)\"\n                (onClear)=\"onClearDistrict()\"\n                formControlName=\"district\">\n              </do-select>\n              <do-select\n                [name]=\"'subDistrict'\"\n                [label]=\"'Sub District'\"\n                [api]=\"apiSelectSubDistrict\"\n                [queryParam]=\"paramSelectSubDistrict\"\n                [skeleton]=\"loadingForm\"\n                formControlName=\"subDistrict\">\n              </do-select>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n        </nb-accordion>\n      </form>\n    </div>\n  </div>\n  <div class=\"offset-sm-6 col-sm-6\" pagefooter>\n    <do-button\n      (onSubmit)=\"onSubmit()\"\n      [name]=\"'Update Profile'\"\n      [disabledButton]=\"disabled\"\n      [formGroupButton]=\"formGroup\"\n      [skeleton]=\"loadingForm\">\n    </do-button>\n  </div>\n</do-page-outlet>\n", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-default :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-dark :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-corporate :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host .upload-bg{display:flex;justify-content:center;align-items:center}\n"], components: [{ type: i2.DoPageOutletComponent, selector: "do-page-outlet", inputs: ["header", "url", "width", "dataSelect", "selected", "param", "hidefooter", "showToggle", "isCollapsed", "iconToggle"], outputs: ["selectChange", "onCollapsed", "onExpanded"] }, { type: i2.ImageUploadComponent, selector: "do-image-upload", inputs: ["image", "height", "width", "radius", "buttonUpload", "skeleton", "uploadFn"], outputs: ["onPreview"] }, { type: i2.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }, { type: i3.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i3.NbAccordionComponent, selector: "nb-accordion", inputs: ["multi"] }, { type: i3.NbAccordionItemComponent, selector: "nb-accordion-item", inputs: ["collapsed", "expanded", "disabled"], outputs: ["collapsedChange"] }, { type: i3.NbAccordionItemHeaderComponent, selector: "nb-accordion-item-header" }, { type: i3.NbAccordionItemBodyComponent, selector: "nb-accordion-item-body" }, { type: i2.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i2.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i2.DoDatePickerComponent, selector: "do-datepicker", inputs: ["placeholder", "colLabel", "colInput", "min", "max", "size", "dateMask"] }, { type: i2.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ProfilePageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-profile-page',
                    styleUrls: ['./profile-page.component.scss'],
                    templateUrl: './profile-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i6.UserService, decorators: [{
                    type: Inject,
                    args: [USER_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PROFILE_INDEXED_DB]
                }] }, { type: i1.AuthIndexedDBService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWV4dHJhL3NyYy9saWIvcHJvZmlsZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tZXh0cmEvc3JjL2xpYi9wcm9maWxlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFZLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLE9BQU8sRUFDUCxZQUFZLEdBRWIsTUFBTSxrQkFBa0IsQ0FBQztBQUkxQixPQUFPLEVBQUUsaUJBQWlCLEVBQXlDLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7O0FBUzlGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxpQkFBc0I7SUE2QzlELFlBQ1MsUUFBa0IsRUFDSyxXQUF3QixFQUNsQixnQkFBeUMsRUFDckUsYUFBbUM7UUFDM0MsS0FBSyxDQUFDLFFBQVEsRUFDWjtZQUNFLFFBQVEsRUFBRSxDQUFDO29CQUNULEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7WUFDRixJQUFJLEVBQUUsRUFBRTtZQUNSLFFBQVEsRUFBRSxFQUFFO1lBQ1osWUFBWSxFQUFFLEVBQUU7WUFDaEIsV0FBVyxFQUFFLEVBQUU7WUFDZixNQUFNLEVBQUUsRUFBRTtZQUNWLE1BQU0sRUFBRSxFQUFFO1lBQ1YsTUFBTSxFQUFFLEVBQUU7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OlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgUFJPRklMRV9JTkRFWEVEX0RCLFxuICBSZXNwb25zZUNvZGUsXG4gIFBhdHRlcm4sXG4gIFVTRVJfU0VSVklDRSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSHR0cEJhc2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBJbmRleGVkREJGYWN0b3J5U2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQmFzZUZvcm1Db21wb25lbnQsIFNlbGVjdFBhcmFtTW9kZWwsIFNlbGVjdFJlc3BvbnNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1hdXRoJztcbmltcG9ydCB7IENvbnRhY3RVc2VyTW9kZWwsIFBlcnNvbmFsSW5mb01vZGVsLCBQcm9maWxlTW9kZWwgfSBmcm9tICcuL3Byb2ZpbGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1wcm9maWxlLXBhZ2UnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVQYWdlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGZvcm1Hcm91cEltYWdlOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyB1cGxvYWRGaW5pc2hlZDogYm9vbGVhbjtcbiAgcHVibGljIHBhdHRlcm5FbWFpbDogc3RyaW5nID0gUGF0dGVybi5FTUFJTDtcbiAgcHVibGljIHBhdHRlcm5QaG9uZU51bWJlcjogc3RyaW5nID0gUGF0dGVybi5QSE9ORV9OVU1CRVI7XG4gIHB1YmxpYyBtaW5MZW5ndGg6IG51bWJlciA9IDU7XG4gIHB1YmxpYyBkaXNhYmxlZFVwbG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcHJvdmlkZXI6IHN0cmluZyA9ICdsb2NhbCc7XG5cbiAgcHVibGljIGFwaVNlbGVjdEdlbmRlcjogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHBhcmFtU2VsZWN0R2VuZGVyOiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgcHVibGljIGFwaVNlbGVjdENvdW50cnk6IEh0dHBCYXNlTW9kZWw7XG5cbiAgcHVibGljIGFwaVNlbGVjdFByb3ZpbmNlOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RQcm92aW5jZTogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RDaXR5OiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RDaXR5OiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgcHVibGljIGFwaVNlbGVjdERpc3RyaWN0OiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3REaXN0cmljdDogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RTdWJEaXN0cmljdDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHBhcmFtU2VsZWN0U3ViRGlzdHJpY3Q6IFNlbGVjdFBhcmFtTW9kZWxbXTtcblxuICBwdWJsaWMgYmxvb2RUeXBlRGF0YTogU2VsZWN0UmVzcG9uc2VNb2RlbFtdID0gW3tcbiAgICBsYWJlbDogJ0EnLFxuICAgIHZhbHVlOiAnQScsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICB9LCB7XG4gICAgbGFiZWw6ICdCJyxcbiAgICB2YWx1ZTogJ0InLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgfSwge1xuICAgIGxhYmVsOiAnQUInLFxuICAgIHZhbHVlOiAnQUInLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgfSwge1xuICAgIGxhYmVsOiAnTycsXG4gICAgdmFsdWU6ICdPJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gIH1dO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChVU0VSX1NFUlZJQ0UpIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIEBJbmplY3QoUFJPRklMRV9JTkRFWEVEX0RCKSBwcml2YXRlIHByb2ZpbGVJbmRleGVkREI6IEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aEluZGV4ZWREQjogQXV0aEluZGV4ZWREQlNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3RvcixcbiAgICAgIHtcbiAgICAgICAgdXNlcm5hbWU6IFt7XG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIH1dLFxuICAgICAgICBuYW1lOiBbXSxcbiAgICAgICAgaWROdW1iZXI6IFtdLFxuICAgICAgICBwbGFjZU9mQmlydGg6IFtdLFxuICAgICAgICBkYXRlT2ZCaXJ0aDogW10sXG4gICAgICAgIGdlbmRlcjogW10sXG4gICAgICAgIGhlaWdodDogW10sXG4gICAgICAgIHdlaWdodDogW10sXG4gICAgICAgIGJsb29kVHlwZTogW10sXG4gICAgICAgIGVtYWlsOiBbXSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IFtdLFxuICAgICAgICBhZGRyZXNzOiBbbnVsbCwgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDUpXV0sXG4gICAgICAgIGNvdW50cnk6IFtdLFxuICAgICAgICBwcm92aW5jZTogW10sXG4gICAgICAgIGNpdHk6IFtdLFxuICAgICAgICBkaXN0cmljdDogW10sXG4gICAgICAgIHN1YkRpc3RyaWN0OiBbXSxcbiAgICAgIH0pO1xuICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGltYWdlOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVNlbGVjdEdlbmRlciA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LXBhcmFtZXRlciddO1xuICAgIHRoaXMuYXBpU2VsZWN0Q291bnRyeSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LWNvdW50cnknXTtcbiAgICB0aGlzLmFwaVNlbGVjdFByb3ZpbmNlID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtcHJvdmluY2UnXTtcbiAgICB0aGlzLmFwaVNlbGVjdENpdHkgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1jaXR5J107XG4gICAgdGhpcy5hcGlTZWxlY3REaXN0cmljdCA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LWRpc3RyaWN0J107XG4gICAgdGhpcy5hcGlTZWxlY3RTdWJEaXN0cmljdCA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LXN1YmRpc3RyaWN0J107XG4gICAgdGhpcy5hdXRoSW5kZXhlZERCLmdldEVuYygncHJvdmlkZXInKS50aGVuKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodmFsdWUgIT09ICdsb2NhbCcpIHtcbiAgICAgICAgdGhpcy5wcm92aWRlciA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1haWwnXS5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uSW5pdCgncHJvZmlsZScsICdnZXQtcHJvZmlsZScpO1xuICAgIHRoaXMucHJvZmlsZUluZGV4ZWREQi5nZXQoJ2ltYWdlLWJhc2U2NCcpLnRoZW4oKGltYWdlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UuZ2V0KCdpbWFnZScpLnNldFZhbHVlKGltYWdlKTtcbiAgICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UubWFya0FzUGVuZGluZygpO1xuICAgIH0pO1xuICAgIHRoaXMucGFyYW1TZWxlY3RHZW5kZXIgPSBbe1xuICAgICAga2V5OiAncGFyYW1ldGVyR3JvdXBDb2RlJyxcbiAgICAgIHZhbHVlOiAnR0VOREVSJyxcbiAgICB9XTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0UHJvdmluY2UgPSBbe1xuICAgICAga2V5OiAnY291bnRyeScsXG4gICAgICB2YWx1ZTogJ3VuZGVmaW5lZCcsXG4gICAgfV07XG4gICAgdGhpcy5wYXJhbVNlbGVjdENpdHkgPSBbe1xuICAgICAga2V5OiAncHJvdmluY2UnLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICAgIHRoaXMucGFyYW1TZWxlY3REaXN0cmljdCA9IFt7XG4gICAgICBrZXk6ICdjaXR5JyxcbiAgICAgIHZhbHVlOiAndW5kZWZpbmVkJyxcbiAgICB9XTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0U3ViRGlzdHJpY3QgPSBbe1xuICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICB9XG5cbiAgb25Jbml0KHNlcnZpY2VOYW1lOiBzdHJpbmcsIGFwaU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgIHRoaXMuZXhlYyhzZXJ2aWNlTmFtZSwgYXBpTmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBQcm9maWxlTW9kZWwpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmdGb3JtID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ25hbWUnXS5zZXRWYWx1ZShzdWNjZXNzLm5hbWUpO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWyd1c2VybmFtZSddLnNldFZhbHVlKHN1Y2Nlc3MudXNlcm5hbWUpO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydlbWFpbCddLnNldFZhbHVlKHN1Y2Nlc3MuZW1haWwpO1xuICAgICAgICAgIGlmIChzdWNjZXNzPy5wZXJzb25hbEluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydpZE51bWJlciddLnNldFZhbHVlKHN1Y2Nlc3M/LnBlcnNvbmFsSW5mbz8uaWROdW1iZXIpO1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3M/LnBlcnNvbmFsSW5mbz8uZ2VuZGVyQ29kZSkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZ2VuZGVyJ10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzPy5wZXJzb25hbEluZm8uZ2VuZGVyVmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3M/LnBlcnNvbmFsSW5mby5nZW5kZXJDb2RlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3BsYWNlT2ZCaXJ0aCddLnNldFZhbHVlKHN1Y2Nlc3M/LnBlcnNvbmFsSW5mbz8ucGxhY2VPZkJpcnRoKTtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzPy5wZXJzb25hbEluZm8/LmRhdGVPZkJpcnRoKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydkYXRlT2ZCaXJ0aCddLnNldFZhbHVlKHN1Y2Nlc3M/LnBlcnNvbmFsSW5mbz8uZGF0ZU9mQmlydGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2hlaWdodCddLnNldFZhbHVlKHN1Y2Nlc3M/LnBlcnNvbmFsSW5mbz8uaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWyd3ZWlnaHQnXS5zZXRWYWx1ZShzdWNjZXNzPy5wZXJzb25hbEluZm8/LndlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snYmxvb2RUeXBlJ10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzcz8ucGVyc29uYWxJbmZvPy5ibG9vZFR5cGUsXG4gICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzPy5wZXJzb25hbEluZm8/LmJsb29kVHlwZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3VjY2Vzcz8uY29udGFjdCkge1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3M/LmNvbnRhY3Q/LmFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2FkZHJlc3MnXS5zZXRWYWx1ZShzdWNjZXNzPy5jb250YWN0Py5hZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWNjZXNzPy5jb250YWN0Py5waG9uZU51bWJlcikge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGhvbmVOdW1iZXInXS5zZXRWYWx1ZShzdWNjZXNzPy5jb250YWN0Py5waG9uZU51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcz8uY29udGFjdD8uY291bnRyeSkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snY291bnRyeSddLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzcz8uY29udGFjdD8uY291bnRyeSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzcz8uY29udGFjdD8uY291bnRyeUNvZGVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMucGFyYW1TZWxlY3RQcm92aW5jZSA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzPy5jb250YWN0Py5jb3VudHJ5Q29kZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3M/LmNvbnRhY3Q/LnByb3ZpbmNlKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydwcm92aW5jZSddLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzcz8uY29udGFjdD8ucHJvdmluY2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3M/LmNvbnRhY3Q/LnByb3ZpbmNlQ29kZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5wYXJhbVNlbGVjdENpdHkgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAncHJvdmluY2UnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3M/LmNvbnRhY3Q/LnByb3ZpbmNlQ29kZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3M/LmNvbnRhY3Q/LmNpdHkpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2NpdHknXS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHN1Y2Nlc3M/LmNvbnRhY3Q/LmNpdHksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3M/LmNvbnRhY3Q/LmNpdHlDb2RlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLnBhcmFtU2VsZWN0RGlzdHJpY3QgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnY2l0eScsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzcz8uY29udGFjdD8uY2l0eUNvZGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWNjZXNzPy5jb250YWN0Py5kaXN0cmljdCkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZGlzdHJpY3QnXS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHN1Y2Nlc3M/LmNvbnRhY3Q/LmRpc3RyaWN0LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzPy5jb250YWN0Py5kaXN0cmljdENvZGVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMucGFyYW1TZWxlY3RTdWJEaXN0cmljdCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6ICdkaXN0cmljdCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzcz8uY29udGFjdD8uZGlzdHJpY3RDb2RlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcz8uY29udGFjdD8uc3ViRGlzdHJpY3QpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3N1YkRpc3RyaWN0J10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzPy5jb250YWN0Py5zdWJEaXN0cmljdCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzcz8uY29udGFjdD8uc3ViRGlzdHJpY3RDb2RlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIuZ2V0RW5jKCdwcm92aWRlcicpLnRoZW4oKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJ2xvY2FsJykge1xuICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVyID0gdmFsdWU7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydlbWFpbCddLmRpc2FibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IGFueSB8IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGVycm9yID0gZXJyb3JbJ2Vycm9yJ10gYXMgQXBpQmFzZVJlc3BvbnNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihlcnJvci5yZXNwU3RhdHVzTWVzc2FnZVtlcnJvci5yZXNwU3RhdHVzQ29kZV0sIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBvblNlbGVjdENvdW50cnkoc2VsZWN0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtU2VsZWN0UHJvdmluY2UgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ2NvdW50cnknLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ID8gc2VsZWN0LnZhbHVlIDogJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5vbkNsZWFyUHJvdmluY2UoKTtcbiAgfVxuICBvblNlbGVjdFByb3ZpbmNlKHNlbGVjdDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbVNlbGVjdENpdHkgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3Byb3ZpbmNlJyxcbiAgICAgICAgdmFsdWU6IHNlbGVjdCA/IHNlbGVjdC52YWx1ZSA6ICd1bmRlZmluZWQnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMub25DbGVhclByb3ZpbmNlKCk7XG4gIH1cbiAgb25TZWxlY3RDaXR5KHNlbGVjdDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbVNlbGVjdERpc3RyaWN0ID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdjaXR5JyxcbiAgICAgICAgdmFsdWU6IHNlbGVjdCA/IHNlbGVjdC52YWx1ZSA6ICd1bmRlZmluZWQnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMub25DbGVhckNpdHkoKTtcbiAgfVxuICBvblNlbGVjdERpc3RyaWN0KHNlbGVjdDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbVNlbGVjdFN1YkRpc3RyaWN0ID0gW1xuICAgICAge1xuICAgICAgICBrZXk6ICdkaXN0cmljdCcsXG4gICAgICAgIHZhbHVlOiBzZWxlY3QgPyBzZWxlY3QudmFsdWUgOiAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLm9uQ2xlYXJEaXN0cmljdCgpO1xuICB9XG5cbiAgb25DbGVhckNvdW50cnkoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XG4gICAgICBwcm92aW5jZTogbnVsbCxcbiAgICAgIGNpdHk6IG51bGwsXG4gICAgICBkaXN0cmljdDogbnVsbCxcbiAgICAgIHN1YkRpc3RyaWN0OiBudWxsLFxuICAgIH0pO1xuICB9XG4gIG9uQ2xlYXJQcm92aW5jZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcbiAgICAgIGNpdHk6IG51bGwsXG4gICAgICBkaXN0cmljdDogbnVsbCxcbiAgICAgIHN1YkRpc3RyaWN0OiBudWxsLFxuICAgIH0pO1xuICB9XG4gIG9uQ2xlYXJDaXR5KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgZGlzdHJpY3Q6IG51bGwsXG4gICAgICBzdWJEaXN0cmljdDogbnVsbCxcbiAgICB9KTtcbiAgfVxuICBvbkNsZWFyRGlzdHJpY3QoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XG4gICAgICBzdWJEaXN0cmljdDogbnVsbCxcbiAgICB9KTtcbiAgfVxuXG4gIHVwbG9hZEltYWdlKCkge1xuICAgIGNvbnN0IGZpbGU6IGFueSA9IHRoaXMuZm9ybUdyb3VwSW1hZ2UuZ2V0KCdpbWFnZScpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZGF0YS5hcHBlbmQoJ3Bob3RvJywgZmlsZSk7XG4gICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5nZXQoJ2ltYWdlJykuZGlzYWJsZSgpO1xuICAgIHRoaXMuaW5pdFByb2dyZXNzKCk7XG4gICAgdGhpcy5zZXRQcm9ncmVzcyg2NSk7XG4gICAgdGhpcy5leGVjKCdwcm9maWxlJywgJ3VwbG9hZC1waG90by1wcm9maWxlJywgZGF0YSkuc3Vic2NyaWJlKFxuICAgICAgICAoc3VjY2VzczogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyg5NSk7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS51cGRhdGVQaG90byhzdWNjZXNzLnJlc3BTdGF0dXNNZXNzYWdlWydjaGVja3N1bSddKTtcbiAgICAgICAgICB0aGlzLnVwbG9hZEZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cEltYWdlLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oc3VjY2Vzcy5yZXNwU3RhdHVzTWVzc2FnZVtzdWNjZXNzLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICB0aGlzLmRvbmVQcm9ncmVzcygpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UuZ2V0KCdpbWFnZScpLmVuYWJsZSgpO1xuICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKGVycm9yLnJlc3BTdGF0dXNNZXNzYWdlW2Vycm9yLnJlc3BTdGF0dXNDb2RlXSwgdHJ1ZSwgbnVsbCwgJ2RhbmdlcicpO1xuICAgICAgICAgIHRoaXMuZG9uZVByb2dyZXNzKCk7XG4gICAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHZhbHVlU2VsZWN0KHByb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS5sYWJlbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFsdWVTZWxlY3ROb25MYWJlbChwcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUudmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCBjb250YWN0OiBDb250YWN0VXNlck1vZGVsID0ge1xuICAgICAgcGhvbmVOdW1iZXI6IHRoaXMuZm9ybUdyb3VwLmdldCgncGhvbmVOdW1iZXInKS52YWx1ZSxcbiAgICAgIGFkZHJlc3M6IHRoaXMuZm9ybUdyb3VwLmdldCgnYWRkcmVzcycpLnZhbHVlLFxuICAgICAgY291bnRyeTogdGhpcy52YWx1ZVNlbGVjdCgnY291bnRyeScpLFxuICAgICAgY291bnRyeUNvZGU6IHRoaXMudmFsdWVTZWxlY3ROb25MYWJlbCgnY291bnRyeScpLFxuICAgICAgcHJvdmluY2U6IHRoaXMudmFsdWVTZWxlY3QoJ3Byb3ZpbmNlJyksXG4gICAgICBwcm92aW5jZUNvZGU6IHRoaXMudmFsdWVTZWxlY3ROb25MYWJlbCgncHJvdmluY2UnKSxcbiAgICAgIGNpdHk6IHRoaXMudmFsdWVTZWxlY3QoJ2NpdHknKSxcbiAgICAgIGNpdHlDb2RlOiB0aGlzLnZhbHVlU2VsZWN0Tm9uTGFiZWwoJ2NpdHknKSxcbiAgICAgIGRpc3RyaWN0OiB0aGlzLnZhbHVlU2VsZWN0KCdkaXN0cmljdCcpLFxuICAgICAgZGlzdHJpY3RDb2RlOiB0aGlzLnZhbHVlU2VsZWN0Tm9uTGFiZWwoJ2Rpc3RyaWN0JyksXG4gICAgICBzdWJEaXN0cmljdDogdGhpcy52YWx1ZVNlbGVjdCgnc3ViRGlzdHJpY3QnKSxcbiAgICAgIHN1YkRpc3RyaWN0Q29kZTogdGhpcy52YWx1ZVNlbGVjdE5vbkxhYmVsKCdzdWJEaXN0cmljdCcpLFxuICAgIH07XG4gICAgY29uc3QgcGVyc29uYWxJbmZvOiBQZXJzb25hbEluZm9Nb2RlbCA9IHtcbiAgICAgIGlkTnVtYmVyOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2lkTnVtYmVyJykudmFsdWUsXG4gICAgICBwbGFjZU9mQmlydGg6IHRoaXMuZm9ybUdyb3VwLmdldCgncGxhY2VPZkJpcnRoJykudmFsdWUsXG4gICAgICBkYXRlT2ZCaXJ0aDogdGhpcy5mb3JtR3JvdXAuZ2V0KCdkYXRlT2ZCaXJ0aCcpLnZhbHVlLFxuICAgICAgZ2VuZGVyQ29kZTogdGhpcy52YWx1ZVNlbGVjdE5vbkxhYmVsKCdnZW5kZXInKSxcbiAgICAgIGdlbmRlclZhbHVlOiB0aGlzLnZhbHVlU2VsZWN0KCdnZW5kZXInKSxcbiAgICAgIGhlaWdodDogdGhpcy5mb3JtR3JvdXAuZ2V0KCdoZWlnaHQnKS52YWx1ZSxcbiAgICAgIHdlaWdodDogdGhpcy5mb3JtR3JvdXAuZ2V0KCd3ZWlnaHQnKS52YWx1ZSxcbiAgICAgIGJsb29kVHlwZTogdGhpcy5mb3JtR3JvdXAuZ2V0KCdibG9vZFR5cGUnKS52YWx1ZT8udmFsdWUsXG4gICAgfTtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBuYW1lOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS52YWx1ZSxcbiAgICAgIGNvbnRhY3QsXG4gICAgICBwZXJzb25hbEluZm8sXG4gICAgfTtcbiAgICBpZiAodGhpcy5wcm92aWRlciA9PT0gJ2xvY2FsJykge1xuICAgICAgZGF0YVsnZW1haWwnXSA9IHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS52YWx1ZTtcbiAgICB9XG4gICAgKHN1cGVyLm9uU3VibWl0KGRhdGEsICdwcm9maWxlJywgJ2NoYW5nZS1wcm9maWxlJykgYXMgT2JzZXJ2YWJsZTxBcGlCYXNlUmVzcG9uc2U+KVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAwOC50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1haWwnXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAwN0EudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bob25lTnVtYmVyJ10uc2V0RXJyb3JzKHtcbiAgICAgICAgICAgICAgICAgICAgICAnZXJyb3IucGF0dGVybi5waG9uZU51bWJlcic6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb2RlLk9LX1NDUjAwNC50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZU5hbWUodGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gIH1cblxufVxuIiwiPGRvLXBhZ2Utb3V0bGV0IFtoZWFkZXJdPVwiJ1Byb2ZpbGUnXCI+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiBwYWdlY29udGVudD5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLWxnLTRcIj5cbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwSW1hZ2VcIj5cbiAgICAgICAgPGRvLWltYWdlLXVwbG9hZFxuICAgICAgICAgIFtyYWRpdXNdPVwiNTBcIlxuICAgICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICAgIFt1cGxvYWRGbl09XCJ1cGxvYWRGaW5pc2hlZFwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgPC9kby1pbWFnZS11cGxvYWQ+XG4gICAgICAgIDxkby1idXR0b25cbiAgICAgICAgICBjbGFzcz1cInVwbG9hZC1iZ1wiXG4gICAgICAgICAgKG9uU3VibWl0KT1cInVwbG9hZEltYWdlKClcIlxuICAgICAgICAgIFtuYW1lXT1cIidVcGxvYWQnXCJcbiAgICAgICAgICBbZm9ybUdyb3VwQnV0dG9uXT1cImZvcm1Hcm91cEltYWdlXCJcbiAgICAgICAgICBbZGlzYWJsZWRCdXR0b25dPVwiZm9ybUdyb3VwSW1hZ2UucHJpc3RpbmVcIlxuICAgICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiPlxuICAgICAgICAgIDxuYi1pY29uIGNsYXNzPVwidXBsb2FkLWljb25cIiBpY29uPVwiY2xvdWQtdXBsb2FkLW91dGxpbmVcIiBwYWNrPVwiZXZhXCIgYnV0dG9uaWNvbj48L25iLWljb24+XG4gICAgICAgIDwvZG8tYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tY29udGFpbmVyIGNvbC1tZC04IGNvbC1sZy04XCI+XG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxuICAgICAgICA8bmItYWNjb3JkaW9uIG11bHRpPlxuICAgICAgICAgIDxuYi1hY2NvcmRpb24taXRlbSBbZXhwYW5kZWRdPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPG5iLWFjY29yZGlvbi1pdGVtLWhlYWRlcj5cbiAgICAgICAgICAgICAge3snbGFiZWwuYWNjb3VudCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgPC9uYi1hY2NvcmRpb24taXRlbS1oZWFkZXI+XG4gICAgICAgICAgICA8bmItYWNjb3JkaW9uLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgPGRvLWlucHV0LXRleHRcbiAgICAgICAgICAgICAgICBbbmFtZV09XCInbmFtZSdcIlxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCInTmFtZSdcIlxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgICAgICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICAgICAgICAgIFtuYW1lXT1cIidlbWFpbCdcIlxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCInRW1haWwnXCJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW3BhdHRlcm5dPVwicGF0dGVybkVtYWlsXCJcbiAgICAgICAgICAgICAgICBbcGFyYW1FcnJvcl09XCJ7dmFsdWU6NX1cIlxuICAgICAgICAgICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgICAgICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICAgICAgICAgIFtuYW1lXT1cIid1c2VybmFtZSdcIlxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCInVXNlcm5hbWUnXCJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ1c2VybmFtZVwiPlxuICAgICAgICAgICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICAgICAgICA8L25iLWFjY29yZGlvbi1pdGVtLWJvZHk+XG4gICAgICAgICAgPC9uYi1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICA8bmItYWNjb3JkaW9uLWl0ZW0gW2V4cGFuZGVkXT1cInRydWVcIj5cbiAgICAgICAgICAgIDxuYi1hY2NvcmRpb24taXRlbS1oZWFkZXI+XG4gICAgICAgICAgICAgIHt7J2xhYmVsLnBlcnNvbmFsLWluZm8nIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgIDwvbmItYWNjb3JkaW9uLWl0ZW0taGVhZGVyPlxuICAgICAgICAgICAgPG5iLWFjY29yZGlvbi1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgICAgICAgICAgW25hbWVdPVwiJ2lkTnVtYmVyJ1wiXG4gICAgICAgICAgICAgICAgW2xhYmVsXT1cIidJRCBOdW1iZXInXCJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJpZE51bWJlclwiPlxuICAgICAgICAgICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICAgICAgICAgIDxkby1zZWxlY3RcbiAgICAgICAgICAgICAgICBbbmFtZV09XCInZ2VuZGVyJ1wiXG4gICAgICAgICAgICAgICAgW2xhYmVsXT1cIidHZW5kZXInXCJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW2FwaV09XCJhcGlTZWxlY3RHZW5kZXJcIlxuICAgICAgICAgICAgICAgIFtxdWVyeVBhcmFtXT1cInBhcmFtU2VsZWN0R2VuZGVyXCJcbiAgICAgICAgICAgICAgICBbc2VhcmNoYWJsZV09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJnZW5kZXJcIj5cbiAgICAgICAgICAgICAgPC9kby1zZWxlY3Q+XG4gICAgICAgICAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgICAgICAgICAgW25hbWVdPVwiJ3BsYWNlT2ZCaXJ0aCdcIlxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCInUGxhY2Ugb2YgQmlydGgnXCJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwbGFjZU9mQmlydGhcIj5cbiAgICAgICAgICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgICAgICAgICA8ZG8tZGF0ZXBpY2tlclxuICAgICAgICAgICAgICAgIFtuYW1lXT1cIidkYXRlT2ZCaXJ0aCdcIlxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCInRGF0ZSBvZiBCaXJ0aCdcIlxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImRhdGVPZkJpcnRoXCI+XG4gICAgICAgICAgICAgIDwvZG8tZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgICAgPGRvLWlucHV0LXRleHRcbiAgICAgICAgICAgICAgICBbbmFtZV09XCInaGVpZ2h0J1wiXG4gICAgICAgICAgICAgICAgW2xhYmVsXT1cIidoZWlnaHQuYm9keSdcIlxuICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInQ2VudGltZXRlcidcIlxuICAgICAgICAgICAgICAgIFt0eXBlXT1cIidudW1iZXInXCJcbiAgICAgICAgICAgICAgICBbc3RlcF09XCInYW55J1wiXG4gICAgICAgICAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJoZWlnaHRcIj5cbiAgICAgICAgICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgICAgICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICAgICAgICAgIFtuYW1lXT1cIid3ZWlnaHQnXCJcbiAgICAgICAgICAgICAgICBbbGFiZWxdPVwiJ3dlaWdodC5ib2R5J1wiXG4gICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidLaWxvZ3JhbSdcIlxuICAgICAgICAgICAgICAgIFt0eXBlXT1cIidudW1iZXInXCJcbiAgICAgICAgICAgICAgICBbc3RlcF09XCInYW55J1wiXG4gICAgICAgICAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ3ZWlnaHRcIj5cbiAgICAgICAgICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgICAgICAgICA8ZG8tc2VsZWN0XG4gICAgICAgICAgICAgICAgW25hbWVdPVwiJ2Jsb29kVHlwZSdcIlxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCInQmxvb2QgVHlwZSdcIlxuICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInQmxvb2QgVHlwZSdcIlxuICAgICAgICAgICAgICAgIFtpdGVtc109XCJibG9vZFR5cGVEYXRhXCJcbiAgICAgICAgICAgICAgICBbc2VhcmNoYWJsZV09XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJibG9vZFR5cGVcIj5cbiAgICAgICAgICAgICAgPC9kby1zZWxlY3Q+XG4gICAgICAgICAgICA8L25iLWFjY29yZGlvbi1pdGVtLWJvZHk+XG4gICAgICAgICAgPC9uYi1hY2NvcmRpb24taXRlbT5cbiAgICAgICAgICA8bmItYWNjb3JkaW9uLWl0ZW0gW2V4cGFuZGVkXT1cInRydWVcIj5cbiAgICAgICAgICAgIDxuYi1hY2NvcmRpb24taXRlbS1oZWFkZXI+XG4gICAgICAgICAgICAgIHt7J2xhYmVsLmNvbnRhY3QtcGVyc29uJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICA8L25iLWFjY29yZGlvbi1pdGVtLWhlYWRlcj5cbiAgICAgICAgICAgIDxuYi1hY2NvcmRpb24taXRlbS1ib2R5ID5cbiAgICAgICAgICAgICAgPGRvLWlucHV0LXRleHRcbiAgICAgICAgICAgICAgICBbbmFtZV09XCIncGhvbmVOdW1iZXInXCJcbiAgICAgICAgICAgICAgICBbbGFiZWxdPVwiJ1RlbGVwaG9uZSdcIlxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBbcGF0dGVybl09XCJwYXR0ZXJuUGhvbmVOdW1iZXJcIlxuICAgICAgICAgICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGhvbmVOdW1iZXJcIj5cbiAgICAgICAgICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgICAgICAgICA8ZG8tdGV4dGFyZWFcbiAgICAgICAgICAgICAgICBbbmFtZV09XCInYWRkcmVzcydcIlxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCInQWRkcmVzcydcIlxuICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBbbWluTGVuZ3RoXT1cIm1pbkxlbmd0aFwiXG4gICAgICAgICAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJhZGRyZXNzXCI+XG4gICAgICAgICAgICAgIDwvZG8tdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDxkby1zZWxlY3RcbiAgICAgICAgICAgICAgICBbbmFtZV09XCInY291bnRyeSdcIlxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCInQ291bnRyeSdcIlxuICAgICAgICAgICAgICAgIFthcGldPVwiYXBpU2VsZWN0Q291bnRyeVwiXG4gICAgICAgICAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgICAgICAgICAob25TZWxlY3QpPVwib25TZWxlY3RDb3VudHJ5KCRldmVudClcIlxuICAgICAgICAgICAgICAgIChvbkNsZWFyKT1cIm9uQ2xlYXJDb3VudHJ5KClcIlxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImNvdW50cnlcIj5cbiAgICAgICAgICAgICAgPC9kby1zZWxlY3Q+XG4gICAgICAgICAgICAgIDxkby1zZWxlY3RcbiAgICAgICAgICAgICAgICBbbmFtZV09XCIncHJvdmluY2UnXCJcbiAgICAgICAgICAgICAgICBbbGFiZWxdPVwiJ1Byb3ZpbmNlJ1wiXG4gICAgICAgICAgICAgICAgW2FwaV09XCJhcGlTZWxlY3RQcm92aW5jZVwiXG4gICAgICAgICAgICAgICAgW3F1ZXJ5UGFyYW1dPVwicGFyYW1TZWxlY3RQcm92aW5jZVwiXG4gICAgICAgICAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgICAgICAgICAob25TZWxlY3QpPVwib25TZWxlY3RQcm92aW5jZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAob25DbGVhcik9XCJvbkNsZWFyUHJvdmluY2UoKVwiXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicHJvdmluY2VcIj5cbiAgICAgICAgICAgICAgPC9kby1zZWxlY3Q+XG4gICAgICAgICAgICAgIDxkby1zZWxlY3RcbiAgICAgICAgICAgICAgICBbbmFtZV09XCInY2l0eSdcIlxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCInQ2l0eSdcIlxuICAgICAgICAgICAgICAgIFthcGldPVwiYXBpU2VsZWN0Q2l0eVwiXG4gICAgICAgICAgICAgICAgW3F1ZXJ5UGFyYW1dPVwicGFyYW1TZWxlY3RDaXR5XCJcbiAgICAgICAgICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICAgICAgICAgIChvblNlbGVjdCk9XCJvblNlbGVjdENpdHkoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKG9uQ2xlYXIpPVwib25DbGVhckNpdHkoKVwiXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY2l0eVwiPlxuICAgICAgICAgICAgICA8L2RvLXNlbGVjdD5cbiAgICAgICAgICAgICAgPGRvLXNlbGVjdFxuICAgICAgICAgICAgICAgIFtuYW1lXT1cIidkaXN0cmljdCdcIlxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCInRGlzdHJpY3QnXCJcbiAgICAgICAgICAgICAgICBbYXBpXT1cImFwaVNlbGVjdERpc3RyaWN0XCJcbiAgICAgICAgICAgICAgICBbcXVlcnlQYXJhbV09XCJwYXJhbVNlbGVjdERpc3RyaWN0XCJcbiAgICAgICAgICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICAgICAgICAgIChvblNlbGVjdCk9XCJvblNlbGVjdERpc3RyaWN0KCRldmVudClcIlxuICAgICAgICAgICAgICAgIChvbkNsZWFyKT1cIm9uQ2xlYXJEaXN0cmljdCgpXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkaXN0cmljdFwiPlxuICAgICAgICAgICAgICA8L2RvLXNlbGVjdD5cbiAgICAgICAgICAgICAgPGRvLXNlbGVjdFxuICAgICAgICAgICAgICAgIFtuYW1lXT1cIidzdWJEaXN0cmljdCdcIlxuICAgICAgICAgICAgICAgIFtsYWJlbF09XCInU3ViIERpc3RyaWN0J1wiXG4gICAgICAgICAgICAgICAgW2FwaV09XCJhcGlTZWxlY3RTdWJEaXN0cmljdFwiXG4gICAgICAgICAgICAgICAgW3F1ZXJ5UGFyYW1dPVwicGFyYW1TZWxlY3RTdWJEaXN0cmljdFwiXG4gICAgICAgICAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzdWJEaXN0cmljdFwiPlxuICAgICAgICAgICAgICA8L2RvLXNlbGVjdD5cbiAgICAgICAgICAgIDwvbmItYWNjb3JkaW9uLWl0ZW0tYm9keT5cbiAgICAgICAgICA8L25iLWFjY29yZGlvbi1pdGVtPlxuICAgICAgICA8L25iLWFjY29yZGlvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJvZmZzZXQtc20tNiBjb2wtc20tNlwiIHBhZ2Vmb290ZXI+XG4gICAgPGRvLWJ1dHRvblxuICAgICAgKG9uU3VibWl0KT1cIm9uU3VibWl0KClcIlxuICAgICAgW25hbWVdPVwiJ1VwZGF0ZSBQcm9maWxlJ1wiXG4gICAgICBbZGlzYWJsZWRCdXR0b25dPVwiZGlzYWJsZWRcIlxuICAgICAgW2Zvcm1Hcm91cEJ1dHRvbl09XCJmb3JtR3JvdXBcIlxuICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCI+XG4gICAgPC9kby1idXR0b24+XG4gIDwvZGl2PlxuPC9kby1wYWdlLW91dGxldD5cbiJdfQ==