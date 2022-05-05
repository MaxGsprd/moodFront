import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationsComponent } from './components/invitations/invitations.component';
import { GroupsComponent } from './layouts/group/groups/groups.component';
import { HomepageComponent } from "./layouts/homepage/Homepage.component";
import { RoleGuard } from './_guard/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'establishment',
    loadChildren: () => import('./layouts/establishment/establishment.module').then(m => m.EstablishmentModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./layouts/role_manager/admin.module').then(m => m.AdminModule),
    canActivate: [RoleGuard]
  },
  {
    path: 'group',
    loadChildren: () => import('./layouts/group/group.module').then(m => m.GroupModule)
  },
  {
    path: 'invitations',
    component: InvitationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
