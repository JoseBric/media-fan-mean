import { Component, OnInit} from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
import Toast from 'src/app/lib/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String
  password: String

  constructor(private validate:ValidateService, private auth:AuthService, private router:Router) {}

  ngOnInit() {
  }

  onSubmit():void {
    const user = {username: this.username, password: this.password}
    this.auth.loginUser(user).subscribe(data => {
      if(data.success) {
        this.auth.storeUserData(data.token, JSON.stringify(data.user))

        this.router.navigate(['/'])

        Toast.fire(`Welcome back ${data.user.username}`, 'You are logged in', 'success')

      } else Toast.fire('There was an error trying to log you in', data.msg, 'error')
    })
  }

}
