import { Component, OnInit, Input } from '@angular/core';
import { Projet } from '../model/projet.model';
import { CollabmissionService } from 'src/services/collabmission.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
 

  chart;
  budget;
  constructor(private collabmissionservice:CollabmissionService) { }

  ngOnInit(): void {
    
  }


  getBudget(){
    this.collabmissionservice.findBudget()
    .subscribe(data=>{
      this.chart=data;
      this.tables();
    },err=>{
      console.log(err);
    })
  }
  tables(){
    this.budget=[];
    for(var i=0;i<this.chart.length;i++){
      var json = {
        "intitule":'',
        "budget":''
      }
      json.intitule = this.chart[i][0];
      json.budget = this.chart[i][1];
      this.budget=[json, ...this.budget];
    };
  }
 


 

}
