
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MenuCard from './components/MenuCard';
import { MENU_ITEMS, EVENTS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Coffee' | 'Food' | 'Pastry'>('All');

  const filteredMenu = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory || (activeCategory === 'Coffee' && item.category === 'Coffee'));

  const categories = ['All', 'Coffee', 'Pastry', 'Food'];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
            alt="Coffee Shop Interior" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Selamat Datang di <span className="text-amber-400">Cafein</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Ruang nyaman untuk pecinta kopi. Nikmati racikan kopi terbaik dari biji pilihan Nusantara dalam suasana hangat dan modern.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <a href="#menu" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105">
              Lihat Menu
            </a>
            <a href="#reservation" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold transition-all">
              Reservasi Meja
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:rotate-12">
                <i className="fa-solid fa-wifi text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Wi-Fi Cepat</h3>
              <p className="text-stone-500">Koneksi stabil dan colokan tersedia di setiap sudut meja. Cocok untuk kerja (WFH).</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:rotate-12">
                <i className="fa-solid fa-mug-hot text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Biji Nusantara</h3>
              <p className="text-stone-500">Kami hanya menggunakan biji pilihan terbaik dari seluruh penjuru Indonesia.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:rotate-12">
                <i className="fa-solid fa-users text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Komunitas Kreatif</h3>
              <p className="text-stone-500">Lebih dari sekadar cafe, kami adalah wadah bagi diskusi dan ide-ide baru.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Menu Pilihan Kami</h2>
            <p className="text-stone-500 max-w-xl mx-auto">Dari espresso yang bold hingga manual brew yang berkarakter, temukan favoritmu di sini.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-8 py-2 rounded-full font-medium transition-all ${activeCategory === cat ? 'bg-amber-800 text-white shadow-lg' : 'bg-white text-stone-600 hover:bg-stone-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Community / Events Section */}
      <section id="events" className="py-24 bg-amber-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Event & Komunitas</h2>
              <p className="text-amber-100/80 text-lg mb-8 leading-relaxed">
                Cafein bukan sekadar tempat ngopi, tapi ruang untuk tumbuh bersama. Ikuti berbagai event rutin kami untuk memperluas koneksi dan pengetahuanmu.
              </p>
              <div className="space-y-6">
                {EVENTS.map(event => (
                  <div key={event.id} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{event.title}</h4>
                      <p className="text-amber-400 text-sm font-medium mb-1">{event.date}</p>
                      <p className="text-amber-100/60 text-sm line-clamp-1">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
                alt="Community Gathering" 
                className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl text-stone-900 shadow-xl hidden md:block">
                <p className="font-bold text-lg">Next Workshop:</p>
                <p className="text-amber-800 font-medium">Coffee Cupping 101</p>
                <p className="text-stone-400 text-sm">24 Oct • 16:00 WIB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-stone-50 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-amber-800 p-12 text-white flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6">Reservasi Meja</h2>
              <p className="mb-8 text-amber-100/80">Ingin mengadakan rapat atau sekadar memastikan tempat duduk terbaik? Pesan tempatmu sekarang.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-amber-400"></i>
                  <span>Layanan ramah & cepat</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-amber-400"></i>
                  <span>Harga bersahabat</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-check-circle text-amber-400"></i>
                  <span>Area merokok & non-merokok</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Nama Lengkap</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 transition-all" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Tanggal</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Jumlah Orang</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition-all">
                      <option>1-2 Orang</option>
                      <option>3-4 Orang</option>
                      <option>5+ Orang</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Catatan (Opsional)</label>
                  <textarea placeholder="Pesan khusus..." rows={3} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition-all"></textarea>
                </div>
                <button className="w-full bg-amber-800 text-white py-4 rounded-xl font-bold hover:bg-amber-900 transition-colors shadow-lg">
                  Kirim Reservasi
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
                <span className="bg-amber-800 text-white w-10 h-10 flex items-center justify-center rounded-full">C</span>
                <span>CAFEIN</span>
              </div>
              <p className="text-stone-400 leading-relaxed mb-6">
                Ruang ketiga di antara rumah dan kantor. Tempat terbaik untuk mengeksplorasi rasa dan ide baru.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-800 transition-colors">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Navigasi</h4>
              <ul className="space-y-4 text-stone-400">
                <li><a href="#home" className="hover:text-amber-400">Home</a></li>
                <li><a href="#menu" className="hover:text-amber-400">Menu</a></li>
                <li><a href="#events" className="hover:text-amber-400">Event & Workshop</a></li>
                <li><a href="#reservation" className="hover:text-amber-400">Reservasi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Jam Operasional</h4>
              <ul className="space-y-4 text-stone-400">
                <li className="flex justify-between">
                  <span>Senin - Kamis</span>
                  <span>08:00 - 22:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Jumat - Sabtu</span>
                  <span>08:00 - 00:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Minggu</span>
                  <span>09:00 - 21:00</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Kontak Kami</h4>
              <p className="text-stone-400 mb-4">Jl. Kopi Harum No. 12, Jakarta Selatan</p>
              <p className="text-stone-400 mb-4">+62 812 3456 7890</p>
              <p className="text-stone-400">hello@cafein.id</p>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
            <p>© 2024 Cafein - Komunitas Pecinta Kopi Indonesia.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
