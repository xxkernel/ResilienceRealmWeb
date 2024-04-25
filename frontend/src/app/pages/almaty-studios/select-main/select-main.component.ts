import { Component } from '@angular/core';
import { gyms } from '../../../gyms';
import { Gym } from '../../../studios.model';

@Component({
  selector: 'app-select-main',
  templateUrl: './select-main.component.html',
  styleUrls: ['./select-main.component.css'],
})
export class SelectMainComponent {
  gyms: Gym[] = gyms;
  selectedCategory: string | null = null;
  filteredGyms: Gym[] = [];
  selectedGym: Gym | null = null;

  showGymsByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredGyms = this.gyms;
    } else {
      this.filteredGyms = this.gyms.filter((gym) =>
        gym.categories.some((cat) => cat.name === category)
      );
    }
  }

  showGymDetails(gym: Gym) {
    this.selectedGym = gym;
  }
}
