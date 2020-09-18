import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { TasksComponent } from './tasks/tasks.component';
import { MemberEditPageComponent } from './pages/member-edit-page/member-edit-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  {
    path: 'members',
    component: MembersComponent,
  },
  { path: 'members/edit/:id', component: MemberEditPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
