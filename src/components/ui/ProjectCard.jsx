import { useState } from 'react';

const ProjectCard = ({ project }) => {
    const Icon = project.icon;
    const [imageLoaded, setImageLoaded] = useState(false);
    
    return (
        <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
            {/* Image du projet */}
            <div className="relative h-48 overflow-hidden">
                {project.image ? (
                    <>
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                                imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                            onLoad={() => setImageLoaded(true)}
                        />
                        {!imageLoaded && (
                            <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
                                <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute top-4 right-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg text-white`}>
                                <Icon className="w-6 h-6" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white`}>
                            <Icon className="w-8 h-8" />
                        </div>
                    </div>
                )}
            </div>

            {/* Contenu du projet */}
            <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h4>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                </p>
                
                {/* Features */}
                {project.features && (
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                            {project.features.map((feature, index) => (
                                <span 
                                    key={index}
                                    className="bg-gray-700/50 text-cyan-300 px-2 py-1 rounded text-xs border border-cyan-700/30"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span 
                            key={tech} 
                            className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
        </div>
    );
};

export default ProjectCard;