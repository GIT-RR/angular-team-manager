import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { MemberService } from '../../../../core/services/member.service';
import { Router } from '@angular/router';
import { Member } from 'src/app/core/models/member';
import { members } from 'src/app/core/fixtures/members';

@Component({
  selector: 'app-member-displayer',
  templateUrl: './member-displayer.component.html',
  styleUrls: ['./member-displayer.component.css'],
})
export class MemberDisplayerComponent implements OnChanges {
  @Input() id: number;
  @Output() onDelete = new EventEmitter();
  member: Member;

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnChanges(): void {
    this.getMember();
  }

  async getMember() {
    this.member = await this.memberService.getMember(this.id);
  }

  handleEdit() {
    this.router.navigate(['members/edit', this.id]);
  }

  handleDelete() {
    this.onDelete.emit(this.id);
  }
}
