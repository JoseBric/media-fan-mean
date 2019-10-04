import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import Toast from 'src/app/lib/toast';
import {User} from '../../models/user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileUsername: string
  modalTitle: string
  
  profileUser:User
  loggedInUser: User
  
  profileFollowing: [User]
  profileFollowers: [User]
  loggedUserFollowing: [any]
  
  ownProfile: boolean
  isFollowing: boolean
  
  profilePosts:any = []

  loader:HTMLElement

  limit:number = 5
  skip:number = 0
  hasMore: boolean = true

  fetchingPosts: boolean = false
  
  constructor(private postService: PostService, private route: ActivatedRoute, private userService: UserService, private auth: AuthService) { }

  async ngOnInit() {
    this.skip = 0

    this.loggedInUser = this.auth.getUserData()

    this.route.params.subscribe(params => {
      
      const reset = this.profileUsername != params.username
      
      if(this.profileUsername != params.username) {
        this.skip = 0
        this.limit = 0
      }
 
      this.profileUsername = params.username

      this.userService.getProfile(this.profileUsername).subscribe(({user}) => {
        this.profileUser = user
        
        this.getProfilePosts(this.profileUsername, reset)
        if(this.loggedInUser) {
          this.getLoggedUserFollows()
          this.isOwnProfile()
          this.isUserFollowingProfile()
        }
        this.loader = document.querySelector('#loader')
        window.onscroll = this.onScroll.bind(this)
      })

    })
  }

  onScroll(e) {
    if((document.documentElement.scrollHeight - window.innerHeight) === window.scrollY) {
      if((this.fetchingPosts && !this.profileUser) || !this.hasMore) return
      this.addMorePosts()
    }
  }

  addMorePosts() {
    this.skip += this.limit
    this.getProfilePosts(this.profileUser.username)
  }

  getProfilePosts(username:string, reset = false) {
    if(this.fetchingPosts) return
    this.fetchingPosts = true

    const skip = this.profilePosts == 0 ? 0 : this.skip
    const limit = this.limit

    this.postService.profilePosts(username, skip, limit).subscribe(({posts, has_more}) => {
      this.fetchingPosts = false
      this.hasMore = has_more

      if(reset) this.profilePosts = posts
      else this.profilePosts.push(...posts)
    })
  }


  isOwnProfile() {
    this.ownProfile = this.loggedInUser.username == this.profileUsername
  }

  isUserFollowingProfile() {
    this.userService.checkFollow(this.loggedInUser.username, this.profileUser.username).subscribe(({following}) => {
      this.isFollowing = following
    })
  }

  postCreated() {
    this.addMorePosts()
  }

  switchFollow(username) {
    const token = localStorage.getItem('id_token')
    this.userService.switchFollow(username, token).subscribe(data => {
      if(data.success) {
        this.getLoggedUserFollows()
        this.isUserFollowingProfile()
      }
    })
  }

  followersModal() {
    this.modalTitle = 'followers'
  }
  
  followingModal() {
    this.modalTitle = 'following'
  }

  getLoggedUserFollows() {
    this.userService.getFollows(this.loggedInUser.username).subscribe(({following, followers}) => {
      this.loggedUserFollowing = following  
    })

    this.userService.getFollows(this.profileUsername).subscribe(({following, followers}) => {
      this.profileFollowing = following  
      this.profileFollowers = followers  
      if(this.modalTitle == 'following') this.followingModal()
      else this.followersModal()
    })

  }

}
