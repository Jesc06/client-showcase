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
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <PageLoader />
      <ThemeTransition />
      <div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-[#050508] dark:via-[#0a0a14] dark:to-[#050508] text-gray-900 dark:text-white relative overflow-hidden">
        {/* Theme Transition Overlay */}
        <div 
          className="fixed inset-0 pointer-events-none z-[9999] opacity-0 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1), transparent 70%)',
            opacity: 'var(--theme-transition-active)'
          }}
        />
        {/* Premium Animated Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/8 to-purple-500/8 dark:from-accent/5 dark:to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/8 to-blue-500/8 dark:from-purple-500/5 dark:to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-bl from-blue-500/8 to-accent/8 dark:from-blue-500/5 dark:to-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
          
          {/* Enhanced light mode orbs */}
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-orange-300/10 to-pink-300/10 dark:opacity-0 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-tr from-cyan-300/10 to-blue-300/10 dark:opacity-0 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
        </div>
        
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Portfolio />
          <Services />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

