import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'Users';
  user = null;

  constructor(private authService: LoginService, private router: Router, private alertService: AlertService) {}

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
        // console.log(res.user.displayName);
        if (res) {
          window.location.reload();
          this.router.navigate(['dashboard']);
          this.alertService.success('Login successfull !');
        }
      })
    .catch((err) => {
      console.log(err);
      this.alertService.error('Unable to login !');
    });
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => {
      if (res) {
        console.log(res);
        // window.location.reload();
        this.router.navigate(['dashboard']);
        this.alertService.success('Login successfull !');
      }
      })
      .catch((err) => {
        console.log(err);
        this.alertService.error('Unable to login !');
      });
  }

  ngOnInit() {}

}
