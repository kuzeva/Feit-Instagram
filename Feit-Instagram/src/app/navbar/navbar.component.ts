import { Component, OnInit } from '@angular/core';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dialog: any;

  
  constructor() { }
 
  ngOnInit() {
  }

}
