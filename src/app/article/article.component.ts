import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './article';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @Input("article")
  article: Article;

  @Output()
  deletedArticle: EventEmitter<Article> = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      if (params && params['id']) {
        this.articleService.get(params['id']).subscribe(article => this.article = article);
      }
    });
  }

  delete() {
    this.deletedArticle.emit(this.article);
  }

}
