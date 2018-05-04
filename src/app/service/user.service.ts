import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  login() {
    let url = 'https://backend-api-sla-digital-lorong-dev.mybluemix.net/api/users/login';
    return this.http.post(url,
      {
        username: "INDIVIDUAL1_USER1",
        password: "password"
      }
    )
  }

  getAllTransaction() {
    let url = 'https://backend-api-sla-digital-lorong-dev.mybluemix.net/api/SalesTransaction?access_token='+localStorage.getItem('access_token');
    return this.http.get(url);
  }
}
