import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { selectProjectById } from '../store/project.selectors';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']

})
export class ProjectDetailsComponent implements OnInit {
  project$: Observable<Project | undefined>;
  showTaskForm = false;
  showTeamForm = false;
  constructor(private route: ActivatedRoute, private store: Store) {
    const projectId = this.route.snapshot.paramMap.get('id')!;
    this.project$ = this.store.select(selectProjectById(projectId));
  }
  ngOnInit(): void {}

  toggleTaskForm() {
    this.showTaskForm = !this.showTaskForm;
  }

  toggleTeamForm() {
    this.showTeamForm = !this.showTeamForm;
  }
  onTaskAdded() {
    this.showTaskForm = false;
  }

  onFormCanceled() {
    this.showTaskForm = false;
  }
}
