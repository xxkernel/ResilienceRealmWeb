import { Component } from '@angular/core';
import { gyms } from '../../../gyms';
import { Gym } from '../../../studios.model';

@Component({
  selector: 'app-displayed-gyms',
  templateUrl: './displayed-gyms.component.html',
  styleUrls: ['./displayed-gyms.component.css'],
})
export class DisplayedGymsComponent {
  gyms: Gym[] = gyms;
  selectedGym: Gym | null = null;

  showGymDetails(gym: Gym) {
    this.selectedGym = gym;
  }
}
