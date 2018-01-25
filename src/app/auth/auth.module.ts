import {NgModule, OnInit} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { WaitEmailComponent } from './wait-email/wait-email/wait-email.component';
import { RecoverEmailComponent } from './recover-email/recover-email.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
@NgModule({
    declarations: [
        LoginComponent,
        RegistrationComponent,
        AuthComponent,
        WaitEmailComponent,
        RecoverEmailComponent,
        ResetPasswordFormComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ]
})
export  class AuthModule {

}

