import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "../../shared/models/user.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UsersService} from "../../shared/services/users.service";
import {ResetForm} from "../../shared/models/resetform.model";
import {Response} from "@angular/http";

@Component({
  selector: 'gosh-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

  form: FormGroup;
  reset_code: string;

  constructor(private route: ActivatedRoute,
              private  usersService: UsersService,
              private router: Router,) { }

  ngOnInit() {
    this.form = new FormGroup({
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'password_confirmation': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
    this.route.queryParams
        .subscribe((params: Params) => {
              if (params['reset_pass']) {
              this.reset_code = params['reset_pass'];
              }
            }
        );
  }

  onSubmit() {
    const {password, password_confirmation} = this.form.value;
    const reset_token_code = this.reset_code;
    const resetForm = new ResetForm(password, password_confirmation, reset_token_code);

    this.usersService.resetUserPassword(resetForm)
        .subscribe((resetForm: ResetForm) => {
          if (resetForm) {
            this.router.navigate(['/login'], {
              queryParams: {
                nowCanLogin: resetForm.password
              }
            });
          }
        });
  }
}