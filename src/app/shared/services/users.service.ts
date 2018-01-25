import {Http, Response, Headers} from '@angular/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from '../models/user.model';
import {BaseApi} from "../core/base-api";
import {AuthService} from "./auth.service";
import {UrlService} from "./url.service";
import {ResetForm} from "../models/resetform.model";

@Injectable ()
export class UsersService extends BaseApi{
    constructor (private urlService: UrlService, private authService: AuthService, public  http: Http) {
        super(http);
    }

    getUserByEmail(email: string): Observable<User> {
           return this.get(`users/${email}`)
            .map((user: User[]) => user[0] ? user[0] : undefined);
    }

    createNewUser(user: User): Observable<User> {
        return this.post('users', user);
    }

    resetUserPassword(resetForm: ResetForm): Observable<ResetForm> {
        return this.post('resetpas', resetForm);
    }

    signin(email: string, password: string) {
        return this.http.post('http://localhost/mcback/api/user/signin',
            {email: email, password: password},
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map(
                (response: Response) => {
                    console.log(response);
                    const token = response.json().token;
                    const user_name = response.json().user_name;
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    return {token: token,user_name: user_name, decoded: JSON.parse(window.atob(base64))};
                }
            );
    }

    confirmFromEmail(){
        const token = this.authService.getVerifyToken();
        return this.http.get(this.urlService.getSiteUrl('user/verify/'+ token),
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map((response: Response) => response.json());
    }

    resetpass(email: string){
        return this.http.post('http://localhost/mcback/api/recover',
            { email: email },
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
            .map(
                (response: Response) => {
                    console.log(response);
                    const token = response.json().token;
                    const user_name = response.json().user_name;
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    return {token: token,user_name: user_name, decoded: JSON.parse(window.atob(base64))};
                }
            );
    }


}