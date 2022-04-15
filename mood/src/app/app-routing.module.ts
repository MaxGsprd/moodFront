import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationsComponent } from './components/invitations/invitations.component';
import { GroupsComponent } from './layouts/groups/groups.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { InscriptionComponent } from './layouts/inscription/inscription.component';
import { LoginComponent } from './layouts/login/login.component';
import { ProfileComponent } from './layouts/profile/profile.component';

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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin',
    component: InscriptionComponent
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'invitations',
    component: InvitationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
