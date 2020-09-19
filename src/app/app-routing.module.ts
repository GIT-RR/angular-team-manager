import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksPageComponent } from './features/tasks/pages/tasks-page/tasks-page.component';
import { MembersPageComponent } from './features/members/pages/members-page/members-page.component';
import { MemberEditPageComponent } from './features/members/pages/member-edit-page/member-edit-page.component';
import { MemberAddPageComponent } from './features/members/pages/member-add-page/member-add-page.component';

const routes: Routes = [
  { path: 'tasks', component: TasksPageComponent },
  {
    path: 'members',
    component: MembersPageComponent,
  },
  { path: 'members/add', component: MemberAddPageComponent },
  { path: 'members/edit/:id', component: MemberEditPageComponent },
  { path: '**', redirectTo: 'members' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
