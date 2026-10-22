import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';
import { loginGuard } from './guards/login-guard';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [

  {
    path: 'login',
    component: Login,
    canActivate: [loginGuard]
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
  path: '**',
    component: NotFound
}
];
