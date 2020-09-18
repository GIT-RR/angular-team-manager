import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { roles } from '../../services/fixtures/common';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent {
  roles = roles;
  memberForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    role: ['', Validators.required],
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

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.memberForm);
  }

  cancel() {
    console.log('');
  }
}
