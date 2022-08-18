import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css'],
})
export class ViewArticleComponent implements OnInit {
  public id: any;
  public article: any;
  username: string = '';
  comment: string = '';
  router: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private articles: ArticleService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.articles.getArticle().subscribe((res) => {
      this.article = res;
    });
  }
  submit() {
    if (this.username == '' || this.comment == '') {
      this.snackBar.open('Lütfen bütün bilgileri doldurunuz.', 'x');
    } else {
      let comment=
        {username:this.username,
        comment: this.comment}

      this.article[this.id].comments.push(comment);
      this.articles.updateArticle(this.article[this.id]).subscribe((res)=>{
        this.username = '';
        this.comment = '';
        this.getArticle();
      });
    }
  }
  getArticle(){
    this.articles.getArticle().subscribe((res) => {
      this.article = res;
    });
  }
}
