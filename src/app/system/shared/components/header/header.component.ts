import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'gosh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: string;

  constructor(private  authService: AuthService,
              private router: Router) { }




  ngOnInit() {
    this.user = this.authService.getUserName();
    if(!this.user){
      this.router.navigate(['/login']);
    }
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
