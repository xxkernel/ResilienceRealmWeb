import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  plans = [
    {
      name: 'Quick plan',
      price: 3.75,
      interval: 'day',
      features: [
        { name: 'Endless entry', available: true },
        { name: 'Access to all gyms', available: true },
        { name: 'All available simulators', available: true },
        { name: 'Help from trainers', available: false },
        { name: '10% Discounts on all sports items', available: false },
        { name: 'Training with professional athletes', available: false },
        { name: 'Creating your own training room', available: false },
      ],
    },
    {
      name: 'Standard plan',
      price: 75,
      interval: 'month',
      features: [
        { name: 'Endless entry', available: true },
        { name: 'Access to all gyms', available: true },
        { name: 'All available simulators', available: true },
        { name: 'Help from trainers', available: true },
        { name: '10% Discounts on all sports items', available: true },
        { name: 'Training with professional athletes', available: false },
        { name: 'Creating your own training room', available: false },
      ],
    },
    {
      name: 'Annual plan',
      price: 54,
      interval: 'month',
      features: [
        { name: 'Endless entry', available: true },
        { name: 'Access to all gyms', available: true },
        { name: 'All available simulators', available: true },
        { name: 'Help from trainers', available: true },
        { name: '10% Discounts on all sports items', available: true },
        { name: 'Training with professional athletes', available: true },
        { name: 'Creating your own training room', available: true },
      ],
    },
  ];

  carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
}
