import { Component, OnInit } from '@angular/core';
import {PostsService} from "../posts.service"
//import data from '../../../../db.json';

interface Posts {
  id: number;
  title: string;
  body: string;
}
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  allPosts: Posts[] = [];
  deleteModal: any;
  idTodelete: number = 0;
  // Use PostsService component in constructor here
  constructor(private postsService: PostsService) {}

  // ngOnInit is a lifecycle component of angular on component loaded
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get()
  }
  
  //To fetch data from the component
  get() {
    this.postsService.get().subscribe((data) => {
      this.allPosts = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.postsService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allPosts = this.allPosts.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}
