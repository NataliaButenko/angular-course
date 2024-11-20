import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, of, map } from 'rxjs';

interface IRefistrationForm {
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}

@Component({
  selector: 'sign-up-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
})
export class SignUpFormComponent {
  public registrationForm: FormGroup = new FormGroup<IRefistrationForm>({
    username: new FormControl('', Validators.required),
    email: new FormControl(
      '',
      [Validators.required, Validators.email],
      [this.emailValidator.bind(this)]
    ),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      this.passwordMatchValidator.bind(this),
    ]),
  });

  constructor() {}

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = this.registrationForm?.controls['password'];
    const confirmPassword = control;
    return password && confirmPassword && password.value !== confirmPassword.value
      ? { passwordMismatch: true }
      : null;
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
