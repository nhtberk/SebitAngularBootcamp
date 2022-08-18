import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css'],
})
export class BlogUpdateComponent implements OnInit {
  id: any;
  blog:any;
  blogElement:any;
  imageUrl: string= '';
  content: string='';
  title: string="";

  form = new FormGroup({
    title: new FormControl(null, Validators.required),
    body: new FormControl(null, Validators.required),
  });

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
  ) {


  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getBlog();
  }
  onSubmit() {
    const request = {
      title: this.form.get('title')?.value,
      body: this.form.get('body')?.value,
      imageId: this.blog.imageId,
      userId: this.blog.userId,
    };
    this.blogService.putPost(this.id, request).subscribe((res) => {
      this.blogElement.title = res.title;
      this.blogElement.body = res.body;
    });
    this.router.navigate(['home']);
  }

  public getBlog(){
    return this.blogService.getPost(this.id).subscribe((res) => {
      this.blog = res;
      this.form.patchValue({
        title: this.blog.title,
        body: this.blog.body
      })
      console.log(res);
    });
  }
}
