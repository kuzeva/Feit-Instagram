import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule,} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 



import {MatDialogModule} from '@angular/material/dialog'; 

import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    CommentsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatDialogModule,
    MatGridListModule,
  ],
  providers: [],
  entryComponents: [PostComment,CommentsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
