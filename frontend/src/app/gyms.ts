import { Gym } from './studios.model';

// Function to generate random image URLs from Lorem Picsum
function getRandomImageUrl(width: number, height: number): string {
  const randomId = Math.floor(Math.random() * 1000); // Random ID between 0 and 999
  return `https://picsum.photos/${width}/${height}?random=${randomId}`;
}

export const gyms: Gym[] = [
  {
    id: 1,
    name: 'Gym 1',
    address: '123 Main St',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    city: 'New York',
    categories: [{ name: 'Gym' }],
    image: getRandomImageUrl(400, 300),
    shower: true,
    locker_room: true,
    shop: false,
    wifi: true,
    music: false,
    parking: true,
    twenty_four_seven: false,
  },
  {
    id: 2,
    name: 'Karate Dojo',
    address: '456 Elm St',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    city: 'Los Angeles',
    categories: [{ name: 'Karate' }],
    image: getRandomImageUrl(400, 300),
    shower: false,
    locker_room: true,
    shop: false,
    wifi: false,
    music: false,
    parking: true,
    twenty_four_seven: false,
  },
  {
    id: 3,
    name: 'Taekwondo Center',
    address: '789 Oak St',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    city: 'Chicago',
    categories: [{ name: 'Taekwondo' }],
    image: getRandomImageUrl(400, 300),
    shower: false,
    locker_room: true,
    shop: true,
    wifi: true,
    music: true,
    parking: false,
    twenty_four_seven: true,
  },
];
