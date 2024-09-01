// src/app/models/project.model.ts
export interface Project {
    id: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    priority: 'Low' | 'Medium' | 'High';
    tasks?: Task[];
    teamMembers?: TeamMember[];
  }
  
  // src/app/models/task.model.ts
  export interface Task {
    id: string;
    title: string;
    description: string;
    assignee: string;
    dueDate: Date;
    status: 'To Do' | 'In Progress' | 'Completed';
  }
  
  // src/app/models/team-member.model.ts
  export interface TeamMember {
    id: string;
    name: string;
    assignedTasks?: Task[];
  }
  