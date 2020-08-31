import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class ClientService {

  protected readonly base_url : string = environment.api_base_path

  protected headers : HttpHeaders = new HttpHeaders({
      "Accept": "application/json",
      "Content-Type": "application/json;charset=UTF-8",
  });

  constructor(
    protected client: HttpClient
  ) {}
}
