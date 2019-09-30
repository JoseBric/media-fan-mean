import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query:string
  users:[User]
  matches:boolean
  focused:boolean

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.suggestions()
  }

  suggestions() {

  }

  searchUsers(e) {
    if(this.query == '') return this.matches = false
    this.userService.searchUser(this.query).subscribe(({users, matches}) => {
      if(!matches) return this.matches = false
      this.matches = true
      if(JSON.stringify(users) == JSON.stringify(this.users)) return
      this.users = users
    })
  }

  focus() {
    this.focused = true
  }
  
  unfocus() {
    setTimeout(() => {
      this.focused = false
    }, 200)
  }
}
