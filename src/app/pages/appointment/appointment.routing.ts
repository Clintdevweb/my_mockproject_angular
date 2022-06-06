
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';

const routes: Routes = [
  { path: '', component: AppointmentComponent },
  { path: 'new-appointment', component: NewAppointmentComponent },
];

export const AppointmentRoutes = RouterModule.forChild(routes);
