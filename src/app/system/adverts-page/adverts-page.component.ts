import { Component, OnInit, OnChanges } from '@angular/core';
import { AdvertService } from '../shared/services/advert.service';
import { Observable } from 'rxjs/Observable';
import { AdvertModel } from '../shared/models/advert.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'gosh-adverts-page',
  templateUrl: './adverts-page.component.html',
  styleUrls: ['./adverts-page.component.scss']
})
export class AdvertsPageComponent implements OnInit, OnChanges {
  feed: FirebaseListObservable<AdvertModel[]>;

  constructor(private advert: AdvertService) { }

  ngOnInit() {
    this.feed = this.advert.getMessages();
  }

  ngOnChanges() {
    this.feed = this.advert.getMessages();
  }

}