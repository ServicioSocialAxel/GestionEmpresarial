import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, routingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UnidadesComponent } from './components/unidades/unidades.component';
import { UnidadComponent } from './components/unidad/unidad.component';
import { HtmlObjetPipe } from './pipes/html-objet.pipe';
import { FormsModule } from '@angular/forms';
import { GlosarioComponent } from './components/glosario/glosario.component';
import { DataTablesModule } from 'angular-datatables';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    document.baseURI + 'assets/i18n/',
    '.json'
  );
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnidadesComponent,
    UnidadComponent,
    HtmlObjetPipe,
    GlosarioComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [HttpClient, routingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
