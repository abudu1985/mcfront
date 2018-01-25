import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {UsersService} from "../../shared/services/users.service";

@Component({
  selector: 'gosh-recover-email',
  templateUrl: './recover-email.component.html',
  styleUrls: ['./recover-email.component.scss']
})
export class RecoverEmailComponent implements OnInit {
  form: FormGroup;

  constructor(private  usersService: UsersService) { }

  ngOnInit() {
    this.form = new FormGroup ({
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    const formData = this.form.value;

    this.usersService.resetpass(formData.email)
        .subscribe((response) => {
      console.log(response);
              // this.authService.login();
              // this.router.navigate(['/system', 'bill']);
              // localStorage.setItem('token', tokenData.token);
              // localStorage.setItem('user_name', tokenData.user_name)
            }
            // tokenData => console.log(tokenData),
            // error => console.log(error),
        );
  }

}
