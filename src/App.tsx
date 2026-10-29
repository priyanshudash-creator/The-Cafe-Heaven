import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { MENU_ITEMS } from './data/menu';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-espresso-900 selection:bg-terracotta-500 selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onVisitUs={() => scrollToSection('visit')}
        />

        <OurStory />

        <MenuSection items={MENU_ITEMS} />

        <GallerySection />

        <VisitUs />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
