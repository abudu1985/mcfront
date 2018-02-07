import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {BaseApi} from "../../../shared/core/base-api";
import {AdvertsModel} from "../models/adverts.model";
import {UrlService} from "../../../shared/services/url.service";
import {AuthService} from "../../../shared/services/auth.service";

@Injectable()
export class AdvertsSqlService extends BaseApi{
    constructor(public http: Http, private urlService: UrlService, private authService: AuthService) {
       super(http);
    }
    createNewAdvert(advert: AdvertsModel): Observable<AdvertsModel> {
        const token = this.authService.getToken();
        const body = JSON.stringify( advert);
        console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http.post(this.urlService.getRestUrl('adverts') + '?token=' + token, body, options)
            .map((response: Response) => response.json());
    }
}