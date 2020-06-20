import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/projet.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projet:Projet[]=[];

  
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
  constructor() { }

  ngOnInit(): void {
  }

}
