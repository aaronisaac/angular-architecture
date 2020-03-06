import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartsOneComponent } from './charts-one/charts-one.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesisComponent } from './promesis/promesis.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress'} },
      { path: 'charts-one', component: ChartsOneComponent, data: { title: 'Charts'} },
      { path: 'promises', component: PromesisComponent, data: { title: 'Promises'} },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'Observers'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Account Settings'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    ]
  }
];

export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);