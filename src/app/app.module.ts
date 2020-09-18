import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { TasksComponent } from './tasks/tasks.component'; // <-- NgModel lives here

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDisplayerComponent } from './members/member-displayer/member-displayer.component';
import { MemberFormComponent } from './members/member-form/member-form.component';
import { MemberEditPageComponent } from './pages/member-edit-page/member-edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MessagesComponent,
    TasksComponent,
    MemberListComponent,
    MemberDisplayerComponent,
    MemberFormComponent,
    MemberEditPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
