import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { selectProjects } from '../store/project.selectors';
import { Task } from '../models/project.model';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent {
  projects$: Observable<Project[]>;

  constructor(private store: Store) {
    this.projects$ = this.store.select(selectProjects);
  }

  getTaskCounts(tasks?: Task[]): { completed: number; inProgress: number; toDo: number } {
    if (!tasks) {
      return { completed: 0, inProgress: 0, toDo: 0 };
    }

    const completed = tasks.filter(task => task.status === 'Completed').length;
    const inProgress = tasks.filter(task => task.status === 'In Progress').length;
    const toDo = tasks.filter(task => task.status === 'To Do').length;

    return { completed, inProgress, toDo };
  }
  getOverallProgress(tasks: Task[]): number {
    const completedTasks = tasks.filter(task => task.status === 'Completed').length;
    const totalTasks = tasks.length;
    return Math.round((completedTasks / totalTasks) * 100);
  }
}
