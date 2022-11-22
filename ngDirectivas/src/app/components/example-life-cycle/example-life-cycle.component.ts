import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-life-cycle',
  templateUrl: './example-life-cycle.component.html',
  styleUrls: ['./example-life-cycle.component.css']
})
export class ExampleLifeCycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
