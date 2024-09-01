import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TeamMember } from '../models/project.model';
import { assignTeamMember } from '../store/project.actions';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']

})
export class TeamManagementComponent {
  @Input() projectId!: string;
  teamForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.teamForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.teamForm.valid) {
      const teamMember: TeamMember = {
        ...this.teamForm.value,
        id: Math.random().toString(36).substr(2, 9),
      };
      this.store.dispatch(assignTeamMember({ projectId: this.projectId, teamMember }));
      this.teamForm.reset();
    }
  }
}
