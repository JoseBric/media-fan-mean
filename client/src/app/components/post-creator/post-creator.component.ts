import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import Quote from '@editorjs/quote';
import Header from '@editorjs/header';
import Toast from 'src/app/lib/toast';

import * as config from '../../config.json';

const token = localStorage.getItem('id_token')

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.scss']
})
export class PostCreatorComponent implements OnInit {
  @Output() posted = new EventEmitter<void>()

  editor: any

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.editor = new EditorJS({
      autofocus: false,
      holder: 'post-creator',
      placeholder: 'Write your post',
      tools: {
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: `${config.base_url}/posts/uploadImage`,
              byUrl: `${config.base_url}/posts/uploadImageUrl`,
            },
            additionalRequestHeaders: {
              'authorization': token,
            }
          },
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: 'Enter a quote',
          },
        },
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            plachelder: 'Enter a headers',
          },
        },
      },
      
    })
  }

  save() {
    this.editor.save()
      .then(data => {
        this.postService.createPost(data, token)
          .subscribe(res => {
            Toast.fire('Post created', 'You can watch it in your profile', 'success')
            this.editor.blocks.clear()
            this.posted.emit()
          })
      })
      .catch(err => Toast.fire('Error creating post', 'There was an error trying to save the post', 'error'))
  }
}
