import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  //changeDetection: ChangeDetectionStrategy.Default
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {

  /**valor que se incrementará cada segundo en archivo TS
    * y que dependiendo de la estrateggia de ChangeDetection
    * van a poder verse en el HTML
  */
  segundos:number = 0;

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      // Incrementamos el valor de segundos
      this.segundos ++;
      //Mostramos el valor por consola
      console.log(`Segundos Transcurridos: ${this.segundos} segundos`);
    }, 1000);
  }

}
