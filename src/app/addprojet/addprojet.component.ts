import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import {Projet} from '../model/projet.model';
import { CollabmissionService } from 'src/services/collabmission.service';

@Component({
  selector: 'app-addprojet',
  templateUrl: './addprojet.component.html',
  styleUrls: ['./addprojet.component.css']
})
export class AddprojetComponent implements OnInit {

  constructor(private collabmissionservice:CollabmissionService) { }

  ngOnInit(): void {
    this.onget();
  }
myProjet:Projet[]=[];
projet:Projet = new Projet();
projets;

reactiveForm = new FormGroup({
  intitule: new FormControl(''),
  nbTache: new FormControl(''),
    budget: new FormControl(''),
    date_livraison: new FormControl('')
   
    });

    onget(){
      this.collabmissionservice.findProjet()
      .subscribe(data=>{
        this.projets=data;
      },err=>{
        console.log(err);
      })
      
    }




saveProjet(){
      this.collabmissionservice.saveProjet(this.projet)
      .subscribe((pro)=>{
        this.myProjet=[pro, ...this.myProjet]
      })
    }
 
}
