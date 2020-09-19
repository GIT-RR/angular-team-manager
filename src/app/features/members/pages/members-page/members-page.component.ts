import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/core/models/member';
import { MemberService } from 'src/app/core/services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css'],
})
export class MembersPageComponent implements OnInit {
  selectedMember = null;
  members = null;

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit(): void {
    this.getMembers();
  }

  async getMembers() {
    this.members = await this.memberService.getMembers();
  }

  addMember(): void {
    this.router.navigate(['members/add']);
  }

  selectMember(member: Member) {
    if (this.selectedMember === member) {
      return (this.selectedMember = null);
    }
    return (this.selectedMember = member);
  }
}
