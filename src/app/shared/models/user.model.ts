export class User {
    constructor(
        public  email: string,
        public password: string,
        public  name: string,
        public password_confirmation?: string,
        public id?: number

    ){}
}