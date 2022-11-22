import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-ngzone',
  templateUrl: './ngzone.component.html',
  styleUrls: ['./ngzone.component.css']
})
export class NgzoneComponent implements OnInit {

  progreso: number = 0; //Valor que va a ir de 0% a 100%
  texto: string = ''; //Dentro / Fuera de Angular Zone

  constructor(private _ngZone: NgZone) {}

  ngOnInit(): void {
  }

  /**
  //  * Método para incrementar de 0 a 100 el valor de progreso
  //  * @param terminar Callback que se ejecuta al terminar el incremento
  */
  incremtarProgreso(terminar: () => void){

    

    if(this.progreso < 100){
      this.progreso +=1; //incrementamos el progreso
      console.log(`Progreso Actual: ${this.progreso}%`);
      window.setTimeout(() => { 
        this.incremtarProgreso(terminar);
      }, 10);
    }else{
      //ya habría terminado de incrementarse
      //ejecutamos el callback
      terminar();
    }
  }
  /**
   * Método que incrementa el Progreso
   * dentro NGZONE
   * Inplica que los cambios se ven en el HTML
   */
  aumentarDentroNgZone(){
    this.texto = 'DENTRO';
    this.progreso = 0;
    this.incremtarProgreso(
      () => console.log(`${this.texto} de Angular Zone: Incremento terminado`)
    )
  }

  /**
   * Método que incrementa el Progreso
   * FUERA NGZONE
   * Inplica que los cambios se ven en el HTML
   */
   aumentarFueraNgZone(){
    this.texto = 'FUERA';
    this.progreso = 0; // lo reseteamos para la ejecuciçon desde 0%

    //Ejecutamos fuera de Angular Zone
    this._ngZone.runOutsideAngular(() => {
      this.incremtarProgreso(
        () => {
          
          //Cuando termine de Incrementar
          //Es cuando pasamos a ejecutar en Angular Zone de nuevo
          // Volvemos a reacoplar el componente TS y HTML
          this._ngZone.run(() => 
            console.log(`${this.texto} de Angular Zone: Incremento terminado`)
          );          
        }
      );
    });    
  }
}
