import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-profile-item',
  templateUrl: './user-profile-item.component.html',
  styleUrls: ['./user-profile-item.component.scss']
})
export class UserProfileItemComponent implements OnInit {
  @Input() loggedInUser: User
  
  @Input() user: User
  @Input() doesFollow: (username:string) => boolean

  @Output() switchFollow = new EventEmitter<User>()
  constructor() { }

  ngOnInit() {
  }

  switchFollowUnfollow(user: User) {
    this.switchFollow.emit(user)
  }
}
