import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tweetpage',
  templateUrl: './tweetpage.component.html',
  styleUrls: ['./tweetpage.component.css']
})
export class TweetpageComponent implements OnInit {

  constructor(private myapi:ApiService) { }

post=""
 

  id=localStorage.getItem("stored_id")
 
  readvalue=()=>{
    let data={
      "post":this.post
    }
    console.log(data)
    this.myapi.showPost(data).subscribe(

      (resp)=>{
        console.log(resp)
        this.dataD=resp
        this.post
      }
    )
  }

  dataD:any=[]
  ngOnInit(): void {
  }

}
