import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
})

@Injectable({
  providedIn: 'root'
})

export class ValidateService {
  baseRoute:String = 'http://192.168.0.2:3000/'

  constructor(private http:HttpClient) { }

  validateRegister(user) {
    if(user.email == undefined || user.username == undefined || user.password == undefined) return false
    return true  
  }

  validateEmail(email:String) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  validateUsername(username:String):Observable<Object> {
    return this.http.post<Object>(`${this.baseRoute}users/validateUsername`, {username}, {headers})
  }
}
