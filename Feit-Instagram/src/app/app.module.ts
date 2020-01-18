import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatButtonModule, MatSlideToggleModule, MatInputModule,} from '@angular/material';
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
import { SettingsComponent } from './settings/settings.component'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostListComponent } from './post-list/post-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    CommentsComponent,
    UserDetailsComponent,
    SettingsComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatDialogModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule,
    MatSlideToggleModule,
    RouterModule.forRoot([
      {path: 'post' , component : PostComponent },
      {path: 'comments' , component : CommentsComponent},
      {path: 'settings' , component: SettingsComponent},
      {path: 'user-details' , component: UserDetailsComponent},
    ]),
    MatInputModule,
    BrowserAnimationsModule,
    ScrollingModule,
    
  ],
  providers: [],
  entryComponents: [PostComponent,CommentsComponent,UserDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
