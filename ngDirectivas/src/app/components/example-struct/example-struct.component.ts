import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-struct',
  templateUrl: './example-struct.component.html',
  styleUrls: ['./example-struct.component.css']
})
export class ExampleStructComponent implements OnInit {

  rol: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarRol(){
    this.rol = !this.rol; // true <=> false
  }

}
