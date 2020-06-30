import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { CollabmissionService } from 'src/services/collabmission.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  
  constructor(private http:HttpClient,private collabmissionservice:CollabmissionService) { }
  public listMission;
  missions;
  mission;
  miss;
  collaborateurs;
  public currntCollab;
  ngOnInit() {
    
    this.onget();
    this.getMission();
  }

get(m){
  this.currntCollab=m;
  this.http.get("http://localhost:8090/collaborateurs/"+m.id+"/mission")
  .subscribe(data=>{
    this.mission=data;
  },err=>{
    console.log(err);
  })
}
 
onget(){
  this.collabmissionservice.findMission()
  .subscribe(data=>{
  this.miss=data;
  },err=>{
    console.log(err);
  })
}


 

  getMission(){
    this.collabmissionservice.findAll()
    .subscribe(data=>{
      this.listMission=data;
    },err=>{
      console.log(err);
    })
  }


 



   
 
   
    
}
