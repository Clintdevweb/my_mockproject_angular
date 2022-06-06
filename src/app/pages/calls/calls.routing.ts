import { Routes, RouterModule } from '@angular/router';
import { CallsComponent } from './calls.component';

const routes: Routes = [{ path: '', component: CallsComponent }];

export const CallsRoutes = RouterModule.forChild(routes);
 