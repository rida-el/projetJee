import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ChefProjet } from 'src/app/model/chefprojet.model';
import { GestionnaireProjet } from 'src/app/model/gestionnaireProjet.model';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';




@Injectable({
    providedIn: 'root'
})
export class CollabmissionService{

    constructor(private http: HttpClient){
    }


findAll(){
return this.http.get("http://localhost:8080/collaborateurs");
}

saveChefprojet(chefprojet:ChefProjet){
    return this.http.post<ChefProjet>("http://localhost:8080/chefProjets",chefprojet);
}


saveGestionnaireProjet(gestionnaireProjet:GestionnaireProjet){
    return this.http.post<GestionnaireProjet>("http://localhost:8080/gestionnaireProjets",gestionnaireProjet);
}

getmission(){
    return this.http.get("http://localhost:8080/missions");

}

public deletmembre(url){
    return this.http.delete(url);
 }


dailyForecast() {
    return this.http.get("http://localhost:8080/projets")
    .map(result => result);
      
  }


}