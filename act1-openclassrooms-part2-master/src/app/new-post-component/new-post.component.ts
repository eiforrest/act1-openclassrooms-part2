import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from '../models/post';
import { PostListService } from '../services/post-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  providers: [Post]
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postListService: PostListService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newPostForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  };

  onSubmitForm() {
    const formValue = this.newPostForm.value;
    const newPost = new Post();
    newPost.setTitle(formValue['title']);
    newPost.setContent(formValue['content']);
    this.postListService.addNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
