import { Injectable } from '@angular/core';
import { Article } from './article/article';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ArticleData } from './article/article_data';

@Injectable()
export class ArticleService {

  constructor(private http : HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public get(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/articles/${id}`);
  }

  public add(newArticle : ArticleData): Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/articles/", newArticle);
  }

}
