import { Component, OnInit } from '@angular/core';

export interface Tile{
  photoUrl : string;
  cols : number;
  rows : number;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})


export class UserDetailsComponent implements OnInit {

  tiles : Tile[] =[
    {photoUrl: 'https://imgix.bustle.com/2015/11/8/_DORA.jpg?w=960&h=540&fit=crop&crop=faces&auto=format&q=70',cols : 1, rows : 1},
    {photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_vmqdSzzeBzMq8nxcn7rKfZHxcy9BSnYvkX1Q8fW_1jRVTod&s',cols : 1, rows : 1},
    {photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwagcyO3rSy34ukjF9lA4NyBhoZeei3tZ_ZpF2_xwA7avRkGhF&s',cols : 1, rows : 1},
    {photoUrl: 'http://static1.shop033.com/resources/67/3687/picture/40/15935040.jpg',cols : 1, rows : 1},
    {photoUrl: 'http://images.nickjr.com/nickjr/promos/video/dora-the-explorer/106-cheering-for-the-train-16x9.jpg?quality=0.60',cols : 1, rows : 1},
    {photoUrl: 'https://ae01.alicdn.com/kf/HTB1PXUPbo_rK1Rjy0Fcq6zEvVXa1/5D-DIY-Full-Diamond-Painting-Mosaic-Cartoon-Dora-The-Explorer-decoration-Diamond-rhinestone-embroidery-cross-stitch.jpg' , cols : 1 , rows: 1}

  ];
  constructor() { }

  ngOnInit() {
  }

}
