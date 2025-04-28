import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'list', component: UserListComponent, canActivate: [authGuard] },
  { path: 'form', component: UserFormComponent },
  { path: '**', redirectTo: 'form' }
];