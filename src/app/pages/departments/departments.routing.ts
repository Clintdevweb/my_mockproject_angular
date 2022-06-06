import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments.component';

const routes: Routes = [{ path: '', component: DepartmentsComponent }];

export const DepartmentsRoutes = RouterModule.forChild(routes);
