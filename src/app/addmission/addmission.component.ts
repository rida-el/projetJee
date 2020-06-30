import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { Mission } from '../model/mission.module';
import { CollabmissionService } from 'src/services/collabmission.service';

@Component({
  selector: 'app-addmission',
  templateUrl: './addmission.component.html',
  styleUrls: ['./addmission.component.css']
})
export class AddmissionComponent implements OnInit {


collaborateurs;
  mission:Mission=new Mission();
  //myMission:Mission[]=[];
  constructor( private collabmissionservice:CollabmissionService) { }

  ngOnInit(): void {
    this.ongetcollab();
  }

  missionform = new FormGroup({
    titre: new FormControl(''),
    objectif: new FormControl(''),
    responsable: new FormControl(''),
    collab: new FormControl('')
    
    });


  saveMission(){
    let mission:Mission=new Mission();
    mission=this.missionform.value;
    this.collabmissionservice.addmission(mission)
    .subscribe(data =>{
      this.ongetcollab;
    },err=>{
      console.log(err);
    })
    


    }

  ongetcollab(){
    this.collabmissionservice.findAll()
    .subscribe(data=>{
      this.collaborateurs=data;
    },err=>{
      console.log(err);
    })
  }
    
    
}
