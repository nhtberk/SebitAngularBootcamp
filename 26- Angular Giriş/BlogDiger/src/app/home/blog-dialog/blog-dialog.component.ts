import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlogService } from 'src/app/service/blog.service';
import { CommentsService } from 'src/app/service/comments.service';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css'],
})
export class BlogDialogComponent implements OnInit {
  isUpdated: boolean = false;
  blogElement:any;

  imageUrl: string= '';
  content: string='';
  title: string="";

  comments: any[] = [];

  form = new FormGroup({
    title: new FormControl(null, Validators.required),
    body: new FormControl(null, Validators.required),
  });
  constructor(private blogService: BlogService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<BlogDialogComponent>, private comment:CommentsService
  ) {
    if (data.isUpdate) {
      this.isUpdated = true;
      this.form.patchValue({
        title: this.data.blog.title,
        body: this.data.blog.body
      })
      this.blogElement = data.blog;
    }else{
      this.isUpdated = false;
      console.log(data);
      this.imageUrl = data.blog.imageId.toString();
      this.content = data.blog.body;
      this.title = data.blog.title;
      this.getComments();
    }

  }
  ngOnInit(): void {
  }

  onSubmit() {
    const request = {
      title: this.form.get('title')?.value,
      body:this.form.get('body')?.value,
      imageId: this.data.blog.imageId,
      userId: this.data.blog.userId
    }
    this.blogService.putPost(this.data.blog.id , request).subscribe((res) => {
      this.blogElement.title= res.title;
      this.blogElement.body = res.body
      this.close();

    });
  }
  close() {
    this.dialogRef.close();
  }

  public getComments(){
    return this.comment.getComments().subscribe((res)=>{
      this.comments = res.filter((item: any)=> item.postId === this.data.blog.id);
    }
    )
  }
}
