import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogingComponent } from './bloging/bloging.component';
import { AllCouseComponent } from './all-couse/all-couse.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogingComponent,
    AllCouseComponent,
    ContactComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
