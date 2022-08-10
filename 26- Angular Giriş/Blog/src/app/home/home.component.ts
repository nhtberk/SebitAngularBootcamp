import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '../interface/post';
import { BlogService } from '../service/blog.service';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public posts: Array<Post> = [];
  public page:number = 13;
  public pageSize: number = 8

  constructor(private blogService: BlogService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getBlogList();
  }
  openDialog(element: any, viewOrUpdate: any) {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      width: '450px',
      data:{blog : element,isUpdate:viewOrUpdate}
    });
    dialogRef.afterClosed().subscribe((res)=>
    this.blogService.getPosts().subscribe((res) => {
      console.log(res);
      this.posts = res;
    })
    )
  }
  getBlogList(){
    this.blogService.getPosts().subscribe((res) => {
      console.log(res);
      this.posts = res;
    });
  }
}
