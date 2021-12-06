export class RoleModel {
    authority: string;
    description?: string;
    group?: SystemAuthority;
}

export class SystemAuthority {
    code: string;
    name: string;
}
