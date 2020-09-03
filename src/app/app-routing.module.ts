import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuthenticated } from './auth/guards/authenticated';
import { LegacyComponent } from '@pages/legacy/legacy.component';
import { LoginComponent } from '@pages/login/login.component';

const routes: Routes = [
    { path: 'login2', component: LoginComponent },
    { path: '**', component: LegacyComponent, canActivate: [CanActivateAuthenticated] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
