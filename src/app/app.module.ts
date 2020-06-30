import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { CollabmissionService } from 'src/services/collabmission.service';
import { MissionComponent } from './mission/mission.component';
import { ProjetComponent } from './projet/projet.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MatIconModule} from '@angular/material/icon';
import { AddprojetComponent } from './addprojet/addprojet.component';
import { AddmissionComponent } from './addmission/addmission.component';
import { ProjetcollabComponent } from './projetcollab/projetcollab.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    CollaborateurComponent,
    MissionComponent,
    ProjetComponent,
    DashboardComponent,
    
    AddprojetComponent,
    AddmissionComponent,
    ProjetcollabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatIconModule,
    BrowserAnimationsModule,MatInputModule,MatFormFieldModule,
    MatSelectModule,HttpClientModule,MatButtonModule,
    FormsModule, ReactiveFormsModule

  ],
  providers: [CollabmissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
