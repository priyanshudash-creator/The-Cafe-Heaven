import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { VisitPage } from './pages/VisitPage';

export type TabId = 'home' | 'story' | 'menu' | 'gallery' | 'visit';

export function App() {
  const getInitialTab = (): TabId => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['home', 'story', 'menu', 'gallery', 'visit'].includes(hash)) {
      return hash as TabId;
    }
    return 'home';
  };

  const [activeTab, setActiveTab] = useState<TabId>(getInitialTab);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'story', 'menu', 'gallery', 'visit'].includes(hash)) {
        setActiveTab(hash as TabId);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    const validTab = (['home', 'story', 'menu', 'gallery', 'visit'].includes(tab) ? tab : 'home') as TabId;
    setActiveTab(validTab);
    window.location.hash = validTab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-espresso-900 selection:bg-terracotta-500 selection:text-white">
      {/* Sticky Top Navigation Bar */}
      <Navbar onNavigate={handleTabChange} activeTab={activeTab} />

      {/* Dynamic Multi-Page Router based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && <HomePage onNavigate={handleTabChange} />}
        {activeTab === 'story' && <StoryPage onNavigate={handleTabChange} />}
        {activeTab === 'menu' && <MenuPage />}
        {activeTab === 'gallery' && <GalleryPage />}
        {activeTab === 'visit' && <VisitPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleTabChange} />
    </div>
  );
}

export default App;
