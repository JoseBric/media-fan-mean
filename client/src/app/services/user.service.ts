import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
})

@Injectable({
  providedIn: 'root'
})

export class UserService {
  base_url:string = 'http://192.168.0.2:3000/users/'

  constructor(private http:HttpClient) { }

  getProfile(username: string):Observable<any> {
    return this.http.get(`${this.base_url}profile/${username}`, {headers})
  }

  switchFollow(username: string, token: string):Observable<any> {
    return this.http.put(`${this.base_url}switchFollow/${username}`, {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
      })
    })
  }

  checkFollow(active: string, passive: string):Observable<any> {
    return this.http.get(`${this.base_url}checkFollow/${active}/${passive}`)
  }

  getProfilePhoto(username: string):Observable<any> {
    return this.http.get(`${this.base_url}profile_photo/${username}`)
  }

  getFollows(username:string):Observable<any> {
    return this.http.get(`${this.base_url}getFollows/${username}`, {headers})
  }

  updateProfilePhoto(profile_photo: File, token: string):Observable<any> {
    let formData:FormData = new FormData();
    formData.append('profile_photo', profile_photo, profile_photo.name);
    
    const config = {
      headers: new HttpHeaders({
        'Authorization': token,
      })
    }
    return this.http.put(`${this.base_url}updateProfilePhoto`, formData, config)
  }

  updateBiography(biography: string, token: string):Observable<any> {
    return this.http.put(`${this.base_url}updateBiography`, {biography}, {headers: headers.append('Authorization', token)})
  }

  updateEmail(email: string, token: string):Observable<any> {
    return this.http.put(`${this.base_url}updateEmail`, {email}, {headers: headers.append('Authorization', token)})
  }

  searchUser(string: string):Observable<any> {
    return this.http.get(`${this.base_url}search_user/${string}`, {headers})
  }

}
