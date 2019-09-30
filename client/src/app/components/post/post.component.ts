import { Component, OnInit, Input} from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: any
  @Input() user: any

  starred: boolean
  nStars: number

  constructor(private postService: PostService, private userService: UserService) {  }

  ngOnInit() {
    if(this.user) {
      const starred = this.post.stars.find(({username}) => username == this.user.username)
      this.starred = starred ? true : false
    }
    this.nStars = this.post.stars.length
  }

  // deletePost() {
  // }

  addStar () {
    this.postService.starPost(this.post._id, localStorage.getItem('id_token')).subscribe((res:any) => {
      if(res.success) {
        this.starred = !this.starred
        this.nStars += this.starred ? 1 : -1
      }
    })
  }
}
