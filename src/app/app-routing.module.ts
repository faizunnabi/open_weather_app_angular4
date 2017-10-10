import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { UserComponent } from '../app/user/user.component';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',  component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'login', component: UserComponent},
  { path: '**', redirectTo: '' }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
