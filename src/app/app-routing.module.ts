import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MissionComponent } from './mission/mission.component';
import { ProjetComponent } from './projet/projet.component';
import { AddprojetComponent } from './addprojet/addprojet.component';
import { AddmissionComponent } from './addmission/addmission.component';
import { ProjetcollabComponent } from './projetcollab/projetcollab.component';
import { FormulaireComponent } from './formulaire/formulaire.component';


const routes: Routes = [

  {
    path :"collaborateur",component:CollaborateurComponent
  },
  {
    path :"dashboard",component:DashboardComponent
  },
  {
    path :"mission",component:MissionComponent
  },
  {
    path:"projet",component:ProjetComponent
  },
  {
    path:"addprojet",component:AddprojetComponent
  },
  {
    path:"addmission",component:AddmissionComponent
  },
  {
    path:"projetcoll",component:ProjetcollabComponent
  },{
    path:"projetcollab",component:FormulaireComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
