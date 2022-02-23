export declare class B2BModel {
    id?: string;
    b2bNonExpired: boolean;
    expiredTime: string;
    businessPartner: BusinessPartnerModel;
}
export declare class BusinessPartnerModel {
    id?: string;
    bpName: string;
    email: string;
    address: string;
    telpNumber: string;
    faxNumber: string;
}
