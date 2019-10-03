import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { JwtHelperService } from "@auth0/angular-jwt";

import * as config from '../config.json'

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
})

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseRoute:string = `${config.base_url}/users/`

  id_token:string = ''
  user:string = ''

  constructor(private http:HttpClient) { }

  loginUser(user):Observable<any> {
    return this.http.post(`${this.baseRoute}login`, {...user}, {headers})
  }  

  registerUser(user):Observable<any> {
    return this.http.post(`${this.baseRoute}signup`, {...user}, {headers})
  }  

  storeUserData(token:string, user:string) {
    localStorage.setItem('id_token', token)
    localStorage.setItem('user', user)
    this.id_token = token
    this.user = user
  }

  logout() {
    this.id_token = ''
    this.user = ''
    localStorage.clear()
  }

  loggedIn() {
    this.id_token = localStorage.getItem('id_token')
    return !helper.isTokenExpired(this.id_token);
  }

  getUserData() {
    return JSON.parse(localStorage.getItem('user'))
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

}
