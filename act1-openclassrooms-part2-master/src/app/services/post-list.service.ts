import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable()
export class PostListService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  emitPosts(){
    this.postSubject.next(this.posts);
  }

  getPosts() {
    let test: any[];
    firebase.database().ref('/post')
      .on('value', (data: firebase.database.DataSnapshot) => {
          this.posts = [];
          test = data.val() ? data.val() : [];
          this.convertDataToPost(test);
          this.emitPosts();
        }
      );
  }

  convertDataToPost(listPost: any[]){
    for (let i:number = 0; i <= listPost.length - 1 ; i++){
      let post = new Post();
      if (listPost[i].title) {
        post.setTitle(listPost[i].title);
      }
      if (listPost[i].content) {
        post.setContent(listPost[i].content);
      }
      if (listPost[i].loveIts) {
        post.setLoveIts(listPost[i].loveIts);
      }
      if (listPost[i].createdAt) {
        post.setCreatedAt(listPost[i].createdAt);
      } else {
        post.setCreatedAt(new Date());
      }
      this.posts.push(post);
    }
  }


  savePosts() {
    firebase.database().ref('/post').set(this.posts);
  }

  addNewPost(post: Post){
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  deletePost(postToDelete: Post){
    const postIndexToDelete = this.posts.findIndex(
      (post) => {
        if (post === postToDelete){
          return true;
        }
      }
    );

    this.posts.splice(postIndexToDelete, 1);
    this.savePosts();
    this.emitPosts();
  }

  loveIts(postToLove: Post) {
    const postIndexToLove = this.posts.findIndex(
      (post) => {
        if (post === postToLove){
          return true;
        }
      }
    );
    const postFromList = this.posts[postIndexToLove];
    postFromList.setLoveIts(postFromList.getLoveIts() + 1);
    this.savePosts();
    this.emitPosts();
  }

  dontLoveIt(postToDislike: Post) {
    let postFromList: Post;
    const postIndexToDislike = this.posts.findIndex(
      (post) => {
        if (post === postToDislike){
          return true;
        }
      }
    );
    postFromList = this.posts[postIndexToDislike];
    postFromList.setLoveIts(postFromList.getLoveIts() - 1);
    this.savePosts();
    this.emitPosts();
  }

  constructor() { }

}
