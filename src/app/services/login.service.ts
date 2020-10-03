import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userToLogin } from '../models/user-to-login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API_URL = 'http://localhost:3001/api/login';
  constructor(private http: HttpClient) {}

  loginColaborador(data: userToLogin) {
    return this.http.post(`${this.API_URL}/colaborador`, data);
  }

  loginTransportista(data: userToLogin) {
    return this.http.post(`${this.API_URL}/transportista`, data);
  }
}
