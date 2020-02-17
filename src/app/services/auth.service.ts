import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  USER_AUTHENTICATION_TOKEN = 'authenticationToken'

  public email: String;
  public password: String;

  constructor(private http: HttpClient) { }

  authenticationService(email: String, password: String) {
     this.saveAuthorizationHeader(this.createBasicAuthToken(email, password));
  }

  createBasicAuthToken(email: String, password: String) {
    return 'Basic ' + window.btoa(email + ":" + password)
  }

  saveAuthorizationHeader(token: string) {
    sessionStorage.setItem(this.USER_AUTHENTICATION_TOKEN, token);
  }

  readAuthorizationHeader() {
  return sessionStorage.getItem(this.USER_AUTHENTICATION_TOKEN)
  }
  registerSuccessfulLogin(email, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, email)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.email = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUser() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}
