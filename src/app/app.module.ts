import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddfriendsComponent } from './addfriends/addfriends.component';
import { ViewfriendsComponent } from './viewfriends/viewfriends.component';
import { SearchfriendsComponent } from './searchfriends/searchfriends.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'

const myRoutes:Routes=[
  {
    path:"",
    component:ViewfriendsComponent
  },
  {
    path:"add",
    component:AddfriendsComponent
  },
  {
    path:"search",
    component:SearchfriendsComponent
  }
]

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
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
