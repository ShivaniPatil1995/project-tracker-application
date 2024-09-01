import { createReducer, on } from '@ngrx/store';
import { Project } from '../models/project.model';
import { createProject, createTask, assignTeamMember } from './project.actions';

export interface ProjectState {
  projects: Project[];
}

export const initialState: ProjectState = {
  projects: []
};

export const projectReducer = createReducer(
  initialState,
  on(createProject, (state, { project }) => ({
    ...state,
    projects: [...state.projects, project]
  })),
  on(createTask, (state, { projectId, task }) => ({
    ...state,
    projects: state.projects.map(project =>
      project.id === projectId ? { ...project, tasks: [...(project.tasks || []), task] } : project
    )
  })),
  on(assignTeamMember, (state, { projectId, teamMember }) => ({
    ...state,
    projects: state.projects.map(project =>
      project.id === projectId ? { ...project, teamMembers: [...(project.teamMembers || []), teamMember] } : project
    )
  }))
);
