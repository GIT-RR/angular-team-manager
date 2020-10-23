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
  isLoading: boolean = false;
  members: Member[] = [];
  selectedMember: Member = null;

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit(): void {
    this.getMembers();
  }

  async getMembers() {
    this.isLoading = true;
    this.members = await this.memberService.getMembers();
    this.isLoading = false;
  }

  handleAddMember(): void {
    this.router.navigate(['members/add']);
  }

  async handleDeleteMember(id: number) {
    this.isLoading = true;
    await this.memberService.removeMember(id);
    this.selectedMember = null;
    this.getMembers();
  }

  handleSelectMember(member: Member): Member {
    if (this.selectedMember === member) {
      return (this.selectedMember = null);
    }
    return (this.selectedMember = member);
  }
}
