import { Component, OnInit } from '@angular/core';
import { Member } from '../interfaces/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  selectedMember: Member;
  members: Member[];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.members = this.memberService.getMembers();
  }

  addMember(): void {
    alert('add member');
  }

  selectMember(member: Member) {
    if (this.selectedMember === member) {
      return (this.selectedMember = null);
    }
    return (this.selectedMember = member);
  }
}
