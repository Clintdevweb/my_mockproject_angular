import { NgModule } from '@angular/core';
import { IconModule } from 'src/assets/icons/icon.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [IconModule, ChartModule, DashboardRoutes],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class DashBoardModule {}
