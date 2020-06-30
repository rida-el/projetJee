import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { ProjetCollab } from '../model/projetCollab.module';
import { CollabmissionService } from 'src/services/collabmission.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor( private collabmissionservice:CollabmissionService) { }
collaborateurs;
projets;
  ngOnInit(): void {
    this.onGetCollab();
    this.onGetProjet();
  }

projetCollab:ProjetCollab=new ProjetCollab();
  projetCollabform = new FormGroup({
    vht: new FormControl(''),
    collab: new FormControl(''),
    projet: new FormControl('')
    
    
    });

 onGetCollab(){
   this.collabmissionservice.findAll()
   .subscribe(data=>{
     this.collaborateurs=data;

   },err=>{
     console.log(err);
   })
 }  
 
 onGetProjet(){
   this.collabmissionservice.findProjet()
   .subscribe(data=>{
     this.projets=data;
   },err=>{
     console.log(err);
   })
 }

 saveProjetCollab(){
  let projetcollab:ProjetCollab=new ProjetCollab();
  projetcollab=this.projetCollabform.value;
  this.collabmissionservice.addprojetcollab(projetcollab)
  .subscribe(data =>{
    this.onGetCollab;
  },err=>{
    console.log(err);
  })
  


  }

}
