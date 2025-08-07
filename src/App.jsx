import React, { useState, useEffect } from 'react';
import { X, Mountain, Camera, MapPin, Calendar, Users, Star, ArrowRight, Play, Heart, Award, Coffee, Tent, Sun, Moon, TreePine, Compass, Clock, Phone } from 'lucide-react';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('gallery');

  const images = [
    {
      src: "foto.JPG",
      title: "Puncak Merbabu",
      quote: "Di puncak Merbabu yang megah, jiwa menemukan kedamaian sejati. Setiap napas adalah syukur, setiap langkah adalah kebahagiaan."
    },
    {
      src: "foto3.jpg",
      title: "Sunrise Golden",
      quote: "Matahari terbit di Merbabu menghadirkan keajaiban emas yang melelehkan hati dan menginspirasi jiwa."
    },
    {
      src: "foto4.jpg",
      title: "Jalur Pendakian",
      quote: "Setiap jejak di jalur Merbabu adalah cerita petualangan, setiap langkah membawa kita lebih dekat dengan kebahagiaan."
    },
    {
      src: "foto5.jpg",
      title: "Savana Indah",
      quote: "Hamparan savana Merbabu bagaikan permadani hijau yang ditenun oleh alam dengan penuh cinta dan kasih."
    },
    {
      src: "foto6.jpg",
      title: "Camping Ground",
      quote: "Malam di bawah bintang Merbabu mengajarkan kita bahwa kebahagiaan sederhana adalah yang paling bermakna."
    },
    {
      src: "foto7.jpg",
      title: "Kawah Candradimuka",
      quote: "Kawah yang legendaris ini menyimpan energi positif yang mengalir ke setiap pendaki yang datang dengan hati tulus."
    },
    {
      src: "foto8.jpg",
      title: "Flora Merbabu",
      quote: "Keindahan flora Merbabu mengajarkan kita bahwa dalam kesederhanaan tersimpan keajaiban yang luar biasa."
    },
    {
      src: "foto9.jpg",
      title: "Panorama 360°",
      quote: "Pemandangan 360 derajat dari puncak Merbabu mengingatkan kita bahwa dunia ini begitu indah untuk dieksplorasi."
    }
  ];

  const itinerary = [
    {
      day: "Hari 1",
      title: "Base Camp Adventure",
      items: [
        { time: "05.00", activity: "Berkumpul di Basecamp Selo", icon: <Coffee className="w-4 h-4" /> },
        { time: "06.00", activity: "Sarapan & Briefing", icon: <Users className="w-4 h-4" /> },
        { time: "07.00", activity: "Start Pendakian", icon: <Mountain className="w-4 h-4" /> },
        { time: "12.00", activity: "Istirahat & Makan Siang", icon: <Coffee className="w-4 h-4" /> },
        { time: "17.00", activity: "Tiba di Pos 3 - Setup Camp", icon: <Tent className="w-4 h-4" /> },
        { time: "19.00", activity: "Makan Malam & Games", icon: <Heart className="w-4 h-4" /> }
      ]
    },
    {
      day: "Hari 2",
      title: "Summit Attack",
      items: [
        { time: "03.00", activity: "Bangun & Persiapan", icon: <Moon className="w-4 h-4" /> },
        { time: "04.00", activity: "Summit Attack", icon: <Star className="w-4 h-4" /> },
        { time: "06.30", activity: "Sunrise di Puncak", icon: <Sun className="w-4 h-4" /> },
        { time: "08.00", activity: "Eksplorasi Kawah", icon: <Compass className="w-4 h-4" /> },
        { time: "10.00", activity: "Turun ke Basecamp", icon: <TreePine className="w-4 h-4" /> },
        { time: "15.00", activity: "Tiba di Basecamp - Selesai", icon: <Award className="w-4 h-4" /> }
      ]
    }
  ];

  const facilities = [
    { name: "Guide Berpengalaman", icon: "🏔️" },
    { name: "Peralatan Camping", icon: "⛺" },
    { name: "Makan 3x Sehari", icon: "🍽️" },
    { name: "Dokumentasi Trip", icon: "📸" },
    { name: "P3K & Safety", icon: "🏥" },
    { name: "Sertifikat Pendaki", icon: "🏆" }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openModal = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1575573685828-7c1e20f05124?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyYmFidXxlbnwwfHwwfHx8MA%3D%3D')" }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navigation */}
      <nav className="relative z-20 p-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="bg-white/30 backdrop-blur-md rounded-full p-2 flex gap-2">
            {['gallery', 'itinerary', 'facilities'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeSection === section 
                    ? 'bg-white text-teal-800 shadow-lg' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {section === 'gallery' ? 'Galeri' : section === 'itinerary' ? 'Itinerary' : 'Fasilitas'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={`relative z-10 text-center py-8 px-4 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center justify-center mb-4">
          <Mountain className="text-teal-300 w-10 h-10 mr-3 animate-bounce" />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
            GOHAPPY
          </h1>
          <Mountain className="text-teal-300 w-10 h-10 ml-3 animate-bounce" />
        </div>
        <p className="text-white text-xl sm:text-2xl mb-4 font-semibold drop-shadow-md animate-pulse">
          Escape a Little, Smile a Lot ✨
        </p>
        <p className="text-blue-200 text-lg sm:text-xl mb-2 font-medium">Gunung Merbabu Adventure</p>
        <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
          Nikmati petualangan tak terlupakan di Gunung Merbabu yang menawan dengan pemandangan savana yang memukau
        </p>
        
        {/* CTA Button */}
        <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 mb-8">
          <div className="flex items-center gap-2">
            <span>Daftar Sekarang</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
        
        {/* Trip Info Cards */}
        <div className="flex flex-wrap justify-center gap-4 px-2">
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 flex items-center space-x-3 hover:bg-white/40 transition-all duration-300 hover:scale-105 shadow-lg">
            <Calendar className="w-5 h-5 text-teal-300" />
            <span className="text-white font-medium">2 Hari 1 Malam</span>
          </div>
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 flex items-center space-x-3 hover:bg-white/40 transition-all duration-300 hover:scale-105 shadow-lg">
            <Users className="w-5 h-5 text-teal-300" />
            <span className="text-white font-medium">Max 15 Orang</span>
          </div>
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 flex items-center space-x-3 hover:bg-white/40 transition-all duration-300 hover:scale-105 shadow-lg">
            <MapPin className="w-5 h-5 text-teal-300" />
            <span className="text-white font-medium">Gunung Merbabu</span>
          </div>
          <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 flex items-center space-x-3 hover:bg-white/40 transition-all duration-300 hover:scale-105 shadow-lg">
            <Star className="w-5 h-5 text-teal-300" />
            <span className="text-white font-medium">3.145 MDPL</span>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="relative z-10 px-4 pb-12">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Camera className="w-8 h-8 text-teal-300 mr-3" />
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">Galeri Perjalanan</h2>
              <Camera className="w-8 h-8 text-teal-300 ml-3" />
            </div>
            <p className="text-blue-200 text-lg">Klik foto untuk melihat quote inspiratif dan keindahan Merbabu</p>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:rotate-1 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md border border-white/30 ${isLoaded ? 'animate-fade-in' : ''}`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                onClick={() => openModal(image, index)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-base">{image.title}</h3>
                    <p className="text-sm text-blue-200 mt-1">Klik untuk quote inspiratif</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-10 h-10 bg-teal-400/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-teal-300">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <div className="absolute top-3 left-3 bg-blue-500/80 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-bold">#{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Itinerary Section */}
      <div id="itinerary" className="relative z-10 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Jadwal Perjalanan</h2>
            <p className="text-blue-200 text-lg">Rencana lengkap petualangan GOHAPPY di Gunung Merbabu</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {itinerary.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30">
                <h3 className="text-2xl font-bold text-white mb-2">{day.day}</h3>
                <p className="text-teal-300 font-semibold text-lg mb-6">{day.title}</p>
                <div className="space-y-4">
                  {day.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-4 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                      <div className="flex items-center gap-2 text-teal-300">
                        {item.icon}
                        <span className="font-bold text-sm">{item.time}</span>
                      </div>
                      <span className="text-white">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div id="facilities" className="relative z-10 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-4">Fasilitas Trip</h2>
            <p className="text-blue-200 text-lg">Semua yang Anda butuhkan untuk petualangan yang aman dan menyenangkan</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-white font-bold text-lg">{facility.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 px-4 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Siap untuk Petualangan?</h2>
            <p className="text-white/90 text-lg mb-6">Hubungi kami sekarang dan wujudkan impian petualangan Merbabu Anda!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-teal-800 px-6 py-3 rounded-full font-bold hover:bg-teal-100 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                WhatsApp: +62 857-4270-4619
              </button>
              <button className="bg-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/30">
                Instagram: @gohappy.id_
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal/Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-gradient-to-br from-teal-800 to-blue-900 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-white/20 animate-scale-in">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/20 bg-gradient-to-r from-teal-400 to-blue-500">
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
              <button
                onClick={closeModal}
                className="w-12 h-12 bg-red-500/30 hover:bg-red-500/50 rounded-full flex items-center justify-center transition-colors duration-200 group border border-red-300/50"
              >
                <X className="w-6 h-6 text-red-200 group-hover:text-white" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row h-full">
              {/* Image */}
              <div className="lg:w-2/3 relative bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-64 sm:h-80 lg:h-[600px] object-contain"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full px-4 py-2">
                  <span className="text-white text-sm font-bold">#{selectedImage.index + 1} - Merbabu</span>
                </div>
              </div>
              
              {/* Quote Section */}
              <div className="lg:w-1/3 p-8 flex flex-col justify-center bg-gradient-to-br from-teal-900/50 to-blue-900/50">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Mountain className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-teal-300 font-bold text-xl mb-4">{selectedImage.title}</h4>
                  <blockquote className="text-white text-lg leading-relaxed italic mb-6 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    "{selectedImage.quote}"
                  </blockquote>
                  <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-4 rounded-full"></div>
                  <p className="text-blue-300 text-sm font-semibold">GOHAPPY - Escape a Little, Smile a Lot</p>
                  <p className="text-blue-400 text-xs mt-2">Gunung Merbabu Adventure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <style jsx>{`
       
      `}</style> */}
    </div>
  );
};

export default App;