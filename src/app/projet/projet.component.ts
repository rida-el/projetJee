import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { Projet } from '../model/projet.model';


@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  projets = [
    {
      intitule: 'projet-x',
      nbTache: 19
    },
    {
      intitule: 'projet-y',
      nbTache: 30
    },
  ]
  projet:Projet=new Projet();
  
  constructor() { }

  ngOnInit(): void {
  }



  Projetform = new FormGroup({
    intitule: new FormControl(''),
    nbTache: new FormControl('')
    
    });


    addProjet(){
      this.projets = [this.projet,...this.projets];
      console.log("e");
    }

   
}
