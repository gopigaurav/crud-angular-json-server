import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Posts} from "./posts"
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  // to fetch the data from url
  get() {
    return this.http.get<Posts[]>('https://fake-angular-db.herokuapp.com/posts');
  }

  create(payload: Posts) {
    return this.http.post<Posts>('https://fake-angular-db.herokuapp.com/posts', payload);
  }

  getById(id: number) {
    return this.http.get<Posts>(`https://fake-angular-db.herokuapp.com/posts/${id}`);
   }
    
   update(payload:Posts){
    return this.http.put(`https://fake-angular-db.herokuapp.com/posts/${payload.id}`,payload);
   }
   delete(id:number){
    return this.http.delete<Posts>(`https://fake-angular-db.herokuapp.com/posts/${id}`);
 }
}
