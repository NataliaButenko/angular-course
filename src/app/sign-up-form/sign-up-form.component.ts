import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, of, map } from 'rxjs';

@Component({
  selector: 'sign-up-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
})
export class SignUpFormComponent {
  public registrationForm: FormGroup = new FormGroup<any>({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], [this.emailValidator.bind(this)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [
        '',
        [Validators.required, Validators.minLength(6)],
        [this.passwordMatchValidator.bind(this)],
      ],
    });
  }

  private passwordMatchValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value !== confirmPassword.value
      ? of({ passwordMismatch: true })
      : of(null);
  }

  private emailValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    return this.checkEmailUnique(email).pipe(
      map((isUnique) => (isUnique ? null : { emailTaken: true }))
    );
  }

  private checkEmailUnique(email: string): Observable<boolean> {
    return of(['test@example.com', 'user@example.com']).pipe(
      map((existingEmails) => !existingEmails.includes(email))
    );
  }

  public onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }
}
