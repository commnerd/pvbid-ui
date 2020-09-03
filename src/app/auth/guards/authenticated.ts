// Angular imports
import { Router, CanActivate, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

// Project
import { AuthService } from '../auth.service';

@Injectable()
export class CanActivateAuthenticated implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate() : UrlTree | boolean {
        return this.authService.isAuthenticated() ? true : this.router.parseUrl("login2");
    }
}