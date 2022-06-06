import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'appointment',
    loadChildren: () =>
      import('./pages/appointment/appointment.module').then(
        (md) => md.AppointmentModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (md) => md.DashBoardModule
      ),
  },
  {
    path: 'doctors',
    loadChildren: () =>
      import('./pages/doctor/doctor.module').then((md) => md.DoctorModules),
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./pages/departments/departments.module').then(
        (md) => md.DepartmentsModules
      ),
  },
  {
    path: 'chats',
    loadChildren: () =>
      import('./pages/chats/chats.module').then((md) => md.ChatsModules),
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./pages/departments/departments.module').then(
        (md) => md.DepartmentsModules
      ),
  },
  {
    path: 'calls',
    loadChildren: () =>
      import('./pages/calls/calls.module').then((md) => md.CallsModules),
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./pages/patients/patients.module').then(
        (md) => md.PatientsModules
      ),
  },

  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
