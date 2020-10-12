import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { roles, genders } from '../../../../core/fixtures/common';
import { validateAllFormFields } from '../../../../core/utils/form-functions';
import { Router } from '@angular/router';
import { Member } from 'src/app/core/models/member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnChanges {
  @Input() member: Member;
  @Output() onSuccess = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  roles = roles;
  genders = genders;
  memberForm = this.fb.group({
    id: [null],
    email: [null, [Validators.email, Validators.required]],
    name: [null, Validators.required],
    role: [''],
    gender: ['', Validators.required],
  });

  get name() {
    return this.memberForm.get('name');
  }

  get email() {
    return this.memberForm.get('email');
  }

  get role() {
    return this.memberForm.get('role');
  }

  get gender() {
    return this.memberForm.get('gender');
  }

  constructor(private fb: FormBuilder) {}

  ngOnChanges(): void {
    if (this.member) {
      this.memberForm.controls['id'].setValue(this.member.id);
      this.memberForm.controls['email'].setValue(this.member.email);
      this.memberForm.controls['name'].setValue(this.member.name);
      this.memberForm.controls['role'].setValue(this.member.role);
      this.memberForm.controls['gender'].setValue(this.member.gender);
    }
  }

  onSubmit() {
    if (this.memberForm.invalid) {
      validateAllFormFields(this.memberForm);
      return;
    }
    this.onSuccess.emit(this.memberForm.value);
  }

  cancel() {
    this.onCancel.emit();
  }
}
