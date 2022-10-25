import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tweetpage',
  templateUrl: './tweetpage.component.html',
  styleUrls: ['./tweetpage.component.css']
})
export class TweetpageComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

post=""
 
  id=localStorage.getItem("stored_id")
 
  readvalue=()=>{
    let data={
      "userid":localStorage.getItem("stored_id"),
 "post":this.post
    }
    console.log(data)
    this.myapi.addPost(data).subscribe(

      (resp)=>{
      
      }
    )
    this.fetchData()
        this.post
  }

  fetchData=()=>{
this.myapi.viewPost().subscribe(
  (resp)=>{
    this.dataD=resp
  }

)

  }

  dataD:any=[]
  ngOnInit(): void {
  }

}
