// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ProjectDashboardComponent },
  { path: 'projects/new', component: ProjectFormComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
