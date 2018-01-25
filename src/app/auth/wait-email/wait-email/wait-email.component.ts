import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";
import {UsersService} from "../../../shared/services/users.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Message} from "../../../shared/models/message.model";


@Component({
  selector: 'gosh-wait-email',
  templateUrl: './wait-email.component.html',
  styleUrls: ['./wait-email.component.scss']
})
export class WaitEmailComponent implements OnInit {
  message: Message;

  constructor(
      private usersService: UsersService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.route.queryParams
        .subscribe((params: Params) => {
          if (params['error']) {
            // this.showMessage({text: 'Now you can login in system',type: 'success'} );
            this.message = params['error'];
          } else {
            this.message = params['success'];
          }
              localStorage.removeItem('verifyToken');
          }
        );
    // this.usersService.confirmFromEmail()
    //     .subscribe((response) => {
    //       console.log(response);
    //       //this.router.navigate(['/wait-email']);
    //        this.router.navigate(['/login'], {
    //         queryParams: {
    //           nowCanLogin: response
    //         }
    //       });
    //     });
  }

}
