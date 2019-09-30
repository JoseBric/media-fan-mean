import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Toast from 'src/app/lib/toast';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import $ from 'jquery'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthService, private userService: UserService, private router: Router) { }
  user: User
  profile_photo: string

  ngOnInit() {
    this.userData()
  }

  userData() {
    if(!this.auth.loggedIn()) return
    const username = JSON.parse(localStorage.getItem('user')).username
    this.userService.getProfile(username).subscribe(({user}) => {
      this.user = user
      this.profile_photo = user.profile_photo
    })
  }

  logout() {
    this.auth.logout()
    this.router.navigate(['/login'])
    Toast.fire('Log out', 'You have beed logged out successfully', 'success')
  }
}
