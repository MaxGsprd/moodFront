import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsNotLoggedGuard } from 'src/app/_guard/is-not-logged.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InscriptionComponent } from "./inscription/Inscription.component";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [IsNotLoggedGuard]
    },
    {
      path: 'signin',
      component: InscriptionComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: 'forget-password',
      component: ForgotPasswordComponent
    },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
