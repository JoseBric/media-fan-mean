import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { User } from './models/user';
import Toast from './lib/toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  user: User
  profile_photo: string
  signedIn: boolean
  navbarHidden: boolean
  
  constructor(private auth: AuthService, 
    private userService: UserService, 
    private router: Router) { }
    
  
  ngOnInit() {
    if(this.auth.loggedIn()) this.userData()
  }
    
  activated(component) {
    const name = component.constructor.name
    this.navbarHidden = name == 'RegisterComponent' || name == 'LoginComponent'
    if(this.auth.loggedIn()) this.userData()
  }
  
  userData() {
    this.signedIn = true
    const username = JSON.parse(localStorage.getItem('user')).username

    this.userService.getProfile(username).subscribe(({user}) => {
      this.user = user
      this.profile_photo = user.profile_photo
    })
  }

  logout() {
    this.auth.logout()

    this.user = null
    this.profile_photo = null
    this.signedIn = false

    this.router.navigate(['/login'])
    Toast.fire('Log out', 'You have beed logged out successfully', 'success')
  }
}
