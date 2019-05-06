import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../article/article';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private articles : Article[]/*Observable<Article[]>*/;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(articles  => this.articles = articles);
  }

 delete(article: Article) {
    this.articleService.delete(article.id).subscribe(() => {
      this.articleService.getArticles().subscribe(articles  => this.articles = articles);
    });
 }

}