import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PatientsComponent } from './patients.component';
import { PatientsRoutes } from './patients.routing';

const imports: any = [PatientsRoutes, CommonModule];
const declarations: any = [PatientsComponent];
@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...imports, ...declarations],
})
export class PatientsModules {}
