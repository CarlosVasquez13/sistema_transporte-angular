import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultRequest } from '../../models/error-request';

/* Services */
import { SucursalesService } from '../../services/sucursales.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css'],
})
export class SucursalesComponent implements OnInit {
  Result: ResultRequest = {
    Error: false,
    Response: '',
    Success: true,
    Item: [],
    Items: [],
  };
  constructor(
    private sucursalesServices: SucursalesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sucursalesServices.getSucursales().subscribe(
      (res: any) => {
        if (res.Success) {
          this.Result = {
            Error: false,
            Response: res.Response,
            Success: true,
            Item: [],
            Items: res.Items,
          };
        } else {
          this.Result = {
            Error: true,
            Response: 'Ups! Ha ocurrido un erro.',
            Success: false,
            Item: [],
            Items: [],
          };
          console.log('res', res);
        }
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
