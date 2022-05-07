import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsNotLoggedGuard } from 'src/app/_guard/is-not-logged.guard';
import { EstablishmentCommentsComponent } from './establishment-comments/establishment-comments.component';
import { EstablishmentDetailsComponent } from './establishment-details/establishment-details.component';
import { NewEstablishmentComponent } from './new-establishment/new-establishment.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewEstablishmentComponent
  },
  {
    path: ':id',
    component: EstablishmentDetailsComponent
  },
  {
    path: 'comment',
    component: EstablishmentCommentsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentRoutingModule {
}
