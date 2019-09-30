import { Component, OnInit, Input} from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() posts 
  @Input() user:User

  constructor() { }

  ngOnInit() {
  }
}
