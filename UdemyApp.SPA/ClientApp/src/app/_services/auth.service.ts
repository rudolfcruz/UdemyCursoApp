import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = "http://localhost:5000/api/auth/";

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseURL + 'login', model)
      .pipe(
        map((response: any) => {
          //const user = response;
        //if (user) {
        if (response) {
            //localStorage.setItem('token', user.token);
            localStorage.setItem('token', response.token);
          }
        })
      );
  }

  register(model: any) {
    return this.http.post(this.baseURL + 'register', model);
  }
}
