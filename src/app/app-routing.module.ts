import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { LoginColaboradorComponent } from './components/login-colaborador/login-colaborador.component';
import { LoginTransportistaComponent } from './components/login-transportista/login-transportista.component';
import { MainColaboradorComponent } from './components/main-colaborador/main-colaborador.component';
import { MainTransportistaComponent } from './components/main-transportista/main-transportista.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { AddColaboradorComponent } from './components/add-colaborador/add-colaborador.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  { path: 'main', component: MainComponent },
  {
    path: 'login/colaborador',
    component: LoginColaboradorComponent,
  },
  {
    path: 'login/transportista',
    component: LoginTransportistaComponent,
  },
  {
    path: 'main/colaborador',
    component: MainColaboradorComponent,
  },
  {
    path: 'main/transportista',
    component: MainTransportistaComponent,
  },
  {
    path: 'sucursales',
    component: SucursalesComponent,
  },
  {
    path: 'reporte',
    component: ReporteComponent,
  },
  {
    path: 'sucursales/:nombre/:id/add-colaborador',
    component: AddColaboradorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
