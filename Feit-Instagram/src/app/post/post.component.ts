import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FeitInstagramApiService } from '../feit-instagram-api.service';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts : Post[] = [];

  @Input() id : number;
  @Input() name : string;
  @Input() user_name : string;
  @Input() profileImg : string;
  @Input() mainImg : string;
  @Input() description : string;
  @Input() numberLikes : string;
  @Input() post : Post[]=[];
  @Input() postt:Post;

  disabled :string;


  constructor(public dialog : MatDialog, iconRegistry : MatIconRegistry , sanitizer: DomSanitizer,
    private apiService :FeitInstagramApiService ) { 
      this.disabled="false";
      
      iconRegistry.addSvgIcon(
        'heart-icon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/heart.svg')
       );
       iconRegistry.addSvgIcon(
        'pink-heart-icon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pink_heart.svg')
       );
       iconRegistry.addSvgIcon(
        'comment-icon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/comment.svg')
       );
       

        // this.apiService.getPosts().subscribe((receivedPosts)=>{
        //   this.post=receivedPosts;
        // });
    }

  
  onClick(post:Post){
    const dialogRef = this.dialog.open(CommentsComponent,
      {
        width : '750px',
        height : '700px',
        data : {clickedPost:post}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed')
      });
  }

  addLike()
  {

    this.numberLikes = this.numberLikes+1;
    this.add();


    
    
    

    
  }
  add(){
    var post = {
      "id": this.id,
      "name" : this.name,
      "user_name" : this.user_name,
      "profileImg" : this.profileImg,
      "mainImg" : this.mainImg,
      "description" : this.description,
      "numberLikes" : this.numberLikes
    }
    this.apiService.updatePost(post,this.postt.id).subscribe((res)=>{
      console.log("Liked");
    });
  }

  ngOnInit() {
  }

}
