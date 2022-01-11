type TUser = {
    id: number;
    token: string;
}

export class User {
    id: number;
    token: string;

    constructor(user: TUser) {
        this.id = user.id;
        this.token = user.token;
    }
}
