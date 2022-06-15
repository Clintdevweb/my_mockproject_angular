import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { ChartPipeComponent } from 'src/app/shared/components/chart-pipe/chart-pipe.component';
import { IconModule } from 'src/assets/icons/icon.module';

import { DepartmentsComponent } from './departments.component';
import { DepartmentsRoutes } from './departments.routing';
const imports: any = [DepartmentsRoutes, CommonModule,IconModule, ChartModule,TableModule, CommonModule];
const declarations: any = [DepartmentsComponent, ChartPipeComponent];
@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...imports, ...declarations],
})
export class DepartmentsModules {}
