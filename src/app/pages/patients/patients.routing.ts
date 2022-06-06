import { Routes, RouterModule } from '@angular/router';

import { DepartmentsComponent } from '../departments/departments.component';

const routes: Routes = [{ path: '', component: DepartmentsComponent }];

export const PatientsRoutes = RouterModule.forChild(routes);
