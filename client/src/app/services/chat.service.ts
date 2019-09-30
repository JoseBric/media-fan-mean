import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../models/chat';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  base_url:string = 'http://192.168.0.2:3000/chats/'

  constructor(private http: HttpClient) { }

  getMessages(contact:string, token:string):Observable<any>{
    return this.http.get<[string]>(`${this.base_url}messages/${contact}`, {
      headers: new HttpHeaders({
        'Authorization': token,
      })
    })
  }

  sendMessage(msg: string, receiver: string, token: string):Observable<any> {
    return this.http.post<[string]>(`${this.base_url}${receiver}`, {msg} ,{
      headers: new HttpHeaders({
        'Authorization': token,
      })
    })
  }

  getContacts(username:string, token:string) {

  }

  getChats(username:string, token:string):Observable<[Chat]> {
    return this.http.get<[Chat]>(`${this.base_url}`, {
      headers: new HttpHeaders({
        'Authorization': token,
      })
    })
  }
}
