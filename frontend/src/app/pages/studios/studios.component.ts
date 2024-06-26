import { Component } from '@angular/core';

@Component({
  selector: 'app-studios',
  templateUrl: './studios.component.html',
  styleUrl: './studios.component.css',
})
export class StudiosComponent {
  isPopoverOpen: boolean = false;

  togglePopover() {
    this.isPopoverOpen = !this.isPopoverOpen;
  }
}
