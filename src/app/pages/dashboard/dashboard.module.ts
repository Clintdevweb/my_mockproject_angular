import { NgModule } from '@angular/core';
import { IconModule } from 'src/assets/icons/icon.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { DashboardRoutes } from './dashboard.routing';
import { ChartBarComponent } from 'src/app/shared/components/chart-bar/chart-bar.component';
import { LineChartComponent } from 'src/app/shared/components/line-chart/line-chart.component';
import { TableAppointListComponent } from 'src/app/shared/components/table-appoint-list/table-appoint-list.component';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TopListDoctorComponent } from 'src/app/shared/components/top-list-doctor/top-list-doctor.component';

const imports:any[] = [IconModule, ChartModule, DashboardRoutes,TableModule, CommonModule, ];

const declarations:any[] = [DashboardComponent, ChartBarComponent, LineChartComponent, TableAppointListComponent, TopListDoctorComponent];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...imports, ...declarations],
})
export class DashBoardModule {}
