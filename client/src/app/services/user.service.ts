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

export class UserService {
  base_route:string = `${config.base_url}/users/`

  constructor(private http:HttpClient) { }

  getProfile(username: string):Observable<any> {
    return this.http.get(`${this.base_route}profile/${username}`, {headers})
  }

  switchFollow(username: string, token: string):Observable<any> {
    return this.http.put(`${this.base_route}switchFollow/${username}`, {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
      })
    })
  }

  checkFollow(active: string, passive: string):Observable<any> {
    return this.http.get(`${this.base_route}checkFollow/${active}/${passive}`)
  }

  getProfilePhoto(username: string):Observable<any> {
    return this.http.get(`${this.base_route}profile_photo/${username}`)
  }

  getProfilePhotos(usernames: [string]):Observable<any> {
    return this.http.post(`${this.base_route}profile_photos`, {usernames}, {headers})
  }

  getFollows(username:string):Observable<any> {
    return this.http.get(`${this.base_route}getFollows/${username}`, {headers})
  }

  updateProfilePhoto(profile_photo: File, token: string):Observable<any> {
    let formData:FormData = new FormData();
    formData.append('profile_photo', profile_photo, profile_photo.name);
    
    const config = {
      headers: new HttpHeaders({
        'Authorization': token,
      })
    }
    return this.http.put(`${this.base_route}updateProfilePhoto`, formData, config)
  }

  updateBiography(biography: string, token: string):Observable<any> {
    return this.http.put(`${this.base_route}updateBiography`, {biography}, {headers: headers.append('Authorization', token)})
  }

  updateEmail(email: string, token: string):Observable<any> {
    return this.http.put(`${this.base_route}updateEmail`, {email}, {headers: headers.append('Authorization', token)})
  }

  searchUser(string: string):Observable<any> {
    return this.http.get(`${this.base_route}search_user/${string}`, {headers})
  }

}
