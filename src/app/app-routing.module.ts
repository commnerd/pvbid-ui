import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegacyRouteComponent } from './legacy-route/legacy-route.component';

const routes: Routes = [
    { path: '**', component: LegacyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
