import { Mail, Linkedin, Sparkles, Send, MessageCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import profilePhoto from '../../assets/profile.jpg';

const Contact = () => (
    <section id="contact" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-6xl mx-auto relative">
            <div className="bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-800 p-8 md:p-12 rounded-3xl border border-purple-500/30 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400/10 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
                
                <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Photo avec icône de message */}
                    <div className="flex-shrink-0">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full opacity-75 group-hover:opacity-100 blur-xl transition-all duration-300 animate-pulse"></div>
                            <img 
                                src={profilePhoto} 
                                alt="Photo de profil"
                                className="relative w-40 h-40 rounded-full border-4 border-gray-800 object-cover group-hover:scale-105 transition-transform duration-300 shadow-2xl shadow-purple-500/30 z-10"
                            />
                            {/* Icône de message animée */}
                            <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center border-2 border-gray-900 z-20 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/50 animate-bounce">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center border-2 border-gray-900 z-20">
                                <Sparkles className="w-5 h-5 text-gray-900 animate-spin" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start items-center gap-3 mb-6">
                            <MessageCircle className="w-8 h-8 text-cyan-400 animate-pulse" />
                            <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                                Discutons Ensemble 💬
                            </h3>
                        </div>
                        
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Envoyez-moi un message et parlons de votre projet. Je suis là pour vous aider à le concrétiser !
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a 
                                href={`mailto:${portfolioData.contact.email}`}
                                className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/40 flex items-center justify-center gap-3 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="relative">Email</span>
                            </a>
                            
                            <a 
                                href={portfolioData.contact.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group bg-gray-800/80 hover:bg-gray-700/80 border border-purple-500/30 hover:border-cyan-400/50 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-sm"
                            >
                                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Message LinkedIn</span>
                            </a>
                        </div>
                        
                        <p className="text-gray-400 mt-6 text-sm flex items-center justify-center md:justify-start gap-2">
                            <MessageCircle className="w-4 h-4 text-cyan-400" />
                            Toujours ravi de discuter de nouveaux projets
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;