import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import {WeatherService} from './services/weather.service';
import {LoginService} from './services/login.service';
import {AlertService} from './services/alert.service';
import { AppRoutes } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { AuthGuard } from './_guards/index';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    UserComponent,
    AppComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [WeatherService, LoginService, AuthGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
