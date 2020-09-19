import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/core/services/member.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/core/models/member';

@Component({
  selector: 'app-member-add-page',
  templateUrl: './member-add-page.component.html',
  styleUrls: ['./member-add-page.component.css'],
})
export class MemberAddPageComponent {
  constructor(private memberService: MemberService, private router: Router) {}

  add(memberData: Member) {
    this.memberService.addMember(memberData);
    this.router.navigate(['members']);
  }

  cancel() {
    this.router.navigate(['members']);
  }
}
