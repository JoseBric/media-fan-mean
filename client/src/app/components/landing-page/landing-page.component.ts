import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.showNavbar()
  }
  
  showNavbar() {
    document.querySelector<HTMLElement>('#navbar').style.display = 'flex'
  }
}
