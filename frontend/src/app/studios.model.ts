// gym.interface.ts
export interface Gym {
  id: number;
  name: string;
  address: string;
  description: string;
  city: string;
  categories: Category[];
  image: string; // Array to hold multiple image URLs
  shower: boolean;
  locker_room: boolean;
  shop: boolean;
  wifi: boolean;
  music: boolean;
  parking: boolean;
  twenty_four_seven: boolean;
}

// category.interface.ts
export interface Category {
  id?: number;
  name: string;
}
