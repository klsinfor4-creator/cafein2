
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Coffee' | 'Non-Coffee' | 'Food' | 'Pastry';
  image: string;
}

export interface CafeEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}
