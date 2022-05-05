import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsNotLoggedGuard } from 'src/app/_guard/is-not-logged.guard';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { GroupsComponent } from './groups/groups.component';
const routes: Routes = [
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'detail',
    component: GroupDetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule {
}
