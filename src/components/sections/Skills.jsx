import { Code, Cloud, Shield, Server, BrainCircuit, Layers, Database } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolioData';
import { colorMapping } from '../../constants/colors';

const SkillCategory = ({ category, icon: Icon, items, color }) => {
    const c = colorMapping[color] || colorMapping.gray;
    return (
        <div className={`group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 ${c.border} transition-all duration-300 transform hover:-translate-y-1`}>
            <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.iconBg} flex items-center justify-center shadow-lg ${c.shadow} text-white`}>
                    <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-white">{category}</h4>
            </div>
            <ul className="space-y-4 text-gray-400">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className={`${c.text} mr-3 mt-1 shrink-0 text-lg`}>★</span>
                        <div>
                            <strong className="text-gray-200">{item.name}</strong>
                            {item.description && `: ${item.description}`}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const iconComponents = {
    Code: Code,
    Cloud: Cloud,
    Shield: Shield,
    Server: Server,
    BrainCircuit: BrainCircuit,
    Layers: Layers,
    Database: Database
};

const Skills = () => (
    <section id="competences" className="py-24 px-6 relative bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
            <SectionTitle title="Compétences Techniques" subtitle="Technologies et outils que je maîtrise pour vos projets" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.skills.map((skillGroup) => {
                    const IconComponent = iconComponents[skillGroup.icon];
                    return (
                        <SkillCategory 
                            key={skillGroup.category} 
                            {...skillGroup} 
                            icon={IconComponent}
                        />
                    );
                })}
            </div>
        </div>
    </section>
);

export default Skills;