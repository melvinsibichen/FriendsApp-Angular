import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddfriendsComponent } from './addfriends/addfriends.component';
import { ViewfriendsComponent } from './viewfriends/viewfriends.component';
import { SearchfriendsComponent } from './searchfriends/searchfriends.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddfriendsComponent,
    ViewfriendsComponent,
    SearchfriendsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
