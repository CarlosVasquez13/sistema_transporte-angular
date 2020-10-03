import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SucursalesService {
  API_URL = 'http://localhost:3001/api';
  constructor(private http: HttpClient) {}

  getSucursales() {
    return this.http.get(`${this.API_URL}/sucursal/lista`);
  }
}
