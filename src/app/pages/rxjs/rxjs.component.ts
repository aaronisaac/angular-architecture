import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() {

    let counter = 0;
    let Obs = new Observable(observer => {
      let interval = setInterval(() => {
        counter += 1;
        observer.next(counter);

        if (counter === 3) {
          observer.complete();
        }

      }, 1000)
    });

    Obs.subscribe(number => {
      console.log('Subs', number);
    });
  }

  ngOnInit(): void {
  }

}
