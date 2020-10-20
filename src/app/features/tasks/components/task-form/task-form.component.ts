import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { roles, statuses } from 'src/app/core/fixtures/common';
import { Task } from 'src/app/core/models/task';
import { Validators, FormBuilder } from '@angular/forms';
import { validateAllFormFields } from 'src/app/core/utils/form-functions';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnChanges {
  @Input() task: Task;
  @Output() onSuccess = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  roles = roles;
  statuses = statuses;

  taskForm = this.fb.group({
    id: [null],
    description: [null, Validators.required],
    role: ['', Validators.required],
    status: [null, Validators.required],
  });

  get description() {
    return this.taskForm.get('description');
  }

  get role() {
    return this.taskForm.get('role');
  }

  get status() {
    return this.taskForm.get('status');
  }

  constructor(private fb: FormBuilder) {}

  ngOnChanges(): void {
    if (this.task) {
      this.taskForm.controls['id'].setValue(this.task.id);
      this.taskForm.controls['description'].setValue(this.task.description);
      this.taskForm.controls['role'].setValue(this.task.role);
      this.taskForm.controls['status'].setValue(this.task.status);
    }
  }

  onSubmit() {
    if (this.taskForm.invalid) {
      validateAllFormFields(this.taskForm);
      return;
    }
    this.onSuccess.emit(this.taskForm.value);
  }

  cancel() {
    this.onCancel.emit();
  }
}
