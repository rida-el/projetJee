import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { Projet } from '../model/projet.model';
import {CollabmissionService} from 'src/services/collabmission.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  public currntProjet;
  collaborateurs;
  projetcollab;
  listeProjet;
  projet:Projet=new Projet();
  projets;
  vhtTotal;
  constructor(private http:HttpClient,private collabmissionservice:CollabmissionService) { }

  ngOnInit() {
    this.ongetProjet();
    this.getCollab();
    
  }


  ongetProjet(){
    this.collabmissionservice.findProjet()
    .subscribe(data=>{
      this.projets=data;
    },err=>{
      console.log(err);
    })
    
  }

  getCollab(){
    
    this.collabmissionservice.findAll()
    .subscribe(data=>{
      this.collaborateurs=data;
    },err=>{
      console.log(err);
    })
  }

  findByProjet(data){
    this.currntProjet=data;
    this.collabmissionservice.findByprojet(data.id)
    .subscribe(data =>{
      this.projetcollab=data;
    },err=>{
      console.log(err);
    })
  }

  findByCollab(data){
    this.collabmissionservice.findBycollab(data.id)
    .subscribe(data=>{
      this.listeProjet=data;
    },err=>{
      console.log(err);
    })
  }

  findByVht(data){
    this.collabmissionservice.findByvht(data.id)
    .subscribe(data=>{
      this.vhtTotal=data;
    },err=>{
      console.log(err);
    })
  }
   
}
