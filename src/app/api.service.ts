import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  signupData=(data:any)=>{
    return this.http.post("http://localhost:8080/adduser",data)
  }

login=(data:any)=>{
  return this.http.post("http://localhost:8080/login",data)
}



addPost=(data:any)=>{
  return this.http.post("http://localhost:8080/addpost",data)
}

viewPost=()=>{
  return this.http.get("http://localhost:8080/viewpost")

}

myTweet=(data:any)=>{
  return this.http.post("http://localhost:8080/single",data)
}

}
