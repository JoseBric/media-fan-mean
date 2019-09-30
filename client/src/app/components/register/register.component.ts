import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from "@angular/router"
import Toast from 'src/app/lib/toast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
  email:String
  username:String
  password:String

  constructor(private validate:ValidateService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }


  typingEmail(e) {
  }

  typingUsername(e) {
    if(this.username.length <= 4) {

    }

    this.validate.validateUsername(this.username).subscribe(data => {
      console.log(data)
    })
  }

  typingPassword(e) {

  }

  typingRepeatedPassword(e) {

  }

  submitted() {
    const user = {
      email: this.email,
      username: this.username,
      password: this.password,
    }
    this.auth.registerUser(user).subscribe(() => {
      Toast.fire(`You've successfully created your acount`, 'Now you can log in', 'success')      
      this.router.navigate(['/login'])
    })
  }

}
