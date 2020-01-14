import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts : Post[] = [];

  @Input() id : number;
  @Input() name : string;
  @Input() userName : string;
  @Input() profileImg : string;
  @Input() mainImg : string;
  @Input() description : string;
  @Input() numberLikes : string;

  constructor() { }

  ngOnInit() {
  }

}
