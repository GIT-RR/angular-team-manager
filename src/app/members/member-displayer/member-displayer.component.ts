import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Member } from 'src/app/interfaces/member';
import { MemberService } from 'src/app/services/member.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-displayer',
  templateUrl: './member-displayer.component.html',
  styleUrls: ['./member-displayer.component.css'],
})
export class MemberDisplayerComponent implements OnChanges {
  @Input() id: number;
  member: Member = null;

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnChanges(): void {
    this.member = this.memberService.getMember(this.id);
  }

  editMember() {
    this.router.navigate(['members/edit', this.id]);
  }

  deleteMember() {
    this.memberService.removeMember(this.id);
  }
}
