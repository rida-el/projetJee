import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Chart} from 'chart.js';
import * as _ from 'lodash';
import {CollabmissionService} from 'src/services/collabmission.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {

  @Input('data') data= [];
  chart = [];
  constructor(private collabmissionservice:CollabmissionService) { }

  ngOnChanges(){
    
  }
  ngAfterViewInit(){
   

  }
 
  ngOnInit() {
this.addChart();
    
  }

  addChart(){

    this.collabmissionservice.dailyForecast().subscribe(res =>{
      let intitules = res._embedded.projets.intitule;
      let nbTaches = res._embedded.projets.nbTache;

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
            labels: intitules ,
            datasets: [{
                label: '# of Votes',
                data: nbTaches,
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

    })

    
    
  }

}
