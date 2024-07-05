import { Injectable } from '@angular/core';
import unidades from './json/unidades.json';
import autoevaluaciones from './json/es/autoevaluaciones.json';
import { Glossary } from './model/glossary';
import glossary from './json/en/glossary.json';
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
    return of(unidades).pipe(tap((_) => {}));
  }

  getAutoevaluaciones() {
    return autoevaluaciones;
  }

  getGlossary(lang: string): Observable<Glossary> {
    const glssry = lang === 'es' ? glosario : glossary;
    glssry.definitions = definiciones;
    return of(glssry).pipe(tap((_) => {}));
  }

  writeJSON(data: any) {
    this.http.post('./json/test.json', JSON.stringify(data));
  }
}
