import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewfriends',
  templateUrl: './viewfriends.component.html',
  styleUrls: ['./viewfriends.component.css']
})
export class ViewfriendsComponent {
  constructor(private api:ApiService)
  {
    api.fetchData().subscribe(
     (response)=> {
      this.friends=response
      
     }
  )}
  friends:any=[]

}
