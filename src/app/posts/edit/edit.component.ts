import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  postForm: Posts = {
    id: 0,
    title:"",
    body:""
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private postsService: PostsService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.postsService.getById(id).subscribe((data) => {
      this.postForm = data;
    });
  }
 
  update() {
    this.postsService.update(this.postForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/posts/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}