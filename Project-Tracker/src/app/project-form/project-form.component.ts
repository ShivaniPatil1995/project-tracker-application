import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Project } from '../models/project.model';
import { createProject } from '../store/project.actions';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']

})
export class ProjectFormComponent {
  projectForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      priority: ['Medium', Validators.required],
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      const project: Project = {
        ...this.projectForm.value,
        id: Math.random().toString(36).substr(2, 9),
      };
      this.store.dispatch(createProject({ project }));
      this.projectForm.reset();
    }
  }
}
