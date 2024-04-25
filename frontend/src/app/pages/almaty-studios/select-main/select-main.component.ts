import { Component, OnInit } from '@angular/core';
import { Gym } from '../../../studios.model';
import { StudiosService } from '../../../studios.service';

@Component({
  selector: 'app-select-main',
  templateUrl: './select-main.component.html',
  styleUrls: ['./select-main.component.css'],
})
export class SelectMainComponent implements OnInit {
  gyms: Gym[] = [];
  selectedCategory: string | null = null;
  filteredGyms: Gym[] = [];
  selectedGym: Gym | null = null;

  constructor(private studiosService: StudiosService) {}

  ngOnInit(): void {
    this.studiosService.getAlmaty().subscribe((gyms) => {
      this.gyms = gyms;
      this.filteredGyms = gyms;
    });
  }

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
