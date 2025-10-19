import { Award } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolioData';

const Certifications = () => (
    <section id="certifications" className="py-24 px-6 relative bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
            <SectionTitle title="Certifications" subtitle="Mes certifications académiques et professionnelles" />
            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                {portfolioData.certifications.map((certification, index) => (
                    <div key={index} className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 text-white mb-4 lg:mb-0">
                                    <Award className="w-8 h-8" />
                                </div>
                            </div>
                            <div className="flex-1 text-center lg:text-left">
                                <h4 className="text-2xl font-bold text-white mb-2">{certification.title}</h4>
                                <p className="text-cyan-400 font-semibold mb-2">{certification.issuer} • {certification.date}</p>
                                <p className="text-gray-400 mb-4">{certification.description}</p>
                            </div>
                        </div>
                        
                        {/* Section image du certificat */}
                        <div className="mt-6 border-t border-gray-700 pt-6">
                            {certification.image ? (
                                <div className="relative group/certificate">
                                    <img 
                                        src={certification.image} 
                                        alt={`Certificat ${certification.title}`}
                                        className="w-full max-w-2xl mx-auto rounded-xl border border-gray-600 shadow-2xl transition-transform duration-300 group-hover/certificate:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-xl opacity-0 group-hover/certificate:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                        <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">Certificat Harvard CS50P</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 border border-cyan-500/30">
                                        <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                                        <h5 className="text-xl font-semibold text-cyan-300 mb-2">Certificat Harvard CS50P</h5>
                                        <p className="text-gray-400 mb-4">
                                            Image du certificat à ajouter
                                        </p>
                                        <div className="flex justify-center gap-4">
                                            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">Harvard University</span>
                                            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">2024</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Certifications;