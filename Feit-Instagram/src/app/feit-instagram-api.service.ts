import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeitInstagramApiService {
  images = [];

  constructor(private http : HttpClient) { }

  getPosts(pageNumber: number):Observable<Post[]>{
    return this.http.get<Post[]>(`https://http://5e1dce7df846e500144d608f.mockapi.io/Post`)
  }

  getPostComments(postId: number):Observable<PostComment[]>{
    return this.http.get<PostComment[]>(`http://5df115fd9df6fb00142bd818.mockapi.io/api/posts/${postId}/postComments`)
  }

  postComment(postId: number, comment: PostComment){
    return this.http
    .post(`http://5df115fd9df6fb00142bd818.mockapi.io/api/posts/${postId}/postComments`, comment);
  }
}
