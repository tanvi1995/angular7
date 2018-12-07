import { RestApiUsersServiceService } from './../../services/rest-api-users-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute}  from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

activePath:any
selectedUser: any

  constructor(private active:ActivatedRoute,private userService:RestApiUsersServiceService) { }

  ngOnInit() {
    this.activePath = this.active.snapshot.paramMap.get("userID")
    console.log(this.activePath);
    this.getUser(this.activePath)
  }

getUser(id){
  this.userService.getOneUser(id).subscribe((omg)=>{
    this.selectedUser = omg
  })
}
}
