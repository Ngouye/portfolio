import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white selection:bg-cyan-500/30">
            <style jsx global>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.25; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 15s infinite ease-in-out;
                }
            `}</style>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Certifications />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;