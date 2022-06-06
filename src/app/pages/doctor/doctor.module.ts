import { NgModule } from '@angular/core';
import { DoctorComponent } from './doctor.component';
import { CommonModule } from '@angular/common';

import { IconModule } from 'src/assets/icons/icon.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { NewDoctorComponent } from './new-doctor/new-doctor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorRoutes } from './doctor.routing';
@NgModule({
  imports: [
    IconModule,
    CardModule,
    BadgeModule,
    DialogModule,
    MenuModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    DoctorRoutes
  ],
  declarations: [DoctorComponent, NewDoctorComponent],
  exports: [DoctorComponent, NewDoctorComponent],
})
export class DoctorModules {}
