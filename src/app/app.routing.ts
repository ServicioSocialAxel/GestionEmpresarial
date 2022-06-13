import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { UnidadesComponent } from './components/unidades/unidades.component';
import { EvaluacionesComponent } from './components/evaluaciones/evaluaciones.component';

//Defining routes
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recursos/:id', component: RecursosComponent},
  {path: 'unidades/:id', component: UnidadesComponent},
  {path: 'evaluaciones/:id', component: EvaluacionesComponent},
  {path: '**', component: HomeComponent}
];

  //{path: 'settings', component:UserEditComponent, canActivate: [IdentityGuard]}

//Importing configuration
export const routingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' });

