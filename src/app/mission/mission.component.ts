import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';


@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  missionform = new FormGroup({
    nom: new FormControl(''),
    email: new FormControl(''),
    tel: new FormControl(''),
    competence: new FormControl(''),
    nbprojgere: new FormControl('')
    });

}
