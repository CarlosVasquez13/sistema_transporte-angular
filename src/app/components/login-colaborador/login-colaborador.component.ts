import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userToLogin } from '../../models/user-to-login';
import { LoginError } from '../../models/error-request';

/* Services */
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-colaborador',
  templateUrl: './login-colaborador.component.html',
  styleUrls: ['./login-colaborador.component.css'],
})
export class LoginColaboradorComponent implements OnInit {
  dataUser: userToLogin = {
    user: '',
    password: '',
  };

  loginError: LoginError = {
    error: false,
    message: '',
  };

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  closeError() {
    this.loginError.error = false;
  }

  login() {
    this.loginService.loginColaborador(this.dataUser).subscribe(
      (res: any) => {
        if (!res.Success) {
          this.loginError.error = true;
          this.loginError.message = res.Response;
        } else if (res.Error || res.Error == undefined) {
          this.loginError.error = true;
          this.loginError.message = 'Ups! Ha ocurrido un error!';
        } else {
          this.router.navigate(['/main/colaborador']);
          /* redirect */
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
