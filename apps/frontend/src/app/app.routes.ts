import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard-page.component';
import { LoginPageComponent } from './features/auth/pages/login-page.component';
import { RegisterPageComponent } from './features/auth/pages/register-page.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: DashboardPageComponent,
  },
  {
    path: 'auth/login',
    component: LoginPageComponent,
  },
  {
    path: 'auth/register',
    component: RegisterPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
