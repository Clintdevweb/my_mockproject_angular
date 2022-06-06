import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppointmentComponent } from './appointment.component';
import { AppointmentsService } from 'src/app/shared/services/appointments.service';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IconModule } from 'src/assets/icons/icon.module';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { DialogModule } from 'primeng/dialog';

import { AppointmentRoutes } from './appointment.routing';

const imports: any = [
  CommonModule,
  MaterialModule,
  FormsModule,
  TableModule,
  HttpClientModule,
  IconModule,
  ReactiveFormsModule,
  CalendarModule,
  CascadeSelectModule,
  ButtonModule,
  DialogModule,
  AppointmentRoutes,
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideAuth(() => getAuth()),
  provideDatabase(() => getDatabase()),
  provideFirestore(() => getFirestore()),
];

const declarations: any = [
  NewAppointmentComponent,
  ListAppointmentComponent,
  AppointmentComponent,
];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  bootstrap: [AppointmentComponent],
  exports: [...imports, ...declarations],
  providers: [AppointmentsService],
})
export class AppointmentModule {}
