import { Component, OnInit, Input } from '@angular/core';
import { AdvertService } from '../../../shared/services/advert.service'
import {AdvertModel} from "../../../shared/models/advert.model";

@Component({
  selector: 'gosh-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() advertModel: AdvertModel;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  // isOwnMessage: boolean;
  // ownEmail: string;

  constructor() {
  }

  ngOnInit(advert = this.advertModel) {
    this.messageContent = advert.message;
    this.timeStamp = advert.timeSent;
    this.userEmail = advert.email;
    this.userName = advert.userName;
  }
}
