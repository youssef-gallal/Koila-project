import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';



interface Plan {
  name: string;
  price: string;
  features: string[];
  id: number;
}

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})


export class PricingComponent {
  constructor(private router: Router) { }



  plans: Plan[] = [
    {
      name: 'Basic',
      price: '$9',
      features: ['1 user', 'For 3 Months', 'Email support'],
      id: 1
    },
    {
      name: 'Pro',
      price: '$29',
      features: ['5 users', 'For 6 Months', 'Priority support'],
      id: 2
    },
    {
      name: 'Enterprise',
      price: '$99',
      features: ['Unlimited users', 'For 1 Year', 'Phone & email support'],
      id: 3
    },
  ];

  sumbit(id: any) {
    localStorage.setItem('selectedPlan', JSON.stringify(id));
    this.router.navigate(['/CreateForm']);
  }
  Freetrial() {
    this.router.navigate(['/CreateForm']);
  }

}
