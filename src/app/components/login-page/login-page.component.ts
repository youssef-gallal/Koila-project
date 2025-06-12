import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login-page',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  loginForm!: FormGroup
  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submit() {
    const loginData = {
      userName: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    localStorage.setItem('userName', loginData.userName)
    this.router.navigate(['/Pricing'])
    console.log(loginData)
  }
}
