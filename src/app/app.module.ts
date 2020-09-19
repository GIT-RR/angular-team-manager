import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MemberListComponent } from './features/members/components/member-list/member-list.component';
import { MemberDisplayerComponent } from './features/members/components/member-displayer/member-displayer.component';
import { MemberFormComponent } from './features/members/components/member-form/member-form.component';
import { MemberEditPageComponent } from './features/members/pages/member-edit-page/member-edit-page.component';
import { MembersPageComponent } from './features/members/pages/members-page/members-page.component';
import { TasksPageComponent } from './features/tasks/pages/tasks-page/tasks-page.component';
import { ErrorMessageComponent } from './shared/components/error-message/error-message.component';
import { MemberAddPageComponent } from './features/members/pages/member-add-page/member-add-page.component';

import { BackendInterceptor } from './core/interceptors/backend.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MemberListComponent,
    MemberDisplayerComponent,
    MemberFormComponent,
    MemberEditPageComponent,
    MembersPageComponent,
    TasksPageComponent,
    ErrorMessageComponent,
    MemberAddPageComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
