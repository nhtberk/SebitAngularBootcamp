import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {
  username: string = '';
  baslik: string = '';
  content: string = '';

  constructor(
    private snackBar: MatSnackBar,
    private article: ArticleService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '250px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Lütfen yazınızı giriniz',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: false,
    toolbarPosition: 'top',
  };

  post() {
    if (this.username == '' || this.baslik == '' || this.content == '') {
      this.snackBar.open('Lütfen bütün bilgileri doldurunuz.', 'x');
    } else {
      this.article
        .postArticle({
          author: this.username,
          title: this.baslik,
          content: this.content,
          comments: []
        })
        .subscribe((res) => {
          console.log(res);
          this.router.navigateByUrl('/home');
        });
    }
  }
}
