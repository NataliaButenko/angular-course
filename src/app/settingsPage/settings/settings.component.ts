import { Component } from '@angular/core';
import { SignUpFormComponent } from 'src/app/sign-up-form/sign-up-form.component';

@Component({
  selector: 'settings',
  standalone: true,
  imports: [SignUpFormComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {}
