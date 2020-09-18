import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/interfaces/member';

@Component({
  selector: 'app-member-edit-page',
  templateUrl: './member-edit-page.component.html',
  styleUrls: ['./member-edit-page.component.css'],
})
export class MemberEditPageComponent implements OnInit {
  member: Member = null;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMember();
  }

  getMember() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.member = this.memberService.getMember(id);
  }

  edit(memberData: Member) {
    this.memberService.updateMember(memberData);
    this.router.navigate(['members']);
  }

  cancel() {
    this.router.navigate(['members']);
  }
}
