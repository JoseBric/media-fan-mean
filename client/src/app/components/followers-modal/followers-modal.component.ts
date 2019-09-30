import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {User} from '../../models/user'

@Component({
  selector: 'app-followers-modal',
  templateUrl: './followers-modal.component.html',
  styleUrls: ['./followers-modal.component.scss']
})
export class FollowersModalComponent implements OnInit {
  @Input() title: string

  @Input() profileFollowing: [User]
  @Input() profileFollowers: [User]

  @Input() loggedUserFollowing: [any]
  @Input() loggedInUser: User

  @Output() switchFollow = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  doesFollow = (user: User) => {
    if(user == undefined || this.loggedUserFollowing == undefined) return
    return this.loggedUserFollowing.find(usr => usr.username == user.username) ? true : false
  }

  switchFollowUnfollow(user:User) {
    this.switchFollow.emit(user.username)
  }
}
