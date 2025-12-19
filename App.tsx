import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PageLoader } from './components/PageLoader';
import { ThemeTransition } from './components/ThemeTransition';
import { SectionTransition } from './components/SectionTransition';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <PageLoader />
      <ThemeTransition />
      <div className="min-h-screen w-full bg-[#fafafa] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] relative overflow-hidden transition-colors duration-500">
        {/* Subtle Apple-style gradient overlay */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/30 dark:to-white/[0.02]" />
        </div>
        
        <div className="relative z-10">
          <Navbar />
          <SectionTransition id="home">
            <Hero />
          </SectionTransition>
          <SectionTransition id="portfolio">
            <Portfolio />
          </SectionTransition>
          <SectionTransition id="services">
            <Services />
          </SectionTransition>
          <SectionTransition id="about">
            <About />
          </SectionTransition>
          <SectionTransition id="contact">
            <Contact />
          </SectionTransition>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

