export class RoleModel {
    authority: string;
    description?: string;
    group?: GroupModel;
}

export class GroupModel {
    code: string;
    name: string;
}
