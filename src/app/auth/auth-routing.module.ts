
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {WaitEmailComponent} from "./wait-email/wait-email/wait-email.component";
import {RecoverEmailComponent} from "./recover-email/recover-email.component";
import {ResetPasswordFormComponent} from "./reset-password-form/reset-password-form.component";

const routes: Routes = [
    {path: '', component: AuthComponent, children: [
        {path: 'login', component: LoginComponent},
        {path: 'registration', component: RegistrationComponent},
        {path: 'wait-email', component: WaitEmailComponent},
        {path: 'recover-email', component: RecoverEmailComponent},
        {path: 'reset-password-form', component: ResetPasswordFormComponent}
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export  class AuthRoutingModule {}