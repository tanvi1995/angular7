import { Component, OnInit } from '@angular/core';
import { ActivatedRoute}  from "@angular/router";
import { RestApiUsersServiceService } from './../../services/rest-api-users-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  styleUrls: ['./device-page.component.css']
})
export class DevicePageComponent implements OnInit {

activePath:any
selectedProduct: any

  constructor(private userService:RestApiUsersServiceService, private router:Router) { }

  ngOnInit() {
   this.getProductData()
  }
 getProductData(){
    this.userService.getRemoteUsers().subscribe((response) =>{
      this.selectedProduct = response
      console.log(this.selectedProduct)
    })
  }
}
