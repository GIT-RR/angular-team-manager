import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Member } from 'src/app/core/models/member';
import { MemberService } from 'src/app/core/services/member.service';

@Component({
  selector: 'app-member-edit-page',
  templateUrl: './member-edit-page.component.html',
  styleUrls: ['./member-edit-page.component.css'],
})
export class MemberEditPageComponent implements OnInit {
  member: Member;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMember();
  }

  async getMember() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.member = await this.memberService.getMember(id);
  }

  async handleEdit(memberData: Member) {
    await this.memberService.updateMember(memberData);
    this.router.navigate(['members']);
  }

  handleCancel() {
    this.router.navigate(['members']);
  }
}
