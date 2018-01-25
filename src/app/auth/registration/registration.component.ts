import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, AbstractControl} from "@angular/forms";
import {Router} from "@angular/router";

import {UsersService} from "../../shared/services/users.service";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'gosh-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  notEquel = false;

  constructor(
      private  usersService: UsersService,
      private router: Router,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(null, [Validators.requiredTrue]),
      'password_confirmation': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
   // this.buildForm();

    // this.form = this.formBuilder.group({
    //   first_name: ['', Validators.required],
    //   last_name: ['', Validators.required],
    //   password: ['', Validators.required],
    //   confirm_password: ['', Validators.required],
    //   referral_code: null
    // }, {
    //   validator: CustomValidators.Match('password', 'confirm_password')
    // });
  }

  confirmPas(control: FormControl): any{
    console.log(control.value);
    console.log(this.form.value.password);
            if(control.value !== this.form.value.password) {
              this.notEquel = true;
            } else {
              this.notEquel = false;
            }

  }

  onSubmit() {
    const {email, password, name, password_confirmation} = this.form.value;
    const user = new User(email, password, name, password_confirmation);

    this.usersService.createNewUser(user)
        .subscribe((user: User) => {
      if(user.name){
        this.router.navigate(['/wait-email'], {
          queryParams: {
            error: user.name
          }
        });
      } else {
        localStorage.setItem('verifyToken', JSON.stringify(user).replace(/^"(.*)"$/, '$1'));
        this.router.navigate(['/wait-email'], {
          queryParams: {
            success: "Для регистрации перейдите по ссылке отправленой на Ваш email"
          }
        });
      }
        });
  }

  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.usersService.getUserByEmail(control.value)
          .subscribe((user:User)=> {
        if (user) {
          resolve({forbiddenEmail: true});
        } else {
          resolve(null);
        }
      });
    });
  }

}
