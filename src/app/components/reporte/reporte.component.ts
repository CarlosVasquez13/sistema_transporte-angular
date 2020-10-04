import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReporteService } from '../../services/reporte.service';
import { ResultRequest } from '../../models/error-request';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css'],
})
export class ReporteComponent implements OnInit {
  constructor(
    public modal: NgbModal,
    private resportsService: ReporteService
  ) {}

  Result: ResultRequest = {
    Error: false,
    Response: '',
    Success: false,
    Item: [],
    Items: [],
  };

  datesSelect: { fechaInicial: Date; fechaFinal: Date; error: boolean } = {
    fechaInicial: null,
    fechaFinal: null,
    error: false,
  };

  SelectedUser: { select: boolean; error: boolean; user: any } = {
    select: false,
    error: false,
    user: {},
  };

  ngOnInit(): void {
    this.resportsService.getTransportistas().subscribe((res: any) => {
      if (res.Success) {
        this.Result = {
          Error: false,
          Response: res.Response,
          Success: res.Success,
          Item: [],
          Items: res.Items,
        };
      }
      console.log('res', res);
    });
  }

  selectUser(user) {
    this.SelectedUser = {
      select: true,
      user: user,
      error: false,
    };
  }

  newReport() {
    let goOn = true;
    if (!this.SelectedUser.select) {
      this.SelectedUser.error = true;
      goOn = false;
    }
    if (
      this.datesSelect.fechaFinal == null ||
      this.datesSelect.fechaInicial == null
    ) {
      this.datesSelect.error = true;
      goOn = false;
    } else {
      this.datesSelect.error = false;
    }

    if (goOn) {
      this.resportsService
        .getReport({
          fechaInicial: this.datesSelect.fechaInicial,
          fechaFinal: this.datesSelect.fechaFinal,
          idTransportista: this.SelectedUser.user.id,
        })
        .subscribe((res: any) => {
          console.log(res);
        });
    }
  }
}
