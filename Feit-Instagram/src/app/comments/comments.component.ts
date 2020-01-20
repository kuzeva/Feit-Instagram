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
        fullName : 'Dora',
        accountName: '@the_explorer',
        photoUrl :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7F_BJjsWyR0l7HcPpq1MY-bilaVokpX0vsD_9oSy2S2xxsj-x&s',
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
      console.log(this.data.clickedPost.id)
      this.newComment.comment= '';
     }

  ngOnInit() {
  }

}
