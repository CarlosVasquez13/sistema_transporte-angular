import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  API_URL = 'http://localhost:3001/api/';

  constructor(private http: HttpClient) {}

  getTransportistas() {
    return this.http.get(`${this.API_URL}transportista/lista`);
  }

  getReport(data) {
    console.log('data', data);
    return this.http.post(`${this.API_URL}transportista/reporte`, data);
  }
}
