import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations:[],
    imports:[
        CommonModule
    ]
})

export class Mission {
    titre: string;
    objectif: string;
    responsable: string;
    collab:number;

}