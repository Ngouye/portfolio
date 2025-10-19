import { Mail, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => (
    <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-3xl border border-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 animate-pulse-slow opacity-50"></div>
                <div className="relative">
                    <h3 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Travaillons Ensemble 🤝</h3>
                    <p className="text-xl text-gray-400 mb-10">Je suis disponible pour des missions freelance en DevOps et Développement. Contactez-moi pour discuter de votre projet.</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a href={`mailto:${portfolioData.contact.email}`} className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center gap-3">
                            <Mail className="w-5 h-5" /> M'envoyer un email
                        </a>
                        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-10 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-3">
                            <Linkedin className="w-5 h-5" /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;