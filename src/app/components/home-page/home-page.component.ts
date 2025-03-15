
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

import { Router } from '@angular/router';
import { AllServicesService } from '../service/all-services.service';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule, MatCardModule, MatSelectModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private services: AllServicesService) { }
  username: string | null = '';
  ngOnInit(): void {
    this.username = this.services.getUsername();
  }

  createform() {
    this.router.navigate(['/createForm'])
  }
  logout() {
    this.router.navigate(['/login'])
    localStorage.clear()
  }
}
