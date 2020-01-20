import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FeitInstagramApiService } from '../feit-instagram-api.service';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

posts : Post[] = [];

  constructor(public dialog : MatDialog, private apiService : FeitInstagramApiService) { 
    this.getPosts();
  }

  getPosts(){
    this.apiService.getPosts().subscribe((recievedPosts)=>{
    this.posts = recievedPosts;
  });
  }


  ngOnInit() {
  }

}
