import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  RegisterForm!: FormGroup
  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.RegisterForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]]
    })
  }

  submit() {
    const registerDAta = {
      userName: this.RegisterForm.value.username,
      email: this.RegisterForm.value.email,
      password: this.RegisterForm.value.password,
      cpassword: this.RegisterForm.value.cpassword
    }
    this.router.navigate(['/login'])
    console.log(registerDAta)
  }
}