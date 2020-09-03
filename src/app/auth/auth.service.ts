// Angular imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Third Party imports
import { Observable } from 'rxjs';

// Auth imports
import { LoginResponse, UserResponse } from './interfaces/login.interfaces';
import { ApiService } from '@services/api/api.service';

@Injectable()
export class AuthService extends ApiService {

    private readonly BEARER_TOKEN : string = "auth_token";

    private readonly AUTH_USER : string = "auth_user";

    private readonly REFRESH_TOKEN : string = "refresh_token";

    protected readonly loginEndpoint : string = `${this.base_url}/v2/auth/token`;

    protected readonly userEndpoint : string = `${this.base_url}/v2/users/me`;

    constructor(
        client: HttpClient
    ) {
        super(client);
        if(this.isAuthenticated()) {
            this.setAuthorizationHeader();
        }
    }

    public login(username: string, password: string) : Observable<LoginResponse> {
        return this.client.post<LoginResponse>(this.loginEndpoint, {
            username: username,
            password: password
        }, { headers: this.headers });
    }

    public getUser() : Observable<UserResponse> {
        return this.client.get<UserResponse>(this.userEndpoint, { headers: this.headers });
    }

    public setAuthTokens(data: LoginResponse) {
        localStorage.setItem(this.BEARER_TOKEN, data.access_token);
        localStorage.setItem(this.REFRESH_TOKEN, data.refresh_token);
        this.setAuthorizationHeader();
    }

    public setAuthUser(data: UserResponse) {
        localStorage.setItem(this.AUTH_USER, JSON.stringify(data.data["user"]));
    }

    public isAuthenticated() : boolean {
        return !!(localStorage.getItem(this.BEARER_TOKEN)) && !!(localStorage.getItem(this.AUTH_USER));
    }

    private setAuthorizationHeader() : void {
        this.headers = this.headers.append("Authorization", `Bearer ${localStorage.getItem(this.BEARER_TOKEN)}`);
    }
}
