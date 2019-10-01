import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() user: User
  @Input() profile_photo: string
  @Input() signedIn: boolean
  @Input() navbarTransparent: any

  @Output() signOut = new EventEmitter<void>()

  constructor() {}
  ngOnInit() {
     console.log(this.navbarTransparent) 
  }

  ngOnChanges(changes) {
    if(changes.navbarTransparent) {
      console.log(this.navbarTransparent)
    }
  }

  logout() {
    this.signOut.emit()
  }
}
