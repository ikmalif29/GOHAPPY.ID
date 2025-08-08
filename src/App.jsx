import React, { useState, useEffect } from 'react';
    import { X, Mountain, Camera, MapPin, Calendar, Users, Star, ArrowRight, Heart, Award, Coffee, Tent, Sun, Moon, TreePine, Compass, Phone } from 'lucide-react';

    const App = () => {
      const [selectedImage, setSelectedImage] = useState(null);
      const [isLoaded, setIsLoaded] = useState(false);
      const [activeSection, setActiveSection] = useState('gallery');

      const images = [
        {
          src: "foto8.jpg",
          title: "Sunrise Merbabu",
          quote: "Di puncak Merbabu, mentari pagi menyapa jiwa, melukis harapan baru di kanvas langit yang luas."
        },
        {
          src: "foto14.jpg",
          title: "Jalur Pendakian Merbabu",
          quote: "Setiap langkah di jalur Merbabu mengajarkan ketabahan, di mana alam menjadi guru dan hati belajar rendah hati."
        },
        {
          src: "foto2.jpg",
          title: "Savana Merbabu",
          quote: "Savana Merbabu adalah pelukan alam, tempat jiwa menari bersama angin di hamparan hijau yang menenangkan."
        },
        {
          src: "foto5.jpg",
          title: "Camping Ground Merbabu",
          quote: "Di camping ground Merbabu, bintang-bintang berbisik tentang mimpi, mengajak kita merangkul kedamaian malam."
        },
        {
          src: "foto7.jpg",
          title: "Kawah Candradimuka",
          quote: "Kawah Candradimuka Merbabu menyimpan misteri purba, memanggil jiwa petualang untuk menyelami keajaibannya."
        },
        {
          src: "foto15.jpg",
          title: "Puncak Kenteng Songo",
          quote: "Puncak Kenteng Songo Merbabu adalah panggung langit, tempat hati menyatu dengan keagungan alam."
        },
        {
          src: "foto4.jpg",
          title: "Merbabu Sunrise",
          quote: "Matahari terbit di Merbabu adalah simfoni cahaya, menyanyikan lagu keberanian di puncak harapan."
        },
        {
          src: "foto11.jpg",
          title: "Merbabu Summit",
          quote: "Puncak Merbabu adalah cermin jiwa, memantulkan kekuatan dan ketenangan di tengah awan yang berarak."
        },
        {
          src: "foto12.jpg",
          title: "Merbabu Trail",
          quote: "Jalur Merbabu adalah perjalanan batin, setiap langkah mengukir cerita keberanian di hati petualang."
        },
        {
          src: "foto13.jpg",
          title: "Merbabu Mist",
          quote: "Kabut Merbabu merangkul jiwa, mengajarkan kita menemukan keindahan dalam misteri dan ketenangan."
        },
        {
          src: "foto9.jpg",
          title: "Merbabu Valley",
          quote: "Lembah Merbabu adalah puisi alam, tempat hati belajar tentang kedamaian di pelukan gunung."
        },
        {
          src: "foto.JPG",
          title: "Merbabu Savanna",
          quote: "Savana Merbabu adalah lukisan Tuhan, mengajak kita menari bersama angin di bawah langit yang tak terbatas."
        }
      ];

      const itinerary = [
        {
          day: "Hari 1",
          title: "Base Camp Adventure",
          items: [
            { time: "05.00", activity: "Berkumpul di Basecamp Merbabu", icon: <Coffee className="w-4 h-4" /> },
            { time: "06.00", activity: "Sarapan & Briefing Petualangan", icon: <Users className="w-4 h-4" /> },
            { time: "07.00", activity: "Start Pendakian Merbabu", icon: <Mountain className="w-4 h-4" /> },
            { time: "12.00", activity: "Istirahat & Nikmati Pemandangan", icon: <Coffee className="w-4 h-4" /> },
            { time: "17.00", activity: "Tiba di Pos 3 - Setup Camp", icon: <Tent className="w-4 h-4" /> },
            { time: "19.00", activity: "Makan Malam & Cerita Malam", icon: <Heart className="w-4 h-4" /> }
          ]
        },
        {
          day: "Hari 2",
          title: "Summit Attack",
          items: [
            { time: "03.00", activity: "Bangun & Persiapan Summit", icon: <Moon className="w-4 h-4" /> },
            { time: "04.00", activity: "Summit Attack ke Puncak", icon: <Star className="w-4 h-4" /> },
            { time: "06.30", activity: "Sunrise di Puncak Merbabu", icon: <Sun className="w-4 h-4" /> },
            { time: "08.00", activity: "Eksplorasi Kawah Candradimuka", icon: <Compass className="w-4 h-4" /> },
            { time: "10.00", activity: "Turun ke Basecamp", icon: <TreePine className="w-4 h-4" /> },
            { time: "15.00", activity: "Tiba di Basecamp - Selesai", icon: <Award className="w-4 h-4" /> }
          ]
        }
      ];

      const facilities = [
        { name: "Guide Berpengalaman Merbabu", icon: "🏔️" },
        { name: "Peralatan Camping Premium", icon: "⛺" },
        { name: "Makan 3x Sehari Bergizi", icon: "🍽️" },
        { name: "Dokumentasi Trip Profesional", icon: "📸" },
        { name: "P3K & Safety Terjamin", icon: "🏥" },
        { name: "Sertifikat Pendaki Merbabu", icon: "🏆" }
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
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1575573685828-7c1e20f05124?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyYmFidXxlbnwwfHwwfHx8MA%3D%3D')",
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <nav className="relative z-20 p-4">
            <div className="max-w-7xl mx-auto flex justify-center">
              <div className="bg-white/30 backdrop-blur-md rounded-full p-2 flex gap-2">
                {['gallery', 'itinerary', 'facilities'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-sm font-medium ${activeSection === section
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

          <div className={`relative z-10 text-center py-6 px-2 sm:px-4 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-4">
              <Mountain className="text-teal-300 w-8 h-8 sm:w-10 sm:h-10 mr-3 animate-bounce" />
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                GOHAPPY
              </h1>
              <Mountain className="text-teal-300 w-8 h-8 sm:w-10 sm:h-10 ml-3 animate-bounce" />
            </div>
            <p className="text-white text-base sm:text-xl mb-4 font-semibold drop-shadow-md animate-pulse">
              Escape a Little, Smile a Lot ✨
            </p>
            <p className="text-blue-200 text-sm sm:text-lg mb-2 font-medium">Petualangan Gunung Merbabu</p>
            <p className="text-blue-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
              Rasakan keajaiban Gunung Merbabu dengan savana yang memukau, sunrise yang menawan, dan cerita petualangan yang tak terlupakan bersama GOHAPPY!
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
              {[
                { icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300" />, text: "2 Hari 1 Malam" },
                { icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300" />, text: "Gunung Merbabu" },
                { icon: <Star className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300" />, text: "Puncak Impian" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/30 backdrop-blur-md rounded-xl p-2 sm:p-3 flex items-center space-x-2 sm:space-x-3 hover:bg-white/40 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {item.icon}
                  <span className="text-white font-medium text-xs sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="gallery" className="relative z-10 px-2 sm:px-4 pb-12">
            <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-teal-300 mr-3" />
                  <h2 className="text-2xl sm:text-4xl font-bold text-white drop-shadow-lg">Galeri Petualangan Merbabu</h2>
                  <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-teal-300 ml-3" />
                </div>
                <p className="text-blue-200 text-sm sm:text-lg max-w-3xl mx-auto">Jelajahi keindahan Gunung Merbabu melalui galeri kami. Klik foto untuk membaca kutipan inspiratif dari petualangan epik!</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
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
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="font-bold text-xs sm:text-base">{image.title}</h3>
                        <p className="text-xs sm:text-sm text-blue-200 mt-1">Klik untuk kutipan inspiratif</p>
                      </div>
                    </div>
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-8 sm:w-10 h-8 sm:h-10 bg-teal-400/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-teal-300">
                      <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-blue-500/80 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1">
                      <span className="text-white text-xs sm:text-sm font-bold">#{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="itinerary" className="relative z-10 px-2 sm:px-4 pb-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold text-white drop-shadow-lg mb-4">Jadwal Petualangan Merbabu</h2>
                <p className="text-blue-200 text-sm sm:text-lg max-w-3xl mx-auto">Ikuti rencana perjalanan kami untuk pengalaman mendaki Gunung Merbabu yang penuh makna dan kenangan!</p>
                <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                {itinerary.map((day, dayIndex) => (
                  <div key={dayIndex} className="bg-white/20 backdrop-blur-md rounded-2xl p-3 sm:p-6 shadow-2xl border border-white/30">
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">{day.day}</h3>
                    <p className="text-teal-300 font-semibold text-sm sm:text-lg mb-4 sm:mb-6">{day.title}</p>
                    <div className="space-y-2 sm:space-y-4">
                      {day.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2 sm:gap-4 p-2 sm:p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                          <div className="flex items-center gap-2 text-teal-300">
                            {item.icon}
                            <span className="font-bold text-xs sm:text-sm">{item.time}</span>
                          </div>
                          <span className="text-white text-xs sm:text-sm">{item.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="facilities" className="relative z-10 px-2 sm:px-4 pb-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-4xl font-bold text-white drop-shadow-lg mb-4">Fasilitas Petualangan</h2>
                <p className="text-blue-200 text-sm sm:text-lg max-w-3xl mx-auto">Nikmati kenyamanan dan keamanan dalam petualangan Merbabu Anda dengan fasilitas terbaik dari GOHAPPY!</p>
                <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {facilities.map((facility, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-md rounded-2xl p-3 sm:p-6 text-center shadow-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl sm:text-4xl mb-4 animate-pulse">{facility.icon}</div>
                    <h3 className="text-white font-bold text-sm sm:text-lg">{facility.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 px-2 sm:px-4 pb-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl p-4 sm:p-8 shadow-2xl">
                <h2 className="text-xl sm:text-3xl font-bold text-white mb-4">Siap Mendaki Merbabu?</h2>
                <p className="text-white/90 text-sm sm:text-lg mb-4 sm:mb-6">Bergabunglah dengan GOHAPPY dan wujudkan petualangan impian Anda di Gunung Merbabu sekarang!</p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  <button className="bg-white text-teal-800 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-base hover:bg-teal-100 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    WhatsApp: +62 857-4270-4619
                  </button>
                  <button className="bg-white/20 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-base hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/30">
                    Instagram: @gohappy.id_
                  </button>
                </div>
              </div>
            </div>
          </div>

          {selectedImage && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 z-50 animate-fade-in">
              <div className="bg-gradient-to-br from-teal-800 to-blue-900 rounded-2xl w-full max-w-[95vw] sm:max-w-6xl max-h-[98vh] overflow-auto shadow-2xl border border-white/20 animate-scale-in">
                <div className="flex justify-between items-center p-3 sm:p-4 border-b border-white/20 bg-gradient-to-r from-teal-400 to-blue-500">
                  <h3 className="text-lg sm:text-2xl font-bold text-white truncate">{selectedImage.title}</h3>
                  <button
                    onClick={closeModal}
                    className="w-8 sm:w-10 h-8 sm:h-10 bg-red-500/30 hover:bg-red-500/50 rounded-full flex items-center justify-center transition-colors duration-200 group border border-red-300/50"
                  >
                    <X className="w-4 sm:w-5 h-4 sm:h-5 text-red-200 group-hover:text-white" />
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:h-[80vh]">
                  <div className="sm:w-2/3 relative bg-black flex items-center justify-center p-2 sm:p-4">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      className="w-full max-h-[50vh] sm:max-h-[70vh] object-contain"
                    />
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full px-2 sm:px-3 py-1">
                      <span className="text-white text-xs sm:text-sm font-bold">#{selectedImage.index + 1} - Merbabu</span>
                    </div>
                  </div>

                  <div className="sm:w-1/3 p-3 sm:p-6 flex flex-col justify-center bg-gradient-to-br from-teal-900/50 to-blue-900/50">
                    <div className="text-center">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl">
                        <Mountain className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                      </div>
                      <h4 className="text-teal-300 font-bold text-base sm:text-xl mb-3 sm:mb-4">{selectedImage.title}</h4>
                      <blockquote className="text-white text-xs sm:text-base leading-relaxed italic mb-3 sm:mb-4 bg-white/10 p-2 sm:p-4 rounded-xl backdrop-blur-sm">
                        "{selectedImage.quote}"
                      </blockquote>
                      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-3 sm:mb-4 rounded-full"></div>
                      <p className="text-blue-300 text-xs sm:text-sm font-semibold">GOHAPPY - Escape a Little, Smile a Lot</p>
                      <p className="text-blue-400 text-xs mt-2">Petualangan Gunung Merbabu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };

export default App;