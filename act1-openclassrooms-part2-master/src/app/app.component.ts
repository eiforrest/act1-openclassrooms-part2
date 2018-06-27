import { Component, OnInit, Input } from '@angular/core';
import { Post } from './models/post';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Post]
})
export class AppComponent implements OnInit {
  // post1:Post = new Post('Mon premier post', 'Contenu post1 Contenu post1 Contenu post1 Contenu post1 Contenu post1 Contenu post1 Contenu post1');
  // post2:Post = new Post('Mon deuxième post', 'Contenu post2 Contenu post2 Contenu post2 Contenu post2 Contenu post2 Contenu post2 Contenu post2');
  // post3:Post = new Post('Encore un post', 'Contenu post3 Contenu post3 Contenu post3 Contenu post3 Contenu post3 Contenu post3 Contenu post3');
  post1:Post = new Post();
  post2:Post = new Post();
  post3:Post = new Post();
  posts: any[];

  ngOnInit() {
    this.posts = [this.post1, this.post2, this.post3  ];
  }
  constructor(private post:Post) { 
    var config = {
      apiKey: "AIzaSyDwz9L0sxOf5qj_bXlgBZp6gPp3XSOJDYw",
      authDomain: "openclassroom-act1.firebaseapp.com",
      databaseURL: "https://openclassroom-act1.firebaseio.com",
      projectId: "openclassroom-act1",
      storageBucket: "openclassroom-act1.appspot.com",
      messagingSenderId: "866409681298"
    };
    firebase.initializeApp(config);
  }
  
  
}
