import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  title: 'Hi';
  progressOne: number = 50;
  progressTwo: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
