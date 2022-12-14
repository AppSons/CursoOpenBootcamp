import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngChangeDetection';

  //Variable para ejemplo de Reattach
  live: boolean = true;

  //Valores para ejemplo de Async Pipe 
  items = [{}];
  items$ = new BehaviorSubject(this.items);//le pasamos un valor por defecto

  addItem(){
    const nuevoItem = Math.floor(Math.random() * 100) +1;

    this.items.push(
      {
        numero: nuevoItem
      }
    );
    //Emitimos un nuevo valor de la lista de items
    // al componente suscrito
    this.items$.next(this.items);
  }
}
