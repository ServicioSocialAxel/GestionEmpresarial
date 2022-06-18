import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, routingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { UnidadesComponent } from './components/unidades/unidades.component';
import { UnidadComponent } from './components/unidad/unidad.component';
import { HtmlObjetPipe } from './pipes/html-objet.pipe';
import { EvaluacionesComponent } from './components/evaluaciones/evaluaciones.component';
import { FormsModule } from '@angular/forms';
import { GlosarioComponent } from './components/glosario/glosario.component';
import { DataTablesModule } from 'angular-datatables';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecursosComponent,
    UnidadesComponent,
    UnidadComponent,
    HtmlObjetPipe,
    EvaluacionesComponent,
    GlosarioComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    PdfViewerModule
  ],
  providers: [
    routingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
