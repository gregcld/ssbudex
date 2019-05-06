import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(articles: any, filter: any): any {
    if(filter === undefined)
      return articles;
    return articles.filter(function(article){
      return article.title.toLowerCase().includes(filter.toLowerCase())
          || article.id == filter
          || article.content.toLowerCase().includes(filter.toLowerCase())
          || article.authors.toLowerCase().includes(filter.toLowerCase());

    })
  }

}
