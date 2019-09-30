import { Component, OnInit } from '@angular/core';
import Cropper from 'cropperjs';

import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import Toast from 'src/app/lib/toast';

import $ from 'jquery'
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user: User

  profile_photo: File
  biographyChanged: boolean
  emailChanged: boolean

  biography: string
  email: string

  token: string

  cropper: any

  constructor(private route: ActivatedRoute, private userService: UserService, private auth: AuthService, private postService: PostService) { }

  ngOnInit() {
    this.token = this.auth.getToken()
    this.getUserData(() => this.setDefaultValues())
  }

  getUserData(cb:()=>void) {
    this.route.params.subscribe(params => {
      const {username} = params
      this.userService.getProfile(username).subscribe(({user}) => {
        this.user = user
        cb()
      })
    })
  }

  setDefaultValues() {
    this.biography = this.user.biography 
    this.email = this.user.email
  }

  handleFile(e) {
    if(this.cropper != null) {
      this.profile_photo = null
      this.cropper.destroy()
    }
    this.profile_photo = e.target.files[0]

    const reader = new FileReader();

    reader.onload = (ev) => {
      $('#profile_photo_image').attr('src', reader.result);
      this.cropper = new Cropper(document.querySelector('#profile_photo_image'), {
        aspectRatio: 1 / 1,
        background: true,
        movable: false,
        zoomable: false,
        viewMode: 3,
      })


    }
    
    reader.readAsDataURL(this.profile_photo);

  }

  handleBiography() {
    this.biographyChanged = true
  }

  handleEmail() {
    this.emailChanged = true
  }

  submitForm() {
    if(this.profile_photo) {
      this.cropper.getCroppedCanvas({
        width: 500,
        height: 500
      }).toBlob(blob => {
        this.userService.updateProfilePhoto(blob, this.token).subscribe(({success, url}) => {
          if(!success) {
            Toast.fire('Error uploading profile photo', '', 'error')
          }
          this.profile_photo = null
          this.cropper.destroy()
          this.user.profile_photo = url
          document.querySelector('#profile_photo_image').setAttribute('src', url) 
          this.postService.profilePosts
        })
      })
    }

    if(this.biographyChanged)
    this.userService.updateBiography(this.biography, this.token).subscribe(({success, biography}) => {
      if(!success) {
        Toast.fire('Error updating your biography', '', 'error')
      }
      this.biography = biography 
    })

    if(this.emailChanged)
    this.userService.updateEmail(this.email, this.token).subscribe(({success, email}) => {
      if(!success) {
        Toast.fire('Error updating the email', '', 'error')
      }
      this.email = email 
    })

    Toast.fire('Profile updated', '', 'success')
  }
}
