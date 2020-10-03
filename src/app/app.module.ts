import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LoginColaboradorComponent } from './components/login-colaborador/login-colaborador.component';
import { LoginTransportistaComponent } from './components/login-transportista/login-transportista.component';
import { MainColaboradorComponent } from './components/main-colaborador/main-colaborador.component';
import { MainTransportistaComponent } from './components/main-transportista/main-transportista.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ReporteComponent } from './components/reporte/reporte.component';

/* Services */
import { LoginService } from './services/login.service';
import { SucursalesService } from './services/sucursales.service';
import { ReporteService } from './services/reporte.service';
import { AddColaboradorComponent } from './components/add-colaborador/add-colaborador.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginColaboradorComponent,
    LoginTransportistaComponent,
    MainColaboradorComponent,
    MainTransportistaComponent,
    SucursalesComponent,
    ReporteComponent,
    AddColaboradorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [LoginService, SucursalesService, ReporteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
