import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MissionComponent } from './mission/mission.component';
import { ProjetComponent } from './projet/projet.component';


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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
