import { Injectable } from '@angular/core';
import unidades from './json/unidades.json'
import autoevaluaciones from './json/autoevaluaciones.json';
import glosario from './json/glosario.json';
import { saveAs } from "file-saver"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getUnidades(){
    return unidades;
  }

  getAutoevaluaciones(){
    return autoevaluaciones;
  }

  getGlosario(){
    return glosario;
  }

  writeJSON(data: any){
    const blob = new Blob([JSON.stringify(data)], {type : 'application/json'});
    //saveAs(blob, './json/test.json');
    this.http.post('./json/test.json', JSON.stringify(data));
  }

}
