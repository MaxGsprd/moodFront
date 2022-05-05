import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsNotLoggedGuard } from 'src/app/_guard/is-not-logged.guard';
import { AdminCommentsComponent } from './admin-comments/admin-comments.component';
import { AdminEstablishmentComponent } from './admin-establishment/admin-establishment.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'comments',
    component: AdminCommentsComponent
  },
  {
    path: 'editor',
    component: AdminEstablishmentComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
