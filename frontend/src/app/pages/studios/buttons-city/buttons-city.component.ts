import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons-city',
  templateUrl: './buttons-city.component.html',
  styleUrl: './buttons-city.component.css',
})
export class ButtonsCityComponent {
  constructor(private router: Router) {}

  navigateTo(city: string): void {
    this.router.navigate(['/studios', city.toLowerCase()]);
  }
}
