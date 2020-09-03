import { NgModule } from '@angular/core';
// Angular imports
import { CommonModule } from '@angular/common';

// Service imports
import { CanActivateAuthenticated } from './guards/authenticated';
import { ApiModule } from '@services/api/api.module';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApiModule
  ],
  providers: [
    CanActivateAuthenticated,
    AuthService
  ]
})
export class AuthModule { }
