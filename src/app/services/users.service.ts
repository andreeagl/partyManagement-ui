import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get(`${environment.api}/users`);
  }

  getBike(email: string) {
    return this.http.get(`${environment.api}/users/${email}`);
  }

  createUser(user) {
    let body = JSON.stringify(user);
    return this.http.post(`${environment.api}/users`, body, httpOptions)
  }
}
