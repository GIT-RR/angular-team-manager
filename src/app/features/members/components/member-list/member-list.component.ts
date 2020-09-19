import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Member } from 'src/app/core/models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent {
  @Input() members: Member[];
  @Output() memberSelected = new EventEmitter();

  selectMember(member: Member) {
    this.memberSelected.emit(member);
  }
}
