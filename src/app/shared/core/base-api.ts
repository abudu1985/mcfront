import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UsersService} from "../services/users.service";
import {AuthService} from "../services/auth.service";
@Injectable()
export class BaseApi {
    private baseRestUrl = 'http://localhost/mcback/api/';

    constructor(public http: Http) {}
    private getRestUrl(url: string = ''): string {
        return this.baseRestUrl + url;
    }

    public  get(url: string = ''): Observable<any> {
        return this.http.get(this.getRestUrl(url))
            .map((response: Response) => response.json());
    }
    public  post(url: string = '', data: any = {}): Observable<any> {
        return this.http.post(this.getRestUrl(url), data)
            .map((response: Response) => response.json());
    }

    public  put(url: string = '', data: any = {}): Observable<any> {
        return this.http.put(this.getRestUrl(url), data)
            .map((response: Response) => response.json());
    }
}