import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from "@angular/forms";

import { PAGE_ROUTES } from './pages.routing';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartsOneComponent } from './charts-one/charts-one.component';

// Third Party
import { ChartsModule } from 'ng2-charts';

// Temp
import { IncrementComponent } from '../components/increment/increment.component';
import { DoughnutChartComponent } from '../components/doughnut-chart/doughnut-chart.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        ChartsOneComponent,
        IncrementComponent,
        DoughnutChartComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        ChartsOneComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        ChartsModule,
        PAGE_ROUTES
    ]
})

export class PagesModule {}