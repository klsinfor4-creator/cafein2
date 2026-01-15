
import { MenuItem, CafeEvent } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Gayo Signature Latte',
    description: 'Biji kopi pilihan dari dataran tinggi Gayo dengan susu creamy.',
    price: 35000,
    category: 'Coffee',
    image: 'https://picsum.photos/seed/latte/600/400'
  },
  {
    id: 2,
    name: 'Manual Brew V60',
    description: 'Pilihan biji Nusantara (Toraja, Kintamani, Preanger) diproses manual.',
    price: 28000,
    category: 'Coffee',
    image: 'https://picsum.photos/seed/v60/600/400'
  },
  {
    id: 3,
    name: 'Almond Croissant',
    description: 'Pastry renyah dengan isian krim almond yang manis.',
    price: 32000,
    category: 'Pastry',
    image: 'https://picsum.photos/seed/pastry/600/400'
  },
  {
    id: 4,
    name: 'Avocado Toast',
    description: 'Roti gandum panggang dengan alpukat segar dan telur mata sapi.',
    price: 45000,
    category: 'Food',
    image: 'https://picsum.photos/seed/food/600/400'
  },
  {
    id: 5,
    name: 'Iced Cappuccino',
    description: 'Espresso bold dengan foam susu tebal dan cokelat bubuk.',
    price: 38000,
    category: 'Coffee',
    image: 'https://picsum.photos/seed/icedcoffee/600/400'
  }
];

export const EVENTS: CafeEvent[] = [
  {
    id: 1,
    title: 'Live Acoustic Night',
    date: 'Setiap Jumat Malam',
    description: 'Nikmati alunan musik akustik dari musisi lokal sambil menyesap kopi.',
    image: 'https://picsum.photos/seed/music/800/500'
  },
  {
    id: 2,
    title: 'Workshop Coffee Brewing',
    date: 'Minggu ke-2 Setiap Bulan',
    description: 'Belajar teknik manual brew dari barista profesional kami.',
    image: 'https://picsum.photos/seed/workshop/800/500'
  },
  {
    id: 3,
    title: 'Diskusi Kreatif',
    date: 'Setiap Selasa Sore',
    description: 'Ruang bagi komunitas untuk berbagi ide dan inspirasi baru.',
    image: 'https://picsum.photos/seed/creative/800/500'
  }
];
