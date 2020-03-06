import { Component, OnInit } from '@angular/core';

declare function init_plugin();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  template: ''
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugin();
  }

}
