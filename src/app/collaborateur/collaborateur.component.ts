import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {CollabmissionService} from 'src/services/collabmission.service';
import { ChefProjet } from '../model/chefprojet.model';
import { GestionnaireProjet } from '../model/gestionnaireProjet.model';



@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  public collaborateurs;
  public missions;
 

  chefProjet:ChefProjet=new ChefProjet();
  mychefprojet: ChefProjet[]=[];
  gestionnaireProjet:GestionnaireProjet=new GestionnaireProjet();
  mygestionnaireProjet:GestionnaireProjet[]=[];

  constructor( private collabmissionservice:CollabmissionService ) { }

  ngOnInit() {
  this.onget();
  this.getmission();
  }


  reactiveForm = new FormGroup({
    nom: new FormControl(''),
    email: new FormControl(''),
    tel: new FormControl(''),
    competence: new FormControl(''),
    nbprojgere: new FormControl('')
    
    
    });



  onget(){
    this.collabmissionservice.findAll()
    .subscribe(data=>{
    this.collaborateurs=data;
    },err=>{
      console.log(err);
    })
  }

  
  getmission(){
    this.collabmissionservice.getmission()
    .subscribe(data=> {
      this.missions=data;
    },err=>{
      console.log(err);
    })
  }
  addChef(id){
    this.collabmissionservice.saveChef(id,this.chefProjet)
    .subscribe((chefp)=>{
      this.mychefprojet=[chefp, ...this.mychefprojet]
    })
  }
  addGestionnaire(id){
    this.collabmissionservice.saveGestionnaire(id,this.gestionnaireProjet)
    .subscribe((gestion)=>{
      this.mygestionnaireProjet=[gestion, ...this.mygestionnaireProjet]
    })
  }

  saveChefProjet(){
    this.collabmissionservice.saveChefprojet(this.chefProjet)
    .subscribe((chef)=>{
      this.mychefprojet=[chef, ...this.mychefprojet]
    })
  }

  saveGestionnaireProjet(){
    this.collabmissionservice.saveGestionnaireProjet(this.gestionnaireProjet)
    .subscribe((gest)=>{
      this.mygestionnaireProjet=[gest, ...this.mygestionnaireProjet]
    })
  }

  ondelet(c){
    let conf=confirm("suuuur !!!");
    if(conf){
      this.collabmissionservice.deletmembre(c._links.self.href)
      .subscribe(data=>{
        this.onget();
      },err=>{
        console.log(err);
      })
    }
  }
  



}
