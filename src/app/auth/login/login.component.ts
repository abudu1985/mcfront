import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router, ActivatedRoute, Params} from "@angular/router";

import {UsersService} from "../../shared/services/users.service";
import {User} from "../../shared/models/user.model";
import {Message} from "../../shared/models/message.model";
import {AuthService} from "../../shared/services/auth.service";
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'gosh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;
  constructor(
      private usersService: UsersService,
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute,
      private cookieService: CookieService
  ) { }

    ngOnInit() {
        this.message = new Message('danger', '');
        this.route.queryParams
            .subscribe((params: Params) => {
                if (params['nowCanLogin']) {
                    this.showMessage({text: 'Теперь Вы можете войти в систему', type: 'success'});
                }
                if (params['reset_pass']) {
                    this.router.navigate(['/reset-password-form'], {
                        queryParams: {
                            reset_pass: params['reset_pass']
                        }
                    });
                }
            });

        this.form = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
        this.cookieService.delete('XSRF-TOKEN');
    }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 14000);
  }
  onSubmit() {
     const formData = this.form.value;

    this.usersService.signin(formData.email, formData.password)
        .subscribe((tokenData) => {
              this.authService.login();
              this.router.navigate(['/system', 'bill']);
              localStorage.setItem('token', tokenData.token);
              localStorage.setItem('user_name', tokenData.user_name)
            }
        );
  }

}
