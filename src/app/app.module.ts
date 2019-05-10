import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './article.service';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { CharacterHeaderComponent } from './character-header/character-header.component';
import { CharacterAttributesComponent } from './character-attributes/character-attributes.component';
import { CharactersComponent } from './characters/characters.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { CharacterComponent } from './character/character.component';

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterComponent},
  { path: '', component: CharactersComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    FilterPipe,
    CharacterHeaderComponent,
    CharacterAttributesComponent,
    CharactersComponent,
    ComparisonComponent,
    CharacterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
