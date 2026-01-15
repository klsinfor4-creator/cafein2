
import React from 'react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-amber-800/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-stone-900">{item.name}</h3>
          <span className="text-amber-800 font-bold whitespace-nowrap">
            Rp {(item.price / 1000).toFixed(0)}k
          </span>
        </div>
        <p className="text-stone-500 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        <button className="w-full border border-stone-200 py-2 rounded-lg text-stone-700 font-medium hover:bg-stone-50 transition-colors">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
