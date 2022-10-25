import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mytweet',
  templateUrl: './mytweet.component.html',
  styleUrls: ['./mytweet.component.css']
})
export class MytweetComponent implements OnInit {

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
      console.log(resp)
      }
    )
   
  
        this.post
  }

fetchData=()=>{
  let data={
    "userid":localStorage.getItem("stored_id"),
    
  }
  console.log(data)
  this.myapi.myTweet(data).subscribe(
    (resp)=>{
      this.dataD=resp
    }
  )
}
  

  dataD:any=[]
  ngOnInit(): void {
  }

}
