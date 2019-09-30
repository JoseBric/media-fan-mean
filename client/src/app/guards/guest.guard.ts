import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GuestGuard implements CanActivate {

  constructor(private router:Router, private auth:AuthService){}

  canActivate() {
    if(!this.auth.loggedIn()) return true
    this.router.navigate(['../'])
    return false
  }
}
