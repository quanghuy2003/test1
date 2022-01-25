import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {GalleryConfig} from './image-gallery/token';
import {HttpClientModule} from "@angular/common/http";
import { ListCityComponent } from './compoment/list-city/list-city.component';
@NgModule({
  declarations: [
    AppComponent,
    ListCityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageGalleryModule,
    HttpClientModule
  ],
  providers: [
    {provide: GalleryConfig, useValue: 3}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
