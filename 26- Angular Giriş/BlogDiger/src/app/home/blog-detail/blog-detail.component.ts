import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/service/blog.service';
import { CommentsService } from 'src/app/service/comments.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  id: any;
  blog: any;
  comments:any;
  constructor(private route: ActivatedRoute, public blogs: BlogService, public comment: CommentsService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getBlog();

  }

  getBlog() {
    return this.blogs.getPost(this.id).subscribe((res) => {
      this.blog = res;
      this.getComments();
    });

  }
  public getComments(){
    return this.comment.getComments().subscribe((res)=>{
      this.comments = res.filter((item: any)=> item.postId === this.blog.id);
    }
    )
  }

}
