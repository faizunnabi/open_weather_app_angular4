import { Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  user: User;
  userDetail: any;

  constructor(private loginService: LoginService) {}

  ngOnInit() {

    this.userDetail = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.userDetail);
    this.user = new User(this.userDetail.displayName, this.userDetail.email, this.userDetail.photoURL);
  }

  logout() {
    this.loginService.logout();
  }
}
