export interface GymRoom {
  id: number;
  categories: string[];
  name: string;
  address: string;
  description: string;
  images: string[];
  city: string;
  shower: boolean;
  wardrobe: boolean;
  store: boolean;
  wifi: boolean;
  music: boolean;
  parking: boolean;
  twentyFourSeven: boolean;
}

export interface Country {
  name: string;
  gyms: GymRoom[];
}

export interface CountriesData {
  countries: Country[];
}
