import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { customValidator, passwordValidator } from '../validator/checkEx27.validator';

@Component({
  selector: 'app-forms-reactive',
  standalone: false,
  templateUrl: './forms-reactive.html',
  styleUrl: './forms-reactive.css',
})
export class FormsReactive {
  regForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group(
      {
        password: ['', Validators.required],
        confirmPass: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  get password(): AbstractControl {
    return this.regForm.get('password')!;
  }

  get confirmPass(): AbstractControl {
    return this.regForm.get('confirmPass')!;
  }

  passwordMatchValidator(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirmPass')?.value;
    return pass === confirm ? null : { misMatch: true };
  }
}
