import React, { useState } from 'react';
import { Building2, Camera, Home, Mail, Menu, Phone, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ru');

  const translations = {
    en: {
      // Navigation
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      services: 'Services',
      contact: 'Contact',

      // Hero Section
      heroTitle: 'Step Into Your Space with <span className="text-blue-500">Immersive 3D Tours</span>',
      heroSubtitle: 'High-quality virtual tours for real estate and hotels',
      heroButton: 'See Our Work',

      // About Section
      aboutTitle: 'Who We Are',
      aboutText: 'Immersive 3D Tours combines advanced Matterport technology and Kuula\'s innovative platform to deliver stunning virtual experiences. Based in Tashkent, we help businesses and property owners showcase their spaces with precision and style.',

      // Portfolio Section
      portfolioTitle: 'Our Tours',
      portfolioPoweredBy: 'Powered by Matterport and Kuula',

      // Services Section
      servicesTitle: 'What We Offer',
      service1Title: 'Real Estate Tours',
      service1Text: 'Interactive 3D tours to sell or rent properties faster',
      service2Title: 'Hospitality Tours',
      service2Text: 'Showcase hotels and venues with virtual walkthroughs',
      service3Title: 'Custom Tours',
      service3Text: 'Unique solutions for any space',

      // Contact Section
      contactTitle: 'Get in Touch',
      contactEmail: 'info@immersive3dtours.com',
      contactPhone: '+998 77 366 14 28',
      contactName: 'Name',
      contactEmailPlaceholder: 'Email',
      contactPhonePlaceholder: 'Phone',
      contactMessage: 'Message',
      contactButton: 'Submit',

      // Footer
      footerText: '© 2025 Immersive 3D Tours—Powered by Kuula & Matterport'
    },
    ru: {
      // Navigation
      home: 'Главная',
      about: 'О нас',
      portfolio: 'Портфолио',
      services: 'Услуги',
      contact: 'Контакты',

      // Hero Section
      heroTitle: 'Шагните в своё пространство с <span className="text-blue-500">Immersive 3D Tours</span>',
      heroSubtitle: 'Высококачественные виртуальные туры для недвижимости и отелей',
      heroButton: 'Посмотреть работы',

      // About Section
      aboutTitle: 'Кто мы',
      aboutText: 'Immersive 3D Tours объединяет передовые технологии Matterport и инновационную платформу Kuula, чтобы создавать потрясающие виртуальные впечатления. Мы базируемся в Ташкенте и помогаем бизнесам и владельцам недвижимости демонстрировать свои пространства с точностью и стилем.',

      // Portfolio Section
      portfolioTitle: 'Наши туры',
      portfolioPoweredBy: 'Создано с помощью Matterport и Kuula',

      // Services Section
      servicesTitle: 'Что мы предлагаем',
      service1Title: 'Туры по недвижимости',
      service1Text: 'Интерактивные 3D-туры для быстрой продажи или аренды недвижимости',
      service2Title: 'Гостиничные туры',
      service2Text: 'Демонстрация отелей и площадок с виртуальными прогулками',
      service3Title: 'Пользовательские туры',
      service3Text: 'Уникальные решения для любого пространства',

      // Contact Section
      contactTitle: 'Свяжитесь с нами',
      contactEmail: 'info@immersive3dtours.com',
      contactPhone: '+998 77 366 14 28',
      contactName: 'Имя',
      contactEmailPlaceholder: 'Электронная почта',
      contactPhonePlaceholder: 'Телефон',
      contactMessage: 'Сообщение',
      contactButton: 'Отправить',

      // Footer
      footerText: '© 2025 Immersive 3D Tours — Создано с помощью Kuula и Matterport'
    },
    uz: {
      // Navigation
      home: 'Asosiy',
      about: 'Biz haqimizda',
      portfolio: 'Portfel',
      services: 'Xizmatlar',
      contact: 'Aloqa',

      // Hero Section
      heroTitle: "O'z makoningizga kirib keling <span className=\"text-blue-500\">Immersive 3D Tours</span> bilan",
      heroSubtitle: "Ko'chmas mulk va mehmonxonalar uchun yuqori sifatli virtual turlar",
      heroButton: "Ishlarimizni Ko'rish",

      // About Section
      aboutTitle: 'Biz kimmiz',
      aboutText: "Immersive 3D Tours Matterportning ilg'or texnologiyalari va Kuula innovatsion platformasini birlashtirib, ajoyib virtual tajribalar yaratadi. Toshkentda joylashgan holda, biz biznes va mulk egalari uchun o'z makonlarini aniqlik va uslub bilan namoyish qilishga yordam beramiz.",

      // Portfolio Section
      portfolioTitle: 'Bizning turlarimiz',
      portfolioPoweredBy: 'Matterport va Kuula yordamida yaratildi',

      // Services Section
      servicesTitle: 'Biz nima taklif qilamiz',
      service1Title: "Ko'chmas mulk turlari",
      service1Text: "Ko'chmas mulkni tezroq sotish yoki ijaraga olish uchun interaktiv 3D turlar",
      service2Title: 'Mehmonxona turlari',
      service2Text: 'Mehmonxonalar va joylarni virtual sayohatlar bilan namoyish qilish',
      service3Title: 'Maxsus turlar',
      service3Text: 'Har qanday makon uchun noyob yechimlar',

      // Contact Section
      contactTitle: "Biz bilan bog'laning",
      contactEmail: 'info@immersive3dtours.com',
      contactPhone: '+998 77 366 14 28',
      contactName: 'Ism',
      contactEmailPlaceholder: 'E-pochta',
      contactPhonePlaceholder: 'Telefon',
      contactMessage: 'Xabar',
      contactButton: 'Yuborish',

      // Footer
      footerText: '© 2025 Immersive 3D Tours — Kuula va Matterport tomonidan yaratildi'
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Montserrat']">
      {/* Header */}
      <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-500">I3DT</a>
          
          {/* Language Switcher with Flags */}
          <div className="flex space-x-2">
            <button
              className={`p-1 rounded-full ${language === 'en' ? 'bg-blue-500' : 'bg-gray-800'}`}
              onClick={() => setLanguage('en')}
            >
              🇬🇧
            </button>
            <button
              className={`p-1 rounded-full ${language === 'ru' ? 'bg-blue-500' : 'bg-gray-800'}`}
              onClick={() => setLanguage('ru')}
            >
              🇷🇺
            </button>
            <button
              className={`p-1 rounded-full ${language === 'uz' ? 'bg-blue-500' : 'bg-gray-800'}`}
              onClick={() => setLanguage('uz')}
            >
              🇺🇿
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className={`md:flex items-center gap-8 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-black/90 p-4 flex flex-col gap-4' : 'hidden'}`}>
            <a href="#home" className="hover:text-blue-500 transition-colors">{translations[language].home}</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">{translations[language].about}</a>
            <a href="#portfolio" className="hover:text-blue-500 transition-colors">{translations[language].portfolio}</a>
            <a href="#services" className="hover:text-blue-500 transition-colors">{translations[language].services}</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">{translations[language].contact}</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="bg-black/70 w-full min-h-screen flex items-center">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" dangerouslySetInnerHTML={{ __html: translations[language].heroTitle }} />
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              {translations[language].heroSubtitle}
            </p>
            <a 
              href="#portfolio"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              {translations[language].heroButton}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{translations[language].aboutTitle}</h2>
          <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            <p>{translations[language].aboutText}</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{translations[language].portfolioTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Tashkent Apartment', type: 'Kuula', link: 'https://kuula.co/share/collection/7b6hC?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1' },
              { title: 'Luxury Villa', type: 'Kuula', link: 'https://kuula.co/share/collection/7b6hC?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1' },
              { title: 'Hotel Suite', type: 'Matterport', link: 'https://kuula.co/share/collection/7b6hC?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1' },
              { title: 'Office Space', type: 'Kuula', link: 'https://kuula.co/share/collection/7b6hC?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1' }
            ].map((tour, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                {tour.link ? (
                  <a href={tour.link} target="_blank" rel="noopener noreferrer" className="block w-full h-64 flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors">
                    <span className="text-blue-500">View Tour</span>
                  </a>
                ) : (
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <Camera size={48} className="text-blue-500" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-gray-400">Powered by {tour.type}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-400">{translations[language].portfolioPoweredBy}</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{translations[language].servicesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <Home className="text-blue-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">{translations[language].service1Title}</h3>
              <p className="text-gray-300">{translations[language].service1Text}</p>
            </div>
            <div className="bg-black p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <Building2 className="text-blue-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">{translations[language].service2Title}</h3>
              <p className="text-gray-300">{translations[language].service2Text}</p>
            </div>
            <div className="bg-black p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <Camera className="text-blue-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">{translations[language].service3Title}</h3>
              <p className="text-gray-300">{translations[language].service3Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{translations[language].contactTitle}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="text-blue-500" />
                  <a href={`mailto:${translations[language].contactEmail}`} className="hover:text-blue-500 transition-colors">
                    {translations[language].contactEmail}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-500" />
                  <a href={`tel:${translations[language].contactPhone}`} className="hover:text-blue-500 transition-colors">
                    {translations[language].contactPhone}
                  </a>
                </div>
              </div>
              <form className="flex-1 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder={translations[language].contactName}
                  required
                  className="w-full bg-gray-900 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder={translations[language].contactEmailPlaceholder}
                  required
                  className="w-full bg-gray-900 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder={translations[language].contactPhonePlaceholder}
                  required
                  className="w-full bg-gray-900 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder={translations[language].contactMessage}
                  required
                  rows={4}
                  className="w-full bg-gray-900 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600 transition-colors"
                >
                  {translations[language].contactButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>{translations[language].footerText}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;