import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/core/models/member';
import { MemberService } from 'src/app/core/services/member.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css'],
})
export class MembersPageComponent implements OnInit {
  selectedMember: Member = null;
  members: Member[] = [];

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit(): void {
    this.getMembers();

    this.memberService.reloadMembers$.subscribe(() => {
      this.getMembers();
      this.selectedMember = null;
    });
  }

  async getMembers() {
    this.members = await this.memberService.getMembers();
  }

  addMember(): void {
    this.router.navigate(['members/add']);
  }

  handleSelectMember(member: Member) {
    if (this.selectedMember === member) {
      return (this.selectedMember = null);
    }
    return (this.selectedMember = member);
  }
}
