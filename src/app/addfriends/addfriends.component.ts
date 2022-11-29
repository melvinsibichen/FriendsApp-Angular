import { Component } from '@angular/core';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent {
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""


readValues=()=>
{
 let data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
 console.log(data)
}
}
