import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() user: User
  @Input() profile_photo: string
  @Input() signedIn: boolean

  @Output() signOut = new EventEmitter<void>()

  constructor() { }
  ngOnInit() {

  }

  logout() {
    this.signOut.emit()
  }
}
