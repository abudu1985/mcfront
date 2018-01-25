export class ResetForm {
    constructor(
        public password: string,
        public password_confirmation?: string,
        public reset_token_code?: string
    ){}
}