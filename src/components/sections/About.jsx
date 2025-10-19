import { Briefcase, Cloud, Code, Shield } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolioData';
import { colorMapping } from '../../constants/colors';

const ExpertiseCard = ({ icon: Icon, title, description, gradient }) => {
    const g = colorMapping[gradient] || colorMapping.gray;
    return (
        <div className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 ${g.border} transition-all duration-300 transform hover:scale-105`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${g.bg} to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${g.iconBg} flex items-center justify-center mb-6 shadow-lg ${g.shadow} text-white`}>
                    <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-white">{title}</h4>
                <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const ExperienceTimeline = () => (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-3xl border border-gray-700">
        <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            <h4 className="text-3xl font-bold text-white">Expérience Professionnelle</h4>
        </div>
        <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => {
                const IconComponent = exp.icon === "Cloud" ? Cloud : exp.icon === "Code" ? Code : Shield;
                return (
                    <div key={index} className="flex gap-6 group">
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50 flex items-center justify-center text-white p-0.5">
                                <IconComponent className="w-3 h-3"/>
                            </div>
                            {index < portfolioData.experience.length - 1 && <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent mt-2"></div>}
                        </div>
                        <div className="flex-1 pb-8">
                            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 group-hover:border-blue-500 transition-all">
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                                    <h5 className="text-xl font-semibold text-white">{exp.title}</h5>
                                    <span className="text-sm text-cyan-400 font-medium whitespace-nowrap">{exp.period}</span>
                                </div>
                                <p className="text-gray-400">{exp.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
);

const About = () => (
    <section id="apropos" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
            <SectionTitle title="À Propos de Moi" subtitle="Découvrez mon parcours et mes services en freelance" />
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <ExpertiseCard icon={Cloud} title="Excellence DevOps" gradient="blue" description="Architecture et gestion d'infrastructures cloud avec focus sur l'automatisation, la scalabilité et la fiabilité." />
                <ExpertiseCard icon={Code} title="Développement Full-Stack" gradient="emerald" description="Construction d'applications robustes avec des technologies modernes et du code propre et maintenable." />
                <ExpertiseCard icon={Shield} title="Sécurité Avant Tout" gradient="orange" description="Implémentation des meilleures pratiques de sécurité et réalisation d'audits approfondis de vulnérabilités." />
            </div>
            
            {/* Section Services Freelance */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-3xl border border-gray-700 mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <Briefcase className="w-8 h-8 text-purple-400" />
                    <h4 className="text-3xl font-bold text-white">Services Freelance</h4>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.freelance.services.map((service, index) => (
                        <div key={index} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all group">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                <h5 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                                    {service}
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/30">
                    <p className="text-gray-300 text-center">
                        <strong>💼 Disponible pour vos projets !</strong> N'hésitez pas à me contacter pour discuter de vos besoins spécifiques.
                    </p>
                </div>
            </div>

            <ExperienceTimeline />
        </div>
    </section>
);

export default About;