import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {


  getUsername() {
    return localStorage.getItem('userName');
  }
  getSelectedplan() {
    return localStorage.getItem('selectedPlan');
  }
}