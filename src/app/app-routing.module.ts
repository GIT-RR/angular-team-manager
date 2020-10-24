import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksPageComponent } from './features/tasks/pages/tasks-page/tasks-page.component';
import { MembersPageComponent } from './features/members/pages/members-page/members-page.component';
import { MemberEditPageComponent } from './features/members/pages/member-edit-page/member-edit-page.component';
import { MemberAddPageComponent } from './features/members/pages/member-add-page/member-add-page.component';
import { LoginPageComponent } from './features/auth/pages/login-page/login-page.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'tasks', component: TasksPageComponent, canActivate: [AuthGuard] },
  {
    path: 'members',
    component: MembersPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'members/add',
    component: MemberAddPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'members/edit/:id',
    component: MemberEditPageComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'members' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
