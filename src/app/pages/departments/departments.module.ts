import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DepartmentsComponent } from './departments.component';
import { DepartmentsRoutes } from './departments.routing';
const imports: any = [DepartmentsRoutes, CommonModule];
const declarations: any = [DepartmentsComponent];
@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...imports, ...declarations],
})
export class DepartmentsModules {}
