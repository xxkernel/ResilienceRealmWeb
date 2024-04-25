import { Component } from '@angular/core';
import { gyms } from '../../gyms.js'; // Import the gyms array from studios.model.ts
import { Gym } from '../../studios.model'; // Assuming you have a Gym interface defined

@Component({
  selector: 'app-almaty-studios',
  templateUrl: './almaty-studios.component.html',
  styleUrls: ['./almaty-studios.component.css'],
})
export class AlmatyStudiosComponent {
  gyms: Gym[] = gyms; // Use the imported gyms array
  selectedCategory: string = '';

  constructor() {}

  onSelectCategory(category: string) {
    this.selectedCategory = category;
  }
}
