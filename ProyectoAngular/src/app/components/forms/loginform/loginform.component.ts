import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.login('eve.holt@reqres.in','cityslicka')
      .subscribe(
        (response) => {
          console.log('Respuesta Login', response);
          sessionStorage.setItem('token', response.token);
        },
        (error) => console.error(`Ha ocurrido un error en el proceso de login: ${error}`),
        () => console.info('Se ha completado la llamada de login a Reqres')
      );
  }

}
