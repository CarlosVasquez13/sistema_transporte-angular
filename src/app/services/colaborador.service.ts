import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ColaboradorService {
  API_URL = 'http://localhost:3001/api';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.API_URL}/colaborador/lista`);
  }

  addColaboradorToSucursal(
    idSucursal: number,
    idUsuario: number,
    distancia: number
  ) {
    return this.http.post(`${this.API_URL}/sucursal/colaborador_sucursal`, {
      idSucursal: idSucursal,
      idUsuario: idUsuario,
      distancia: distancia,
    });
  }
}
