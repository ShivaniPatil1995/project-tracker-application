// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { projectReducer } from './store/project.reducer';
import { ProjectFormComponent } from './project-form/project-form.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TeamManagementComponent } from './team-management/team-management.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectFormComponent,
    TaskFormComponent,
    TeamManagementComponent,
    ProjectDashboardComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ projectState: projectReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
