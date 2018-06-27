import { Component, OnInit, Input } from '@angular/core';
import { PostListService } from '../services/post-list.service';
import { Subscription } from 'rxjs/Subscription';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  posts: Post[];
  postSubscription: Subscription;
  constructor(private postListService: PostListService) { }

  ngOnInit() {
    this.postListService.getPosts();
    this.postSubscription = this.postListService.postSubject.subscribe(
      (posts:Post[]) => {
        this.posts = posts;
      }
    );
    this.postListService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
