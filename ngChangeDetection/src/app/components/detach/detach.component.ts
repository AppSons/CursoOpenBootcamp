import { Component, OnInit, ChangeDetectorRef, Injectable } from '@angular/core';
import * as Mock from 'mockjs';


@Injectable({
  providedIn: 'root'
})
export class DataListProvider {
  /**
   * Método que devuelve una lista de nombres aleatorios
   * @return {[]} Lista de nombres aleatorios
   */
  get data(){
    const RandomName = Mock.Random;
    return [
        RandomName.first(),
        RandomName.first(),
        RandomName.first(),
        RandomName.first(),
      ];
    
  }
}

@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.css']
})
export class DetachComponent implements OnInit {

  constructor(private _ref: ChangeDetectorRef, public dataListProvider: DataListProvider) {}

  ngOnInit(): void {
    //* Desacoplar el componente del HTML con el método Detach
    this._ref.detach();

    /**
     * *Cuando un Componente está desacoplado(TS y HTML), solo hay dos formas de decirle que 
     * * replique los cambios en le HTML
     * 
     * 1. detectChanges() --> Detectar los cambios en ese momento y actualizar HTML
     * 2. reattach() --> (mostrador en ek otro ejemplo) sirve para volver a acoplar el componente(TS y HTML)
     */
    //Cada 3 segundos, le decimos a Angular que revise los nombres generados
    // es decir, que detecte los cambios en el componente y los reqplique en el HTML

    setInterval(() => {
      //Dtectamos los cambios y reacoplamos puntualmente el componente
      this._ref.detectChanges();
    },3000)
  }

}
