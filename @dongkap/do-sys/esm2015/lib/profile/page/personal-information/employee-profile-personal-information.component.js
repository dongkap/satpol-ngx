import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { map, takeUntil } from 'rxjs/operators';
import { ResponseCode, Pattern, USER_SERVICE, PROFILE_INDEXED_DB, } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@dongkap/do-auth";
import * as i2 from "@dongkap/do-shared";
import * as i3 from "@nebular/theme";
import * as i4 from "@angular/forms";
import * as i5 from "@dongkap/do-core";
export class EmployeeProfilePersonalInformationComponent extends BaseFormComponent {
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
        this.patternFullname = Pattern.FULLNAME;
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
    ngOnInit() {
    }
    loadDataMenu() {
        this.loadingForm = true;
        return this.exec('profile', 'get-profile')
            .pipe(map((success) => {
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
        }));
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
EmployeeProfilePersonalInformationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfilePersonalInformationComponent, deps: [{ token: i0.Injector }, { token: USER_SERVICE }, { token: PROFILE_INDEXED_DB }, { token: i1.AuthIndexedDBService }], target: i0.ɵɵFactoryTarget.Component });
EmployeeProfilePersonalInformationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeProfilePersonalInformationComponent, selector: "do-employee-profile-personal-information", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-4 col-lg-4\">\n    <form [formGroup]=\"formGroupImage\">\n      <do-image-upload\n        [radius]=\"50\"\n        [skeleton]=\"loadingForm\"\n        [required]=\"true\"\n        [uploadFn]=\"uploadFinished\"\n        formControlName=\"image\">\n      </do-image-upload>\n      <do-button\n        class=\"upload-bg\"\n        (onSubmit)=\"uploadImage()\"\n        [name]=\"'Upload'\"\n        [formGroupButton]=\"formGroupImage\"\n        [disabledButton]=\"formGroupImage.pristine\"\n        [skeleton]=\"loadingForm\">\n        <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\" buttonicon></nb-icon>\n      </do-button>\n    </form>\n  </div>\n  <div class=\"accordion-container col-md-8 col-lg-8\">\n    <form [formGroup]=\"formGroup\">\n      <do-input-text\n        [name]=\"'name'\"\n        [label]=\"'Name'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"name\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'email'\"\n        [label]=\"'Email'\"\n        [required]=\"true\"\n        [pattern]=\"patternEmail\"\n        [paramError]=\"{value:5}\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"email\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'username'\"\n        [label]=\"'Username'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"username\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'idNumber'\"\n        [label]=\"'ID Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"idNumber\">\n      </do-input-text>\n      <do-select\n        [name]=\"'gender'\"\n        [label]=\"'Gender'\"\n        [required]=\"true\"\n        [api]=\"apiSelectGender\"\n        [queryParam]=\"paramSelectGender\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"gender\">\n      </do-select>\n      <do-input-text\n        [name]=\"'placeOfBirth'\"\n        [label]=\"'Place of Birth'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"placeOfBirth\">\n      </do-input-text>\n      <do-datepicker\n        [name]=\"'dateOfBirth'\"\n        [label]=\"'Date of Birth'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"dateOfBirth\">\n      </do-datepicker>\n      <do-input-text\n        [name]=\"'height'\"\n        [label]=\"'height.body'\"\n        [placeholder]=\"'Centimeter'\"\n        [type]=\"'number'\"\n        [step]=\"'any'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"height\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'weight'\"\n        [label]=\"'weight.body'\"\n        [placeholder]=\"'Kilogram'\"\n        [type]=\"'number'\"\n        [step]=\"'any'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"weight\">\n      </do-input-text>\n      <do-select\n        [name]=\"'bloodType'\"\n        [label]=\"'Blood Type'\"\n        [placeholder]=\"'Blood Type'\"\n        [items]=\"bloodTypeData\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"bloodType\">\n      </do-select>\n      <do-input-text\n        [name]=\"'phoneNumber'\"\n        [label]=\"'Telephone'\"\n        [required]=\"true\"\n        [pattern]=\"patternPhoneNumber\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"phoneNumber\">\n      </do-input-text>\n      <do-textarea\n        [name]=\"'address'\"\n        [label]=\"'Address'\"\n        [required]=\"true\"\n        [minLength]=\"minLength\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"address\">\n      </do-textarea>\n      <do-select\n        [name]=\"'country'\"\n        [label]=\"'Country'\"\n        [api]=\"apiSelectCountry\"\n        [skeleton]=\"loadingForm\"\n        (onSelect)=\"onSelectCountry($event)\"\n        (onClear)=\"onClearCountry()\"\n        formControlName=\"country\">\n      </do-select>\n      <do-select\n        [name]=\"'province'\"\n        [label]=\"'Province'\"\n        [api]=\"apiSelectProvince\"\n        [queryParam]=\"paramSelectProvince\"\n        [skeleton]=\"loadingForm\"\n        (onSelect)=\"onSelectProvince($event)\"\n        (onClear)=\"onClearProvince()\"\n        formControlName=\"province\">\n      </do-select>\n      <do-select\n        [name]=\"'city'\"\n        [label]=\"'City'\"\n        [api]=\"apiSelectCity\"\n        [queryParam]=\"paramSelectCity\"\n        [skeleton]=\"loadingForm\"\n        (onSelect)=\"onSelectCity($event)\"\n        (onClear)=\"onClearCity()\"\n        formControlName=\"city\">\n      </do-select>\n      <do-select\n        [name]=\"'district'\"\n        [label]=\"'District'\"\n        [api]=\"apiSelectDistrict\"\n        [queryParam]=\"paramSelectDistrict\"\n        [skeleton]=\"loadingForm\"\n        (onSelect)=\"onSelectDistrict($event)\"\n        (onClear)=\"onClearDistrict()\"\n        formControlName=\"district\">\n      </do-select>\n      <do-select\n        [name]=\"'subDistrict'\"\n        [label]=\"'Sub District'\"\n        [api]=\"apiSelectSubDistrict\"\n        [queryParam]=\"paramSelectSubDistrict\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"subDistrict\">\n      </do-select>\n      <div class=\"offset-sm-3 col-sm-9\">\n        <do-button\n          (onSubmit)=\"onSubmit()\"\n          [name]=\"'Update'\"\n          [disabledButton]=\"disabled\"\n          [formGroupButton]=\"formGroup\"\n          [skeleton]=\"loadingForm\">\n        </do-button>\n      </div>\n    </form>\n  </div>\n</div>", styles: [".nb-theme-default :host nb-accordion{box-shadow:unset}.nb-theme-default :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-dark :host nb-accordion{box-shadow:unset}.nb-theme-dark :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-cosmic :host nb-accordion{box-shadow:unset}.nb-theme-cosmic :host .upload-bg{display:flex;justify-content:center;align-items:center}.nb-theme-corporate :host nb-accordion{box-shadow:unset}.nb-theme-corporate :host .upload-bg{display:flex;justify-content:center;align-items:center}\n"], components: [{ type: i2.ImageUploadComponent, selector: "do-image-upload", inputs: ["image", "height", "width", "radius", "buttonUpload", "skeleton", "uploadFn"], outputs: ["onPreview"] }, { type: i2.DoButtonComponent, selector: "do-button", inputs: ["formGroupButton", "name", "disabledButton", "type", "status", "size", "skeleton"], outputs: ["onSubmit"] }, { type: i3.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i2.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type"] }, { type: i2.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }, { type: i2.DoDatePickerComponent, selector: "do-datepicker", inputs: ["placeholder", "colLabel", "colInput", "min", "max", "size", "dateMask"] }, { type: i2.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeProfilePersonalInformationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-profile-personal-information',
                    styleUrls: ['./employee-profile-personal-information.component.scss'],
                    templateUrl: './employee-profile-personal-information.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i5.UserService, decorators: [{
                    type: Inject,
                    args: [USER_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PROFILE_INDEXED_DB]
                }] }, { type: i1.AuthIndexedDBService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUtcHJvZmlsZS1wZXJzb25hbC1pbmZvcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9wcm9maWxlL3BhZ2UvcGVyc29uYWwtaW5mb3JtYXRpb24vZW1wbG95ZWUtcHJvZmlsZS1wZXJzb25hbC1pbmZvcm1hdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9wcm9maWxlL3BhZ2UvcGVyc29uYWwtaW5mb3JtYXRpb24vZW1wbG95ZWUtcHJvZmlsZS1wZXJzb25hbC1pbmZvcm1hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBRUwsWUFBWSxFQUNaLE9BQU8sRUFFUCxZQUFZLEVBQ1osa0JBQWtCLEdBR25CLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLGlCQUFpQixFQUF5QyxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0FBUzlGLE1BQU0sT0FBTywyQ0FBNEMsU0FBUSxpQkFBc0I7SUE4Q3JGLFlBQ1MsUUFBa0IsRUFDSyxXQUF3QixFQUNsQixnQkFBeUMsRUFDckUsYUFBbUM7UUFDM0MsS0FBSyxDQUFDLFFBQVEsRUFDWjtZQUNFLFFBQVEsRUFBRSxDQUFDO29CQUNULEtBQUssRUFBRSxJQUFJO29CQUNYLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUM7WUFDRixJQUFJLEVBQUUsRUFBRTtZQUNSLFFBQVEsRUFBRSxFQUFFO1lB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LENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQzs0QkFDekMsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQyxDQUFDO3dCQUNILE1BQU07b0JBQ1IsS0FBSyxZQUFZLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTt3QkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDOzRCQUMvQywyQkFBMkIsRUFBRSxJQUFJO3lCQUNsQyxDQUFDLENBQUM7d0JBQ0gsTUFBTTtvQkFDUixLQUFLLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO3dCQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDOUQsTUFBTTtvQkFDUjt3QkFDRSxNQUFNO2lCQUNUO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNiLENBQUM7O3lJQWxZVSwyQ0FBMkMsMENBZ0Q1QyxZQUFZLGFBQ1osa0JBQWtCOzZIQWpEakIsMkNBQTJDLHVHQ3pCeEQsb21MQWtMTTs0RkR6Sk8sMkNBQTJDO2tCQUx2RCxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQ0FBMEM7b0JBQ3BELFNBQVMsRUFBRSxDQUFDLHdEQUF3RCxDQUFDO29CQUNyRSxXQUFXLEVBQUUsd0RBQXdEO2lCQUN0RTs7MEJBaURJLE1BQU07MkJBQUMsWUFBWTs7MEJBQ25CLE1BQU07MkJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBBcGlCYXNlUmVzcG9uc2UsXG4gIFJlc3BvbnNlQ29kZSxcbiAgUGF0dGVybixcbiAgVXNlclNlcnZpY2UsXG4gIFVTRVJfU0VSVklDRSxcbiAgUFJPRklMRV9JTkRFWEVEX0RCLFxuICBJbmRleGVkREJGYWN0b3J5U2VydmljZSxcbiAgSHR0cEJhc2VNb2RlbCxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCwgU2VsZWN0UGFyYW1Nb2RlbCwgU2VsZWN0UmVzcG9uc2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBBdXRoSW5kZXhlZERCU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWF1dGgnO1xuaW1wb3J0IHsgQ29udGFjdFVzZXJNb2RlbCwgUGVyc29uYWxJbmZvTW9kZWwsIFByb2ZpbGVNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9maWxlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZW1wbG95ZWUtcHJvZmlsZS1wZXJzb25hbC1pbmZvcm1hdGlvbicsXG4gIHN0eWxlVXJsczogWycuL2VtcGxveWVlLXByb2ZpbGUtcGVyc29uYWwtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2VtcGxveWVlLXByb2ZpbGUtcGVyc29uYWwtaW5mb3JtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFbXBsb3llZVByb2ZpbGVQZXJzb25hbEluZm9ybWF0aW9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGZvcm1Hcm91cEltYWdlOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyB1cGxvYWRGaW5pc2hlZDogYm9vbGVhbjtcbiAgcHVibGljIHBhdHRlcm5FbWFpbDogc3RyaW5nID0gUGF0dGVybi5FTUFJTDtcbiAgcHVibGljIHBhdHRlcm5QaG9uZU51bWJlcjogc3RyaW5nID0gUGF0dGVybi5QSE9ORV9OVU1CRVI7XG4gIHB1YmxpYyBwYXR0ZXJuRnVsbG5hbWU6IHN0cmluZyA9IFBhdHRlcm4uRlVMTE5BTUU7XG4gIHB1YmxpYyBtaW5MZW5ndGg6IG51bWJlciA9IDU7XG4gIHB1YmxpYyBkaXNhYmxlZFVwbG9hZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcHJvdmlkZXI6IHN0cmluZyA9ICdsb2NhbCc7XG5cbiAgcHVibGljIGFwaVNlbGVjdEdlbmRlcjogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHBhcmFtU2VsZWN0R2VuZGVyOiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgcHVibGljIGFwaVNlbGVjdENvdW50cnk6IEh0dHBCYXNlTW9kZWw7XG5cbiAgcHVibGljIGFwaVNlbGVjdFByb3ZpbmNlOiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RQcm92aW5jZTogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RDaXR5OiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3RDaXR5OiBTZWxlY3RQYXJhbU1vZGVsW107XG5cbiAgcHVibGljIGFwaVNlbGVjdERpc3RyaWN0OiBIdHRwQmFzZU1vZGVsO1xuICBwdWJsaWMgcGFyYW1TZWxlY3REaXN0cmljdDogU2VsZWN0UGFyYW1Nb2RlbFtdO1xuXG4gIHB1YmxpYyBhcGlTZWxlY3RTdWJEaXN0cmljdDogSHR0cEJhc2VNb2RlbDtcbiAgcHVibGljIHBhcmFtU2VsZWN0U3ViRGlzdHJpY3Q6IFNlbGVjdFBhcmFtTW9kZWxbXTtcblxuICBwdWJsaWMgYmxvb2RUeXBlRGF0YTogU2VsZWN0UmVzcG9uc2VNb2RlbFtdID0gW3tcbiAgICBsYWJlbDogJ0EnLFxuICAgIHZhbHVlOiAnQScsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICB9LCB7XG4gICAgbGFiZWw6ICdCJyxcbiAgICB2YWx1ZTogJ0InLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgfSwge1xuICAgIGxhYmVsOiAnQUInLFxuICAgIHZhbHVlOiAnQUInLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgfSwge1xuICAgIGxhYmVsOiAnTycsXG4gICAgdmFsdWU6ICdPJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gIH1dO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChVU0VSX1NFUlZJQ0UpIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIEBJbmplY3QoUFJPRklMRV9JTkRFWEVEX0RCKSBwcml2YXRlIHByb2ZpbGVJbmRleGVkREI6IEluZGV4ZWREQkZhY3RvcnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aEluZGV4ZWREQjogQXV0aEluZGV4ZWREQlNlcnZpY2UpIHtcbiAgICBzdXBlcihpbmplY3RvcixcbiAgICAgIHtcbiAgICAgICAgdXNlcm5hbWU6IFt7XG4gICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIH1dLFxuICAgICAgICBuYW1lOiBbXSxcbiAgICAgICAgaWROdW1iZXI6IFtdLFxuICAgICAgICBwbGFjZU9mQmlydGg6IFtdLFxuICAgICAgICBkYXRlT2ZCaXJ0aDogW10sXG4gICAgICAgIGdlbmRlcjogW10sXG4gICAgICAgIGhlaWdodDogW10sXG4gICAgICAgIHdlaWdodDogW10sXG4gICAgICAgIGJsb29kVHlwZTogW10sXG4gICAgICAgIGVtYWlsOiBbXSxcbiAgICAgICAgcGhvbmVOdW1iZXI6IFtdLFxuICAgICAgICBhZGRyZXNzOiBbbnVsbCwgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDUpXV0sXG4gICAgICAgIGNvdW50cnk6IFtdLFxuICAgICAgICBwcm92aW5jZTogW10sXG4gICAgICAgIGNpdHk6IFtdLFxuICAgICAgICBkaXN0cmljdDogW10sXG4gICAgICAgIHN1YkRpc3RyaWN0OiBbXSxcbiAgICAgIH0pO1xuICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGltYWdlOiBbXSxcbiAgICB9KTtcbiAgICB0aGlzLmFwaVNlbGVjdEdlbmRlciA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LXBhcmFtZXRlciddO1xuICAgIHRoaXMuYXBpU2VsZWN0Q291bnRyeSA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LWNvdW50cnknXTtcbiAgICB0aGlzLmFwaVNlbGVjdFByb3ZpbmNlID0gdGhpcy5hcGlbJ21hc3RlciddWydzZWxlY3QtcHJvdmluY2UnXTtcbiAgICB0aGlzLmFwaVNlbGVjdENpdHkgPSB0aGlzLmFwaVsnbWFzdGVyJ11bJ3NlbGVjdC1jaXR5J107XG4gICAgdGhpcy5hcGlTZWxlY3REaXN0cmljdCA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LWRpc3RyaWN0J107XG4gICAgdGhpcy5hcGlTZWxlY3RTdWJEaXN0cmljdCA9IHRoaXMuYXBpWydtYXN0ZXInXVsnc2VsZWN0LXN1YmRpc3RyaWN0J107XG4gICAgdGhpcy5hdXRoSW5kZXhlZERCLmdldEVuYygncHJvdmlkZXInKS50aGVuKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodmFsdWUgIT09ICdsb2NhbCcpIHtcbiAgICAgICAgdGhpcy5wcm92aWRlciA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1haWwnXS5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5wcm9maWxlSW5kZXhlZERCLmdldCgnaW1hZ2UtYmFzZTY0JykudGhlbigoaW1hZ2U6IGFueSkgPT4ge1xuICAgICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5nZXQoJ2ltYWdlJykuc2V0VmFsdWUoaW1hZ2UpO1xuICAgICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5tYXJrQXNQZW5kaW5nKCk7XG4gICAgfSk7XG4gICAgdGhpcy5wYXJhbVNlbGVjdEdlbmRlciA9IFt7XG4gICAgICBrZXk6ICdwYXJhbWV0ZXJHcm91cENvZGUnLFxuICAgICAgdmFsdWU6ICdHRU5ERVInLFxuICAgIH1dO1xuICAgIHRoaXMucGFyYW1TZWxlY3RQcm92aW5jZSA9IFt7XG4gICAgICBrZXk6ICdjb3VudHJ5JyxcbiAgICAgIHZhbHVlOiAndW5kZWZpbmVkJyxcbiAgICB9XTtcbiAgICB0aGlzLnBhcmFtU2VsZWN0Q2l0eSA9IFt7XG4gICAgICBrZXk6ICdwcm92aW5jZScsXG4gICAgICB2YWx1ZTogJ3VuZGVmaW5lZCcsXG4gICAgfV07XG4gICAgdGhpcy5wYXJhbVNlbGVjdERpc3RyaWN0ID0gW3tcbiAgICAgIGtleTogJ2NpdHknLFxuICAgICAgdmFsdWU6ICd1bmRlZmluZWQnLFxuICAgIH1dO1xuICAgIHRoaXMucGFyYW1TZWxlY3RTdWJEaXN0cmljdCA9IFt7XG4gICAgICBrZXk6ICdkaXN0cmljdCcsXG4gICAgICB2YWx1ZTogJ3VuZGVmaW5lZCcsXG4gICAgfV07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGxvYWREYXRhTWVudSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMubG9hZGluZ0Zvcm0gPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmV4ZWMoJ3Byb2ZpbGUnLCAnZ2V0LXByb2ZpbGUnKVxuICAgICAgLnBpcGUobWFwKFxuICAgICAgICAoc3VjY2VzczogUHJvZmlsZU1vZGVsKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWyduYW1lJ10uc2V0VmFsdWUoc3VjY2Vzcy5uYW1lKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sndXNlcm5hbWUnXS5zZXRWYWx1ZShzdWNjZXNzLnVzZXJuYW1lKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1haWwnXS5zZXRWYWx1ZShzdWNjZXNzLmVtYWlsKTtcbiAgICAgICAgICBpZiAoc3VjY2Vzcz8ucGVyc29uYWxJbmZvKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snaWROdW1iZXInXS5zZXRWYWx1ZShzdWNjZXNzPy5wZXJzb25hbEluZm8/LmlkTnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzPy5wZXJzb25hbEluZm8/LmdlbmRlckNvZGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2dlbmRlciddLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzcz8ucGVyc29uYWxJbmZvLmdlbmRlclZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzPy5wZXJzb25hbEluZm8uZ2VuZGVyQ29kZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydwbGFjZU9mQmlydGgnXS5zZXRWYWx1ZShzdWNjZXNzPy5wZXJzb25hbEluZm8/LnBsYWNlT2ZCaXJ0aCk7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcz8ucGVyc29uYWxJbmZvPy5kYXRlT2ZCaXJ0aCkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZGF0ZU9mQmlydGgnXS5zZXRWYWx1ZShzdWNjZXNzPy5wZXJzb25hbEluZm8/LmRhdGVPZkJpcnRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydoZWlnaHQnXS5zZXRWYWx1ZShzdWNjZXNzPy5wZXJzb25hbEluZm8/LmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snd2VpZ2h0J10uc2V0VmFsdWUoc3VjY2Vzcz8ucGVyc29uYWxJbmZvPy53ZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2Jsb29kVHlwZSddLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3M/LnBlcnNvbmFsSW5mbz8uYmxvb2RUeXBlLFxuICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzcz8ucGVyc29uYWxJbmZvPy5ibG9vZFR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN1Y2Nlc3M/LmNvbnRhY3QpIHtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzPy5jb250YWN0Py5hZGRyZXNzKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydhZGRyZXNzJ10uc2V0VmFsdWUoc3VjY2Vzcz8uY29udGFjdD8uYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcz8uY29udGFjdD8ucGhvbmVOdW1iZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bob25lTnVtYmVyJ10uc2V0VmFsdWUoc3VjY2Vzcz8uY29udGFjdD8ucGhvbmVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3M/LmNvbnRhY3Q/LmNvdW50cnkpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2NvdW50cnknXS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHN1Y2Nlc3M/LmNvbnRhY3Q/LmNvdW50cnksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3M/LmNvbnRhY3Q/LmNvdW50cnlDb2RlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLnBhcmFtU2VsZWN0UHJvdmluY2UgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnY291bnRyeScsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzcz8uY29udGFjdD8uY291bnRyeUNvZGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWNjZXNzPy5jb250YWN0Py5wcm92aW5jZSkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncHJvdmluY2UnXS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHN1Y2Nlc3M/LmNvbnRhY3Q/LnByb3ZpbmNlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzPy5jb250YWN0Py5wcm92aW5jZUNvZGVcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMucGFyYW1TZWxlY3RDaXR5ID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ3Byb3ZpbmNlJyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzPy5jb250YWN0Py5wcm92aW5jZUNvZGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWNjZXNzPy5jb250YWN0Py5jaXR5KSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydjaXR5J10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzPy5jb250YWN0Py5jaXR5LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBzdWNjZXNzPy5jb250YWN0Py5jaXR5Q29kZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5wYXJhbVNlbGVjdERpc3RyaWN0ID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogJ2NpdHknLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3M/LmNvbnRhY3Q/LmNpdHlDb2RlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcz8uY29udGFjdD8uZGlzdHJpY3QpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2Rpc3RyaWN0J10uc2V0VmFsdWUoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBzdWNjZXNzPy5jb250YWN0Py5kaXN0cmljdCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3VjY2Vzcz8uY29udGFjdD8uZGlzdHJpY3RDb2RlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLnBhcmFtU2VsZWN0U3ViRGlzdHJpY3QgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiAnZGlzdHJpY3QnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3M/LmNvbnRhY3Q/LmRpc3RyaWN0Q29kZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3M/LmNvbnRhY3Q/LnN1YkRpc3RyaWN0KSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydzdWJEaXN0cmljdCddLnNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogc3VjY2Vzcz8uY29udGFjdD8uc3ViRGlzdHJpY3QsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN1Y2Nlc3M/LmNvbnRhY3Q/LnN1YkRpc3RyaWN0Q29kZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hdXRoSW5kZXhlZERCLmdldEVuYygncHJvdmlkZXInKS50aGVuKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICdsb2NhbCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm92aWRlciA9IHZhbHVlO1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1haWwnXS5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgfSwpKTtcbiAgfVxuXG4gIG9uU2VsZWN0Q291bnRyeShzZWxlY3Q6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1TZWxlY3RQcm92aW5jZSA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY291bnRyeScsXG4gICAgICAgIHZhbHVlOiBzZWxlY3QgPyBzZWxlY3QudmFsdWUgOiAndW5kZWZpbmVkJyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICB0aGlzLm9uQ2xlYXJQcm92aW5jZSgpO1xuICB9XG4gIG9uU2VsZWN0UHJvdmluY2Uoc2VsZWN0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtU2VsZWN0Q2l0eSA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncHJvdmluY2UnLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ID8gc2VsZWN0LnZhbHVlIDogJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5vbkNsZWFyUHJvdmluY2UoKTtcbiAgfVxuICBvblNlbGVjdENpdHkoc2VsZWN0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtU2VsZWN0RGlzdHJpY3QgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ2NpdHknLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ID8gc2VsZWN0LnZhbHVlIDogJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgdGhpcy5vbkNsZWFyQ2l0eSgpO1xuICB9XG4gIG9uU2VsZWN0RGlzdHJpY3Qoc2VsZWN0OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtU2VsZWN0U3ViRGlzdHJpY3QgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ2Rpc3RyaWN0JyxcbiAgICAgICAgdmFsdWU6IHNlbGVjdCA/IHNlbGVjdC52YWx1ZSA6ICd1bmRlZmluZWQnLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHRoaXMub25DbGVhckRpc3RyaWN0KCk7XG4gIH1cblxuICBvbkNsZWFyQ291bnRyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcbiAgICAgIHByb3ZpbmNlOiBudWxsLFxuICAgICAgY2l0eTogbnVsbCxcbiAgICAgIGRpc3RyaWN0OiBudWxsLFxuICAgICAgc3ViRGlzdHJpY3Q6IG51bGwsXG4gICAgfSk7XG4gIH1cbiAgb25DbGVhclByb3ZpbmNlKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xuICAgICAgY2l0eTogbnVsbCxcbiAgICAgIGRpc3RyaWN0OiBudWxsLFxuICAgICAgc3ViRGlzdHJpY3Q6IG51bGwsXG4gICAgfSk7XG4gIH1cbiAgb25DbGVhckNpdHkoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XG4gICAgICBkaXN0cmljdDogbnVsbCxcbiAgICAgIHN1YkRpc3RyaWN0OiBudWxsLFxuICAgIH0pO1xuICB9XG4gIG9uQ2xlYXJEaXN0cmljdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcbiAgICAgIHN1YkRpc3RyaWN0OiBudWxsLFxuICAgIH0pO1xuICB9XG5cbiAgdXBsb2FkSW1hZ2UoKSB7XG4gICAgY29uc3QgZmlsZTogYW55ID0gdGhpcy5mb3JtR3JvdXBJbWFnZS5nZXQoJ2ltYWdlJykudmFsdWU7XG4gICAgY29uc3QgZGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBkYXRhLmFwcGVuZCgncGhvdG8nLCBmaWxlKTtcbiAgICB0aGlzLmZvcm1Hcm91cEltYWdlLmdldCgnaW1hZ2UnKS5kaXNhYmxlKCk7XG4gICAgdGhpcy5pbml0UHJvZ3Jlc3MoKTtcbiAgICB0aGlzLnNldFByb2dyZXNzKDY1KTtcbiAgICB0aGlzLmV4ZWMoJ3Byb2ZpbGUnLCAndXBsb2FkLXBob3RvLXByb2ZpbGUnLCBkYXRhKS5zdWJzY3JpYmUoXG4gICAgICAgIChzdWNjZXNzOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFByb2dyZXNzKDk1KTtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZVBob3RvKHN1Y2Nlc3MucmVzcFN0YXR1c01lc3NhZ2VbJ2NoZWNrc3VtJ10pO1xuICAgICAgICAgIHRoaXMudXBsb2FkRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwSW1hZ2UubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihzdWNjZXNzLnJlc3BTdGF0dXNNZXNzYWdlW3N1Y2Nlc3MucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnc3VjY2VzcycpO1xuICAgICAgICAgIHRoaXMuZG9uZVByb2dyZXNzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXBJbWFnZS5nZXQoJ2ltYWdlJykuZW5hYmxlKCk7XG4gICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4oZXJyb3IucmVzcFN0YXR1c01lc3NhZ2VbZXJyb3IucmVzcFN0YXR1c0NvZGVdLCB0cnVlLCBudWxsLCAnZGFuZ2VyJyk7XG4gICAgICAgICAgdGhpcy5kb25lUHJvZ3Jlc3MoKTtcbiAgICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgdmFsdWVTZWxlY3QocHJvcDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlLmxhYmVsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQocHJvcCkudmFsdWUubGFiZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YWx1ZVNlbGVjdE5vbkxhYmVsKHByb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmdldChwcm9wKS52YWx1ZS52YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KHByb3ApLnZhbHVlLnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGNvbnRhY3Q6IENvbnRhY3RVc2VyTW9kZWwgPSB7XG4gICAgICBwaG9uZU51bWJlcjogdGhpcy5mb3JtR3JvdXAuZ2V0KCdwaG9uZU51bWJlcicpLnZhbHVlLFxuICAgICAgYWRkcmVzczogdGhpcy5mb3JtR3JvdXAuZ2V0KCdhZGRyZXNzJykudmFsdWUsXG4gICAgICBjb3VudHJ5OiB0aGlzLnZhbHVlU2VsZWN0KCdjb3VudHJ5JyksXG4gICAgICBjb3VudHJ5Q29kZTogdGhpcy52YWx1ZVNlbGVjdE5vbkxhYmVsKCdjb3VudHJ5JyksXG4gICAgICBwcm92aW5jZTogdGhpcy52YWx1ZVNlbGVjdCgncHJvdmluY2UnKSxcbiAgICAgIHByb3ZpbmNlQ29kZTogdGhpcy52YWx1ZVNlbGVjdE5vbkxhYmVsKCdwcm92aW5jZScpLFxuICAgICAgY2l0eTogdGhpcy52YWx1ZVNlbGVjdCgnY2l0eScpLFxuICAgICAgY2l0eUNvZGU6IHRoaXMudmFsdWVTZWxlY3ROb25MYWJlbCgnY2l0eScpLFxuICAgICAgZGlzdHJpY3Q6IHRoaXMudmFsdWVTZWxlY3QoJ2Rpc3RyaWN0JyksXG4gICAgICBkaXN0cmljdENvZGU6IHRoaXMudmFsdWVTZWxlY3ROb25MYWJlbCgnZGlzdHJpY3QnKSxcbiAgICAgIHN1YkRpc3RyaWN0OiB0aGlzLnZhbHVlU2VsZWN0KCdzdWJEaXN0cmljdCcpLFxuICAgICAgc3ViRGlzdHJpY3RDb2RlOiB0aGlzLnZhbHVlU2VsZWN0Tm9uTGFiZWwoJ3N1YkRpc3RyaWN0JyksXG4gICAgfTtcbiAgICBjb25zdCBwZXJzb25hbEluZm86IFBlcnNvbmFsSW5mb01vZGVsID0ge1xuICAgICAgaWROdW1iZXI6IHRoaXMuZm9ybUdyb3VwLmdldCgnaWROdW1iZXInKS52YWx1ZSxcbiAgICAgIHBsYWNlT2ZCaXJ0aDogdGhpcy5mb3JtR3JvdXAuZ2V0KCdwbGFjZU9mQmlydGgnKS52YWx1ZSxcbiAgICAgIGRhdGVPZkJpcnRoOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2RhdGVPZkJpcnRoJykudmFsdWUsXG4gICAgICBnZW5kZXJDb2RlOiB0aGlzLnZhbHVlU2VsZWN0Tm9uTGFiZWwoJ2dlbmRlcicpLFxuICAgICAgZ2VuZGVyVmFsdWU6IHRoaXMudmFsdWVTZWxlY3QoJ2dlbmRlcicpLFxuICAgICAgaGVpZ2h0OiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2hlaWdodCcpLnZhbHVlLFxuICAgICAgd2VpZ2h0OiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3dlaWdodCcpLnZhbHVlLFxuICAgICAgYmxvb2RUeXBlOiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2Jsb29kVHlwZScpLnZhbHVlPy52YWx1ZSxcbiAgICB9O1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgIG5hbWU6IHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpLnZhbHVlLFxuICAgICAgY29udGFjdCxcbiAgICAgIHBlcnNvbmFsSW5mbyxcbiAgICB9O1xuICAgIGlmICh0aGlzLnByb3ZpZGVyID09PSAnbG9jYWwnKSB7XG4gICAgICBkYXRhWydlbWFpbCddID0gdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLnZhbHVlO1xuICAgIH1cbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3Byb2ZpbGUnLCAnY2hhbmdlLXByb2ZpbGUnKSBhcyBPYnNlcnZhYmxlPEFwaUJhc2VSZXNwb25zZT4pXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb2RlLkVSUl9TQ1IwMDA4LnRvU3RyaW5nKCk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydlbWFpbCddLnNldEVycm9ycyh7XG4gICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgUmVzcG9uc2VDb2RlLkVSUl9TQ1IwMDA3QS50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGhvbmVOdW1iZXInXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICAgICdlcnJvci5wYXR0ZXJuLnBob25lTnVtYmVyJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuT0tfU0NSMDA0LnRvU3RyaW5nKCk6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlTmFtZSh0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtbGctNFwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwSW1hZ2VcIj5cbiAgICAgIDxkby1pbWFnZS11cGxvYWRcbiAgICAgICAgW3JhZGl1c109XCI1MFwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgW3VwbG9hZEZuXT1cInVwbG9hZEZpbmlzaGVkXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiaW1hZ2VcIj5cbiAgICAgIDwvZG8taW1hZ2UtdXBsb2FkPlxuICAgICAgPGRvLWJ1dHRvblxuICAgICAgICBjbGFzcz1cInVwbG9hZC1iZ1wiXG4gICAgICAgIChvblN1Ym1pdCk9XCJ1cGxvYWRJbWFnZSgpXCJcbiAgICAgICAgW25hbWVdPVwiJ1VwbG9hZCdcIlxuICAgICAgICBbZm9ybUdyb3VwQnV0dG9uXT1cImZvcm1Hcm91cEltYWdlXCJcbiAgICAgICAgW2Rpc2FibGVkQnV0dG9uXT1cImZvcm1Hcm91cEltYWdlLnByaXN0aW5lXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCI+XG4gICAgICAgIDxuYi1pY29uIGNsYXNzPVwidXBsb2FkLWljb25cIiBpY29uPVwiY2xvdWQtdXBsb2FkLW91dGxpbmVcIiBwYWNrPVwiZXZhXCIgYnV0dG9uaWNvbj48L25iLWljb24+XG4gICAgICA8L2RvLWJ1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWNvbnRhaW5lciBjb2wtbWQtOCBjb2wtbGctOFwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCInbmFtZSdcIlxuICAgICAgICBbbGFiZWxdPVwiJ05hbWUnXCJcbiAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XG4gICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCInZW1haWwnXCJcbiAgICAgICAgW2xhYmVsXT1cIidFbWFpbCdcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtwYXR0ZXJuXT1cInBhdHRlcm5FbWFpbFwiXG4gICAgICAgIFtwYXJhbUVycm9yXT1cInt2YWx1ZTo1fVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCI+XG4gICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCIndXNlcm5hbWUnXCJcbiAgICAgICAgW2xhYmVsXT1cIidVc2VybmFtZSdcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInVzZXJuYW1lXCI+XG4gICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCInaWROdW1iZXInXCJcbiAgICAgICAgW2xhYmVsXT1cIidJRCBOdW1iZXInXCJcbiAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJpZE51bWJlclwiPlxuICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgPGRvLXNlbGVjdFxuICAgICAgICBbbmFtZV09XCInZ2VuZGVyJ1wiXG4gICAgICAgIFtsYWJlbF09XCInR2VuZGVyJ1wiXG4gICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgW2FwaV09XCJhcGlTZWxlY3RHZW5kZXJcIlxuICAgICAgICBbcXVlcnlQYXJhbV09XCJwYXJhbVNlbGVjdEdlbmRlclwiXG4gICAgICAgIFtzZWFyY2hhYmxlXT1cImZhbHNlXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZ2VuZGVyXCI+XG4gICAgICA8L2RvLXNlbGVjdD5cbiAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgIFtuYW1lXT1cIidwbGFjZU9mQmlydGgnXCJcbiAgICAgICAgW2xhYmVsXT1cIidQbGFjZSBvZiBCaXJ0aCdcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBsYWNlT2ZCaXJ0aFwiPlxuICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgPGRvLWRhdGVwaWNrZXJcbiAgICAgICAgW25hbWVdPVwiJ2RhdGVPZkJpcnRoJ1wiXG4gICAgICAgIFtsYWJlbF09XCInRGF0ZSBvZiBCaXJ0aCdcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImRhdGVPZkJpcnRoXCI+XG4gICAgICA8L2RvLWRhdGVwaWNrZXI+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCInaGVpZ2h0J1wiXG4gICAgICAgIFtsYWJlbF09XCInaGVpZ2h0LmJvZHknXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidDZW50aW1ldGVyJ1wiXG4gICAgICAgIFt0eXBlXT1cIidudW1iZXInXCJcbiAgICAgICAgW3N0ZXBdPVwiJ2FueSdcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJoZWlnaHRcIj5cbiAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgIFtuYW1lXT1cIid3ZWlnaHQnXCJcbiAgICAgICAgW2xhYmVsXT1cIid3ZWlnaHQuYm9keSdcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ0tpbG9ncmFtJ1wiXG4gICAgICAgIFt0eXBlXT1cIidudW1iZXInXCJcbiAgICAgICAgW3N0ZXBdPVwiJ2FueSdcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ3ZWlnaHRcIj5cbiAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgIDxkby1zZWxlY3RcbiAgICAgICAgW25hbWVdPVwiJ2Jsb29kVHlwZSdcIlxuICAgICAgICBbbGFiZWxdPVwiJ0Jsb29kIFR5cGUnXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidCbG9vZCBUeXBlJ1wiXG4gICAgICAgIFtpdGVtc109XCJibG9vZFR5cGVEYXRhXCJcbiAgICAgICAgW3NlYXJjaGFibGVdPVwiZmFsc2VcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJibG9vZFR5cGVcIj5cbiAgICAgIDwvZG8tc2VsZWN0PlxuICAgICAgPGRvLWlucHV0LXRleHRcbiAgICAgICAgW25hbWVdPVwiJ3Bob25lTnVtYmVyJ1wiXG4gICAgICAgIFtsYWJlbF09XCInVGVsZXBob25lJ1wiXG4gICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgW3BhdHRlcm5dPVwicGF0dGVyblBob25lTnVtYmVyXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGhvbmVOdW1iZXJcIj5cbiAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgIDxkby10ZXh0YXJlYVxuICAgICAgICBbbmFtZV09XCInYWRkcmVzcydcIlxuICAgICAgICBbbGFiZWxdPVwiJ0FkZHJlc3MnXCJcbiAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICBbbWluTGVuZ3RoXT1cIm1pbkxlbmd0aFwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImFkZHJlc3NcIj5cbiAgICAgIDwvZG8tdGV4dGFyZWE+XG4gICAgICA8ZG8tc2VsZWN0XG4gICAgICAgIFtuYW1lXT1cIidjb3VudHJ5J1wiXG4gICAgICAgIFtsYWJlbF09XCInQ291bnRyeSdcIlxuICAgICAgICBbYXBpXT1cImFwaVNlbGVjdENvdW50cnlcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICAob25TZWxlY3QpPVwib25TZWxlY3RDb3VudHJ5KCRldmVudClcIlxuICAgICAgICAob25DbGVhcik9XCJvbkNsZWFyQ291bnRyeSgpXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY291bnRyeVwiPlxuICAgICAgPC9kby1zZWxlY3Q+XG4gICAgICA8ZG8tc2VsZWN0XG4gICAgICAgIFtuYW1lXT1cIidwcm92aW5jZSdcIlxuICAgICAgICBbbGFiZWxdPVwiJ1Byb3ZpbmNlJ1wiXG4gICAgICAgIFthcGldPVwiYXBpU2VsZWN0UHJvdmluY2VcIlxuICAgICAgICBbcXVlcnlQYXJhbV09XCJwYXJhbVNlbGVjdFByb3ZpbmNlXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgKG9uU2VsZWN0KT1cIm9uU2VsZWN0UHJvdmluY2UoJGV2ZW50KVwiXG4gICAgICAgIChvbkNsZWFyKT1cIm9uQ2xlYXJQcm92aW5jZSgpXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicHJvdmluY2VcIj5cbiAgICAgIDwvZG8tc2VsZWN0PlxuICAgICAgPGRvLXNlbGVjdFxuICAgICAgICBbbmFtZV09XCInY2l0eSdcIlxuICAgICAgICBbbGFiZWxdPVwiJ0NpdHknXCJcbiAgICAgICAgW2FwaV09XCJhcGlTZWxlY3RDaXR5XCJcbiAgICAgICAgW3F1ZXJ5UGFyYW1dPVwicGFyYW1TZWxlY3RDaXR5XCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgKG9uU2VsZWN0KT1cIm9uU2VsZWN0Q2l0eSgkZXZlbnQpXCJcbiAgICAgICAgKG9uQ2xlYXIpPVwib25DbGVhckNpdHkoKVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImNpdHlcIj5cbiAgICAgIDwvZG8tc2VsZWN0PlxuICAgICAgPGRvLXNlbGVjdFxuICAgICAgICBbbmFtZV09XCInZGlzdHJpY3QnXCJcbiAgICAgICAgW2xhYmVsXT1cIidEaXN0cmljdCdcIlxuICAgICAgICBbYXBpXT1cImFwaVNlbGVjdERpc3RyaWN0XCJcbiAgICAgICAgW3F1ZXJ5UGFyYW1dPVwicGFyYW1TZWxlY3REaXN0cmljdFwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIChvblNlbGVjdCk9XCJvblNlbGVjdERpc3RyaWN0KCRldmVudClcIlxuICAgICAgICAob25DbGVhcik9XCJvbkNsZWFyRGlzdHJpY3QoKVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImRpc3RyaWN0XCI+XG4gICAgICA8L2RvLXNlbGVjdD5cbiAgICAgIDxkby1zZWxlY3RcbiAgICAgICAgW25hbWVdPVwiJ3N1YkRpc3RyaWN0J1wiXG4gICAgICAgIFtsYWJlbF09XCInU3ViIERpc3RyaWN0J1wiXG4gICAgICAgIFthcGldPVwiYXBpU2VsZWN0U3ViRGlzdHJpY3RcIlxuICAgICAgICBbcXVlcnlQYXJhbV09XCJwYXJhbVNlbGVjdFN1YkRpc3RyaWN0XCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic3ViRGlzdHJpY3RcIj5cbiAgICAgIDwvZG8tc2VsZWN0PlxuICAgICAgPGRpdiBjbGFzcz1cIm9mZnNldC1zbS0zIGNvbC1zbS05XCI+XG4gICAgICAgIDxkby1idXR0b25cbiAgICAgICAgICAob25TdWJtaXQpPVwib25TdWJtaXQoKVwiXG4gICAgICAgICAgW25hbWVdPVwiJ1VwZGF0ZSdcIlxuICAgICAgICAgIFtkaXNhYmxlZEJ1dHRvbl09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgW2Zvcm1Hcm91cEJ1dHRvbl09XCJmb3JtR3JvdXBcIlxuICAgICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiPlxuICAgICAgICA8L2RvLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L2Rpdj4iXX0=