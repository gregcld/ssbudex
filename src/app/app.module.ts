import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './article.service';
import { CharacterService } from './character.service';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { CharacterHeaderComponent } from './character-header/character-header.component';
import { CharacterAttributesComponent } from './character-attributes/character-attributes.component';
import { CharactersComponent } from './characters/characters.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { CharacterComponent } from './character/character.component';
import { DropdownModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'primeng/chart';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { FilterLicencePipe } from './filter-licence.pipe';
import { PanelModule } from 'primeng/panel';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
    { path: 'create', component: ArticleCreationComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'articles/:id', component: ArticleComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'characters/:id', component: CharacterComponent },
    { path: 'comparison', component: ComparisonComponent },
    { path: '', component: CharactersComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        ArticleComponent,
        ArticlesComponent,
        ArticleCreationComponent,
        FilterLicencePipe,
        FilterPipe,
        CharacterHeaderComponent,
        CharacterAttributesComponent,
        CharactersComponent,
        ComparisonComponent,
        CharacterComponent,
        MenuComponent,

    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        DropdownModule,
        BrowserAnimationsModule,
        ChartModule,
        MenuModule,
        ContextMenuModule,
        TooltipModule,
        CardModule,
        PanelModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [ArticleService, CharacterService],
    bootstrap: [AppComponent]
})
export class AppModule { }
