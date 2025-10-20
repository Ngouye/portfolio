
import { navLinks } from '../../data/portfolioData';
import { Heart, Code, Coffee, Sparkles } from 'lucide-react';

const Footer = () => (
    <footer className="py-12 px-6 bg-gradient-to-t from-gray-900 to-black border-t border-gray-800 relative overflow-hidden">
        {/* Effets d'arrière-plan magiques */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-cyan-900/10"></div>
        <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
            {/* Section principale */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
                {/* Logo et texte */}
                <div className="flex flex-col items-center lg:items-start gap-4">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-gray-900"></div>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Ngouye Gning
                        </span>
                    </div>
                    
                    <p className="text-gray-400 text-center lg:text-left flex items-center gap-2 flex-wrap justify-center">
                        <span>Réalisé avec</span>
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                        <span>,</span>
                        <Coffee className="w-4 h-4 text-amber-600" />
                        <span>et de la magie</span>
                        <Sparkles className="w-4 h-4 text-purple-400" />
                    </p>
                </div>

                {/* Liens de navigation */}
                <div className="flex flex-wrap justify-center gap-6">
                    {navLinks.slice(0, 5).map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            className="group text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
                        >
                            <span className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Séparateur */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

            {/* Section inférieure avec technologies */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span>Propulsé par :</span>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-1 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                            <Code className="w-3 h-3 text-blue-400" />
                            <span className="text-xs">React</span>
                        </div>
                        <div className="flex items-center gap-1 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                            <span className="text-xs">Tailwind</span>
                        </div>
                        <div className="flex items-center gap-1 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                            <Sparkles className="w-3 h-3 text-purple-400" />
                            <span className="text-xs">TypeScript</span>
                        </div>
                    </div>
                </div>

                <div className="text-gray-500 text-sm flex items-center gap-4">
                    <span>&copy; {new Date().getFullYear()} Tous droits réservés</span>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <span>Made with passion</span>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;