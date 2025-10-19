import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import SocialLink from '../ui/SocialLink';
import { portfolioData } from '../../data/portfolioData';
import { colorMapping } from '../../constants/colors';

const Hero = () => {
    // Fonction pour télécharger le CV
    const handleDownloadCV = () => {
        // Remplacez cette URL par le lien direct vers votre CV
        const cvUrl = 'https://drive.google.com/file/d/1fLlPRY_b47TOC732jVkPewvIS8qTyDeP/view?usp=drive_link';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'CV_Ngouye_Gning_DevOps_Securite.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="accueil" className="pt-40 pb-24 px-6 relative overflow-hidden min-h-screen flex items-center">
            <div className="absolute inset-0 opacity-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#0e7490_80%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_100px,_rgba(0,199,255,0.1),transparent)] animate-pulse-slow"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-cyan-400 font-semibold text-lg tracking-wider uppercase">Freelance DevOps & Sécurité 🚀</p>
                            <h2 className="text-6xl md:text-7xl font-extrabold leading-tight">
                                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                    {portfolioData.name}
                                </span>
                            </h2>
                            <div className="flex flex-wrap gap-3 text-xl">
                                {portfolioData.roles.map(role => {
                                    const roleColor = role.includes('DevOps') ? 'blue' : 
                                                    role.includes('Sécurité') ? 'orange' : 
                                                    role.includes('Freelance') ? 'purple' : 'emerald';
                                    const c = colorMapping[roleColor];
                                    return (
                                        <span key={role} className={`px-4 py-2 ${c.tagBg} border ${c.tagBorder} rounded-full ${c.text} font-medium`}>{role}</span>
                                    )
                                })}
                            </div>
                        </div>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-lg">{portfolioData.introduction}</p>
                        
                        {/* Section Freelance Disponible */}
                        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-green-400 font-semibold">✅ Disponible pour missions freelance</span>
                            </div>
                            <p className="text-gray-300">{portfolioData.freelance.description}</p>
                        </div>

                        <div className="flex gap-4 flex-wrap pt-4">
                            <a href="#projets" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center gap-2">
                                Voir mes projets <ChevronDown className="w-5 h-5" />
                            </a>
                            <button 
                                onClick={handleDownloadCV}
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-purple-500/30 flex items-center gap-2 group"
                            >
                                <Download className="w-5 h-5 group-hover:animate-bounce" />
                                📄 Télécharger mon CV
                            </button>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <SocialLink href={portfolioData.contact.github} aria-label="Mon profil GitHub">
                                <Github className="w-5 h-5" />
                            </SocialLink>
                            <SocialLink href={portfolioData.contact.linkedin} aria-label="Mon profil LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </SocialLink>
                            <SocialLink href={`mailto:${portfolioData.contact.email}`} aria-label="M'envoyer un email">
                                <Mail className="w-5 h-5" />
                            </SocialLink>
                        </div>
                    </div>
                    <div className="relative group hidden md:block">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-all duration-1000 animate-pulse"></div>
                        <div className="relative rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                            <img src={portfolioData.photo} alt={portfolioData.name} className="w-full h-auto md:h-[600px] object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;