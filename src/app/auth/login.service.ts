// Angular imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// rxjs imports
import { Observable } from 'rxjs';

// Auth imports
import { LoginResponse } from './interfaces/login.interfaces';
import { ClientService } from '@services/api/client.service';

@Injectable()
export class LoginService extends ClientService {

    protected readonly endpoint : string = `${this.base_url}/v2/auth/token`;

    constructor(
        client: HttpClient
    ) {
        super(client);
    }

    login(username: string, password: string) : Observable<LoginResponse> {
        return this.client.post<LoginResponse>(this.endpoint, {
            username: username,
            password: password
        }, { headers: this.headers });
    }
}
