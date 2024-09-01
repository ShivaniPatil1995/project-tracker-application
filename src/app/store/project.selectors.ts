import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProjectState } from './project.reducer';

export const selectProjectState = createFeatureSelector<ProjectState>('projectState');

export const selectProjects = createSelector(
  selectProjectState,
  (state: ProjectState) => state.projects
);

export const selectProjectById = (projectId: string) => createSelector(
  selectProjects,
  (projects) => projects.find(project => project.id === projectId)
);
