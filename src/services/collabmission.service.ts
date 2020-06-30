import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ChefProjet } from 'src/app/model/chefprojet.model';
import { GestionnaireProjet } from 'src/app/model/gestionnaireProjet.model';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Projet } from 'src/app/model/projet.model';
import { Mission } from 'src/app/model/mission.module';




@Injectable({
    providedIn: 'root'
})
export class CollabmissionService{
  
public host="http://localhost:8090";
    constructor(private http: HttpClient){
    }


findAll(){
return this.http.get("http://localhost:8090/collaborateurs");
}

findMission(){
return this.http.get(this.host+'/missions');
}



public findProjet(){
    return this.http.get(this.host+'/projets');

}




saveChefprojet(chefprojet:ChefProjet){
    return this.http.post<ChefProjet>("http://localhost:8090/chefProjets",chefprojet);
}

saveProjet(projet:Projet){
    return this.http.post<Projet>(this.host+'/projets',projet)
}

saveMission(mission:Mission){
    return this.http.post<Mission>(this.host+'/missions',mission)
}


saveGestionnaireProjet(gestionnaireProjet:GestionnaireProjet){
    return this.http.post<GestionnaireProjet>("http://localhost:8090/gestionnaireProjets",gestionnaireProjet);
}

getmission(){
    return this.http.get("http://localhost:8090/missions");

}

public deletmembre(url){
    return this.http.delete(url);
 }


dailyForecast() {
    return this.http.get("http://localhost:8090/projets")
    .map(result => result);    
  }


public  saveChef(id,chefProjet:ChefProjet)
  {
      return this.http.post<ChefProjet> ('http://localhost:8090/collaborateurs/addChef/'+id
      ,chefProjet)
  }

public  saveGestionnaire(id,gestionnaireProjet:GestionnaireProjet)
  {
      return this.http.post<GestionnaireProjet> ('http://localhost:8090/collaborateurs/addGestionnaire/'+id
      ,gestionnaireProjet)
  }  



  ongetmissionbycollab(id){
    return this.http.get(this.host+'/collaborateurs/'+id+'/mission');
}
missioncollab(c){
    return this.http.get(c._links.mission.href);
}


addmission(mission){
    return this.http.post(this.host+'/missions/add',mission);
}

addprojetcollab(projetcollab){
    return this.http.post(this.host+'/projetCollabs/add',projetcollab);
}


findByprojet(id){
    return this.http.get(this.host+'/projets/findCollab/'+id);
}

findBycollab(id){
    return this.http.get(this.host+'/collaborateurs/findProjet/'+id);

}

findByvht(id){
    return this.http.get(this.host+'/collaborateurs/findVht/'+id);
}

findBudget(){
    return this.http.get(this.host+'/projets/findBudget');
}

}