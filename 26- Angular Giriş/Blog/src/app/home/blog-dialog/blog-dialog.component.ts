import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css'],
})
export class BlogDialogComponent implements OnInit {
  isUpdated: boolean = false;
  form = new FormGroup({
    title: new FormControl(null, Validators.required),
    body: new FormControl(null, Validators.required),
  });
  constructor(private blogService: BlogService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<BlogDialogComponent>
  ) {
    if (data.isUpdate) {
      this.isUpdated = true;
      this.form.patchValue({
        title: this.data.blog.title,
        body: this.data.blog.body
      })
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
      this.close();
      this.dialogRef.afterClosed().subscribe((res)=>{
        
      })
    });
  }
  close() {
    this.dialogRef.close();
  }
}
