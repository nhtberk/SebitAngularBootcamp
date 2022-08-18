import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: any;
  constructor(private article: ArticleService) { }

  ngOnInit(): void {
    this.article.getArticle().subscribe((res)=>{
      this.articles = res;
    })
  }

}
