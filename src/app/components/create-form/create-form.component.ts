import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { AllServicesService } from '../service/all-services.service';
@Component({
  selector: 'app-create-form',
  imports: [MatButtonModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, CommonModule, MatCardModule, MatSelectModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})
export class CreateFormComponent implements OnInit {

  username: string | null = '';
  productForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private services: AllServicesService) { }
  ngOnInit(): void {
    this.initForm(),
      this.username = this.services.getUsername();
  }

  initForm() {
    this.productForm = this.fb.group({
      name: [this.username, Validators.required],
      phoneNumber: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      TargetCountries: ['', Validators.required],
      LaunchDate: ['', Validators.required],
      TargetPeople: ['', Validators.required],
      ProjectType: ['', Validators.required],
      field: ['', Validators.required],
      Budget: ['', Validators.required]
    });
  }

  cancel() {
    this.router.navigate(['/Home'])
  }
  submit() {
    const form = this.productForm.value
    console.log(form)
    this.productForm.reset()
    this.router.navigate(['/Result'])

  }


}