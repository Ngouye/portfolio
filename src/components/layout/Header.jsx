import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { navLinks } from '../../data/portfolioData';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNumberVisible, setIsNumberVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const revealNumber = () => {
        setIsNumberVisible(true);
        // Réinitialiser après 5 secondes
        setTimeout(() => setIsNumberVisible(false), 5000);
    };

    return (
        <header>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl border-b border-gray-800' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <a href="#accueil" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Ngouye Gning
                    </a>
                    <div className="hidden md:flex gap-8">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors hover:scale-105 transform font-medium">{link.label}</a>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        {/* Numéro de téléphone extraordinaire */}
                        <div className="relative group">
                            <button
                                onClick={revealNumber}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                            >
                                <Sparkles className="w-4 h-4 text-cyan-400" />
                                <span className="text-gray-200 font-medium">Me Contacter</span>
                                <Phone className="w-4 h-4 text-cyan-400" />
                            </button>
                            
                            {/* Animation de révélation */}
                            <div className={`absolute top-full right-0 mt-3 transition-all duration-500 transform ${isNumberVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-400/50 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-2 mb-3">
                                            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                                            <span className="text-cyan-400 text-sm font-semibold">Disponible maintenant</span>
                                            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                                        </div>
                                        <a 
                                            href="tel:+221779527784"
                                            className="block text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x"
                                        >
                                            +221 77 952 77 84
                                        </a>
                                        <p className="text-gray-400 text-sm mt-2">Cliquez pour appeler directement</p>
                                    </div>
                                </div>
                                {/* Pointeur de la bulle */}
                                <div className="absolute -top-2 right-6 w-4 h-4 bg-gray-900 border-l border-t border-cyan-400/50 rotate-45"></div>
                            </div>
                        </div>

                        <a href="#contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
                            Mission Freelance
                        </a>
                    </div>
                    <button onClick={toggleMenu} className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg" aria-label="Toggle menu">
                        {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu avec version extraordinaire */}
            <div className={`fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={toggleMenu} className="text-3xl font-semibold text-gray-200 hover:text-cyan-400 transition-colors">
                            {link.label}
                        </a>
                    ))}
                    
                    {/* Version mobile extraordinaire */}
                    <div className="text-center mt-8 p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-cyan-400/30 backdrop-blur-lg">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Sparkles className="w-6 h-6 text-cyan-400 animate-bounce" />
                            <span className="text-cyan-400 text-lg font-semibold">Contact Direct</span>
                            <Sparkles className="w-6 h-6 text-cyan-400 animate-bounce" />
                        </div>
                        <a 
                            href="tel:+33768411842"
                            onClick={toggleMenu}
                            className="block text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x mb-4"
                        >
                            +33 7 68 41 18 42
                        </a>
                        <p className="text-gray-400">Appelez-moi pour discuter de votre projet</p>
                    </div>

                    <a href="#contact" onClick={toggleMenu} className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
                        Mission Freelance
                    </a>
                </div>
            </div>

            {/* Styles CSS pour l'animation de gradient */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
            `}</style>
        </header>
    );
};

export default Header;