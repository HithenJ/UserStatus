
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatussrvcService } from '../status/statussrvc.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'
  
  ]
}) 
export class UserdetailsComponent implements OnInit {
 
  users:any;
userdata:any=[];
  constructor(private https:StatussrvcService) {
 
    this.https.users().subscribe(data=>{
      console.warn(data);
      this.userdata=data;

    })
    }
  
  ngOnInit(): void {
   
  
  }

}