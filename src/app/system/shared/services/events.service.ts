import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {BaseApi} from "../../../shared/core/base-api";
import {GoshEvent} from "../models/event.model";
import {AuthService} from "../../../shared/services/auth.service";
import {UrlService} from "../../../shared/services/url.service";


@Injectable()
export class EventsService extends BaseApi {

    constructor(private urlService: UrlService, private authService: AuthService,public http: Http) {
        super(http);
    }

    // addEvent(event: GoshEvent): Observable<GoshEvent> {
    //     return this.post('events', event);
    // }

    addEvent(event: GoshEvent): Observable<GoshEvent> {
        const token = this.authService.getToken();
        const body = JSON.stringify( event);
        const headers = new Headers();  //({'Content-Type': 'application/json'});
        headers.append('Content-Type', 'application/json');
        const options = new RequestOptions({headers: headers});
        return this.http.post(this.urlService.getRestUrl('events') + '?token=' + token, body, options)
            .map((response: Response) => response.json());
    }

    // getEvents(): Observable<GoshEvent[]> {
    //     return this.get('events');
    // }

    getEvents(): Observable<any> {
        const token = this.authService.getToken();
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get(this.urlService.getRestUrl('events') + '?token=' + token, {headers: headers})
            .map((response: Response) => response.json());
    }


    getEventById(id: string): Observable<GoshEvent> {
        return this.get(`events/${id}`);
    }
}