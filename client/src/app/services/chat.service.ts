import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../models/chat';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as config from '../config.json'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  base_route:string = `${config.base_url}/chats/`

  constructor(private http: HttpClient) { }

  getMessages(contact:string, token:string):Observable<any>{
    return this.http.get<[string]>(`${this.base_route}messages/${contact}`, {
      headers: new HttpHeaders({
        'Authorization': token,
      })
    })
  }

  sendMessage(msg: string, receiver: string, token: string):Observable<any> {
    return this.http.post<[string]>(`${this.base_route}${receiver}`, {msg} ,{
      headers: new HttpHeaders({
        'Authorization': token,
      })
    })
  }

  getContacts(username:string, token:string) {

  }

  getChats(username:string, token:string):Observable<[Chat]> {
    return this.http.get<[Chat]>(`${this.base_route}`, {
      headers: new HttpHeaders({
        'Authorization': token,
      })
    })
  }
}
