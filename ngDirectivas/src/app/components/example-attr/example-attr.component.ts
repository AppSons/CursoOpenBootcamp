import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-attr',
  templateUrl: './example-attr.component.html',
  styleUrls: ['./example-attr.component.css']
})
export class ExampleAttrComponent implements OnInit {

  color: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
