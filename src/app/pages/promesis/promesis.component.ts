import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesis',
  templateUrl: './promesis.component.html',
  styleUrls: ['./promesis.component.css']
})
export class PromesisComponent implements OnInit {

  constructor() {
    let promis = new Promise((resolve, reject) => {
      let counter = 0;
      setInterval(() => {
        counter += 1;
        if(counter === 3) {
          resolve();
        }
      }, 1000)
    });
  }

  ngOnInit(): void {
  }

}
