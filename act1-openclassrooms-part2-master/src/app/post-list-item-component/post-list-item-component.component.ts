import { Component, OnInit, Input } from '@angular/core';
import { PostListService } from '../services/post-list.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss'],
  providers: [Post]
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;
  @Input() title:string;
  @Input() content:string;
  @Input() loveIts:number;
  @Input() createdAt:Date;
  
  constructor(private postListService: PostListService) { }

  ngOnInit() {
  }
  loveIt(postTolove: Post) {
    this.postListService.loveIts(postTolove);
  }
  dontLoveIt(postToDislike: Post) {
    this.postListService.dontLoveIt(postToDislike);
  }

  deletePost(postToDelete: Post) {
    this.postListService.deletePost(postToDelete);
  }
}
