import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FeitInstagramApiService } from '../feit-instagram-api.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  postComments: PostComment [] = [];
  newComment : PostComment;

  constructor( public dialogRef : MatDialogRef <CommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any ,
    private apiService : FeitInstagramApiService) 
    {
      this.newComment= {
        id: this.data.clickedPost.id,
        fullName : '',
        accountName: '',
        photoUrl :'',
        comment: '',

      };

      this.apiService.getPostComments(this.data.clickedPost.id)
      .subscribe((comments)=>{
        this.postComments = comments;
      });
     }

     onComment(){
       this.apiService.postComment(this.data.clickedPost.id, this.newComment)
       .subscribe(()=> {console.log("Posted new comment");
      });

      this.newComment.comment= '';
     }

  ngOnInit() {
  }

}
