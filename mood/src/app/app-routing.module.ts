import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationsComponent } from './components/invitations/invitations.component';
import { GroupsComponent } from './layouts/groups/groups.component';
import { HomepageComponent } from "./layouts/homepage/Homepage.component";

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
    path: 'groups',
    component: GroupsComponent
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
