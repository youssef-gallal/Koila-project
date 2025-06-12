
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

import { Router } from '@angular/router';
import { AllServicesService } from '../service/all-services.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule, MatCardModule, MatSelectModule, MatButtonModule, MatMenuModule],

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private services: AllServicesService) { }
  username: string | null = '';
  selectedPlan: string | null = '';

  ngOnInit(): void {
    this.username = this.services.getUsername();
    this.selectedPlan = this.services.getSelectedplan();

  }

  createform() {
    this.router.navigate(['/CreateForm'])
  }
  login() {
    this.router.navigate(['/login'])
  }
  SignUp() {
    this.router.navigate(['/Register'])
  }

  Pricing() {
    this.router.navigate(['/Pricing'])
  }
  logout() {
    this.router.navigate(['/login'])
    localStorage.clear()
  }
}
