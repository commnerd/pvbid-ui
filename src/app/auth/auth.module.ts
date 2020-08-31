import { NgModule } from '@angular/core';
// Angular imports
import { CommonModule } from '@angular/common';

// Service imports
import { ApiModule } from '@services/api/api.module';
import { LoginService } from './login.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApiModule
  ],
  providers: [
    LoginService
  ]
})
export class AuthModule { }
