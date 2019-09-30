import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';
import Toast from 'src/app/lib/toast';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  token:string = localStorage.getItem('id_token')
  user:User
  posts

  constructor(private postService: PostService, private auth: AuthService) { }

  ngOnInit () {
    this.getPosts()
  }

  getPosts() {
    this.user = this.auth.getUserData()
    this.postService.getFeed(localStorage.getItem('id_token'))
    .subscribe(data => 
      this.posts = data.posts,
      err => Toast.fire('There was an error fetching the posts', err, 'error'))
  }
  

}
