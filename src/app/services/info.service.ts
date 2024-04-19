import { Injectable } from '@angular/core';
import unidades from './json/unidades.json';
import autoevaluaciones from './json/es/autoevaluaciones.json';
import { Glossary } from './model/glossary';
import glosario from './json/es/glosario.json';
import definiciones from './json/es/definiciones.json';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor(private http: HttpClient) {}

  getUnidades() {
    return unidades;
  }

  getAutoevaluaciones() {
    return autoevaluaciones;
  }

  getGlossary(): Observable<Glossary> {
    glosario.definitions = definiciones;
    return of(glosario).pipe(tap((_) => {}));
  }

  writeJSON(data: any) {
    this.http.post('./json/test.json', JSON.stringify(data));
  }
}
