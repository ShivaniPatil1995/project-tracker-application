import { createAction, props } from '@ngrx/store';
import { Project } from '../models/project.model';
import { Task } from '../models/project.model';
import { TeamMember } from '../models/project.model';

export const createProject = createAction('[Project] Create Project', props<{ project: Project }>());
export const createTask = createAction('[Task] Create Task', props<{ projectId: string, task: Task }>());
export const assignTeamMember = createAction('[TeamMember] Assign Team Member', props<{ projectId: string, teamMember: TeamMember }>());
