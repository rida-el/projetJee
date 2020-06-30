import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Chart} from 'chart.js';
import * as _ from 'lodash';

@Component({
  selector: 'app-projetcollab',
  templateUrl: './projetcollab.component.html',
  styleUrls: ['./projetcollab.component.css']
})
export class ProjetcollabComponent implements OnInit ,OnChanges {
  @Input('data')data = [];

  
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    this.getChart();
  }

  ngAfterViewInit(){
    this.getChart();
  }


  getChart(){

    const intitule=_.map(this.data,'intitule');
    const budget=_.map(this.data,'budget');

    var myChart = new Chart('myChart', {
      type: 'bar',
      data: {
          labels:intitule,
          datasets: [{
              label: 'budget Projet',
              data: budget,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }
}
