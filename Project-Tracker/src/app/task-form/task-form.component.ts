import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Task } from '../models/project.model';
import { createTask } from '../store/project.actions';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']

})
export class TaskFormComponent {
  @Input() projectId!: string;
  taskForm: FormGroup;
  @Output() taskAdded = new EventEmitter<void>();
  @Output() formCanceled = new EventEmitter<void>();
  constructor(private fb: FormBuilder, private store: Store) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      assignee: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: ['To Do', Validators.required],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const task: Task = {
        ...this.taskForm.value,
        id: Math.random().toString(36).substr(2, 9),
      };
      this.store.dispatch(createTask({ projectId: this.projectId, task }));
      this.taskForm.reset();
      this.taskAdded.emit()
    }
  }
  onCancel() {
    this.formCanceled.emit();
  }
}
