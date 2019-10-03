import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as config from '../config.json'

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
})

@Injectable({
  providedIn: 'root'
})
export class PostService {
  base_route:string = `${config.base_url}/posts/`

  constructor(private http:HttpClient) { }

  getFeed(token: string):Observable<any> {
    return this.http.get(`${this.base_route}feed`, {headers: headers.append('Authorization', token)})
  }

  profilePosts(username: string, skip, limit):Observable<any> {
    return this.http.get(`${this.base_route}profile/${username}?skip=${skip}&limit=${limit}`)
  }

  createPost(content: any, token: string):Observable<any> {
    const config = {
      headers: headers.append('Authorization', token)
    }
    return this.http.post(`${this.base_route}`, {content}, config)
  }

  starPost(postId, token):Observable<any> {
    const config = {
      headers: headers.append('Authorization', token)
    }
    return this.http.put(`${this.base_route}star/${postId}`, {}, config)
  }
}
