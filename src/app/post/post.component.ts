import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  count: number = 0;
  posts: Array<any>;
  
  constructor(private postService: PostService) { 
    //let postService = new PostService();
    this.posts = postService.postList;
    this.count = postService.postList.length;
  }


  ngOnInit(): void {
    
  }

  addNewData(){
    let newPost: Post = {
      id: this.count + 1,
      postTitle: "Post " + (this.count + 1)
    }
    this.count++;
    this.postService.addPost(newPost);
  }

  deleteData(){
    this.count--;
    if(this.count < 0) this.count = 0;
    this.postService.delPost(this.count);
  }
}
