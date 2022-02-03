import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';

import { lookupListToken, lookupLists } from './providers';
import { HttpClientModule , HttpXhrBackend} from '@angular/common/http';
import { MockXHRBackend } from './mock-xhr-backend';
import { CategoryListComponent } from './category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [
    {provide: lookupListToken , useValue: lookupLists},
    {provide: HttpXhrBackend, useClass: MockXHRBackend}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
