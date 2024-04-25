import { Component } from '@angular/core';
import { gyms } from '../../../gyms';
import { Gym } from '../../../studios.model';

@Component({
  selector: 'app-select-u',
  templateUrl: './select-u.component.html',
  styleUrls: ['./select-u.component.css'],
})
export class SelectUComponent {
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
