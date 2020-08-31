import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginComponent as LoginFormComponent } from './auth/forms/login/login.component';
import { LoginComponent as LoginPageComponent } from '@pages/login/login.component';
import { LegacyComponent } from '@pages/legacy/legacy.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiModule } from '@services/api/api.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    LegacyComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
