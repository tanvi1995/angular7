import { RestApiUsersServiceService } from './../../services/rest-api-users-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-users-apicomponent',
  templateUrl: './users-apicomponent.component.html',
  styleUrls: ['./users-apicomponent.component.css']
})
export class UsersAPIComponentComponent implements OnInit {

allUsers: any
  constructor(private userService:RestApiUsersServiceService, private router:Router) { }

  ngOnInit() {
    this.getAPIData()
  }

  getAPIData(){
    this.userService.getRemoteUsers().subscribe((response) =>{
      this.allUsers = response
      console.log(this.allUsers)
    })
  }

  user={
    "name":"tanvi",
    "email":"abc@gmail.com",
    "address":{
      "geo":{
        "lat":"88.88",
        "lng":"88.88"
      }
    }
  }
  postUser(){
    this.userService.createUser(this.user).subscribe((response) => {
      console.log(response);
      
    })
  }


  deleteUser(id){
    console.log("Index value: " + id);
    this.userService.delUser(id).subscribe((response)=>{
      console.log(response);
      this.userService.getRemoteUsers().subscribe((response) =>{
      this.allUsers = response
    })
    })
  }

  viewDetail(id){
    console.log(id);
    this.router.navigate(["/remoteData",id])
    
  }
}
