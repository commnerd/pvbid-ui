// Angular imports
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Project imports
import { LoginResponse, LoginStatus, UserResponse } from '../../interfaces/login.interfaces';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;

  constructor(
      private authService: AuthService,
      private fb: FormBuilder,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  onSubmit(value) {
    let loginProcess = this.authService.login(value.email, value.password).subscribe((response : LoginResponse) : void => {
        if(response.status === LoginStatus.SUCCESS) {
            this.authService.setAuthTokens(response);
            this.setAuthenticatedUser();
        }
        loginProcess.unsubscribe();
    });
  }

  private setAuthenticatedUser() : void {
      let userProcess = this.authService.getUser().subscribe((response : UserResponse) : void => {
            if(response.status === LoginStatus.SUCCESS) {
                this.authService.setAuthUser(response);
                this.router.navigate(["dashboard"]);
            }
            userProcess.unsubscribe();
      });
  }

}
