import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColaboradorService } from '../../services/colaborador.service';
import { ResultRequest } from '../../models/error-request';
import { Colaborador } from '../../models/colaborador';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-colaborador',
  templateUrl: './add-colaborador.component.html',
  styleUrls: ['./add-colaborador.component.css'],
})
export class AddColaboradorComponent implements OnInit {
  Distancia: any = {
    error: false,
    value: 0,
  };

  Result: ResultRequest = {
    Error: false,
    Response: '',
    Success: true,
    Item: [],
    Items: [],
  };

  Selected: Colaborador = {
    direccion: '',
    estado: true,
    id: -1,
    usuario: '',
    nombre: '',
  };
  SelectedError: boolean = false;
  AddUserError: any = {
    error: false,
    message: '',
  };

  constructor(
    public modal: NgbModal,
    private colaboradorsService: ColaboradorService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getColaboradores();
  }

  getColaboradores() {
    this.colaboradorsService.getUsers().subscribe((res: any) => {
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
          Response: res.Response,
          Success: false,
          Item: [],
          Items: [],
        };
      }
    });
  }

  selectUser(user) {
    this.Selected = user;
  }

  addUser() {
    let goOn = true;
    console.log(this.Distancia.value);
    if (this.Distancia.value <= 0) {
      this.Distancia.error = true;
      goOn = false;
    } else {
      this.Distancia.error = false;
    }
    if (this.Selected.id == -1) {
      this.SelectedError = true;
      goOn = false;
    } else {
      this.SelectedError = false;
    }

    if (goOn) {
      this.colaboradorsService
        .addColaboradorToSucursal(
          this.rutaActiva.snapshot.params.id,
          this.Selected.id,
          this.Distancia.value
        )
        .subscribe((res: any) => {
          if (res.Success) {
            this.AddUserError.error = false;
            alert(res.Response);
          } else {
            this.AddUserError = {
              error: true,
              message: res.Response,
            };
          }
        });
    }
  }
}
