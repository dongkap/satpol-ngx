export class EmployeeHeaderModel {
    id: string;
    username: string;
    fullname: string;
    email: string;
    idNumber: string;
    idEmployee: string;
    phoneNumber: string;
    address: string;
    occupationName: string;
}

export class EmployeePersonalInfoModel extends EmployeeHeaderModel {
    image: string;
    gender: string;
    height: any;
    weight: any;
    bloodType: string;
}
