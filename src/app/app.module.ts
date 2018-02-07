import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';

import {HttpModule} from '@angular/http';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {UsersService} from "./shared/services/users.service";
import {AuthService} from "./shared/services/auth.service";
import {SystemModule} from './system/system.module';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AuthModule,
        AppRoutingModule,
        SystemModule,
        BrowserAnimationsModule
    ],
    providers: [UsersService, AuthService, CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
