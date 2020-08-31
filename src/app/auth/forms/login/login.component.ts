import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../login.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(
      private service: LoginService,
      private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    })
  }

  onSubmit(value) {
    this.service.login(value.email, value.password).subscribe(test => console.log(test));
  }

}
