import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
})

@Injectable({
  providedIn: 'root'
})
export class PostService {
  base_url:string = 'http://192.168.0.2:3000/posts/'

  constructor(private http:HttpClient) { }

  getFeed(token: string):Observable<any> {
    return this.http.get(`${this.base_url}feed`, {headers: headers.append('Authorization', token)})
  }

  profilePosts(username: string, skip, limit):Observable<any> {
    return this.http.get(`${this.base_url}profile/${username}?skip=${skip}&limit=${limit}`)
  }

  createPost(content: any, token: string):Observable<any> {
    const config = {
      headers: headers.append('Authorization', token)
    }
    return this.http.post(`${this.base_url}`, {content}, config)
  }

  starPost(postId, token):Observable<any> {
    const config = {
      headers: headers.append('Authorization', token)
    }
    return this.http.put(`${this.base_url}star/${postId}`, {}, config)
  }
}
