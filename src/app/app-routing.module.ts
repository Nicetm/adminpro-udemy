import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { NopagefaoudComponent } from './shared/nopagefaoud/nopagefaoud.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefaoudComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });