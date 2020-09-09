import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/interfaces/member';

@Component({
  selector: 'app-member-displayer',
  templateUrl: './member-displayer.component.html',
  styleUrls: ['./member-displayer.component.css'],
})
export class MemberDisplayerComponent {
  @Input() member: Member;

  editMember() {}

  deleteMember() {}
}
