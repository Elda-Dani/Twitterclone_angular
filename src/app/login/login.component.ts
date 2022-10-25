import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myRouter:Router,private myapi:ApiService) { }

  email=""
  password=""

  readValues=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myapi.login(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
      
          localStorage.setItem("stored_name",resp[0].name)
          localStorage.setItem("stored_id",resp[0].id)
this.myRouter.navigate(["/tweet"])
          
        } else {

          alert("Invalid credentials")
          
        }

      }
    )
  }

  ngOnInit(): void {
  }

}
