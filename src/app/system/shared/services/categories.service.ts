import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable";


import {BaseApi} from "../../../shared/core/base-api";
import {Category} from "../models/category.model";
import {AuthService} from "../../../shared/services/auth.service";
import {UrlService} from "../../../shared/services/url.service";


@Injectable()
export class CategoriesService  extends BaseApi {
    constructor(private urlService: UrlService, private authService: AuthService, public http: Http) {
        super(http);
    }

    getCategoryById(id: number): Observable<Category> {
        return this.get(`categories/${id}`);
    }

    updateCategory(category: Category): Observable<Category>{
       return this.put(`categories/${category.id}`, category);
    }

    // getCategories(): Observable<Category[]> {
    //     return this.get('categories');
    // }

    getCategories(): Observable<any> {
        const token = this.authService.getToken();
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get(this.urlService.getRestUrl('categories') + '?token=' + token, {headers: headers})
            .map((response: Response) => response.json());
    }

    addCategory(category: Category): Observable<Category> {
        const token = this.authService.getToken();
        const body = JSON.stringify( category);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http.post(this.urlService.getRestUrl('categories') + '?token=' + token, body, options)
            .map((response: Response) => response.json());
    }
}