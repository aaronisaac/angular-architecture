import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,
  private _settings: SettingsService) { }

  ngOnInit(): void {
    this.setCheck();
  }

  public changeColor(theme: string, link: any) {
    this.applyCheck(link);
     this._settings.applyTheme(theme);
  }

  public applyCheck(link: any) {
    let selectors: any = document.getElementsByClassName('selector');
    for (let ref of selectors) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  public setCheck() {
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settings.settings.theme;
    for (let ref of selectors) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
