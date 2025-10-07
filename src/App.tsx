import { Github, Linkedin, Mail, Code, Shield, Server, Terminal, Download, ChevronDown, Award, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Terraform', 'Ansible', 'AWS', 'Azure'],
    programming: ['Python', 'JavaScript', 'Go', 'Bash', 'TypeScript', 'Java', 'React', 'Node.js'],
    security: ['OWASP', 'Tests de Pénétration', 'Audits de Sécurité', 'Évaluation des Vulnérabilités', 'Sécurité Réseau', 'IAM']
  };

  const projects = [
    {
      title: 'Automatisation d\'Infrastructure',
      description: 'Déploiement automatisé d\'infrastructure cloud avec Terraform et Ansible, réduisant le temps de déploiement de 70%',
      tech: ['Terraform', 'Ansible', 'AWS'],
      icon: Server,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Pipeline CI/CD Optimisé',
      description: 'Conception et implémentation de pipelines CI/CD robustes avec tests automatisés et analyse de sécurité',
      tech: ['Jenkins', 'Docker', 'GitLab'],
      icon: Terminal,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Framework de Sécurisation',
      description: 'Développement d\'un framework de sécurité complet pour la protection des applications et de l\'infrastructure',
      tech: ['OWASP', 'Python', 'Kubernetes'],
      icon: Shield,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const experience = [
    {
      title: 'Ingénieur DevOps Senior',
      period: '2022 - Présent',
      description: 'Architecture et gestion d\'infrastructures cloud complexes'
    },
    {
      title: 'Développeur Full-Stack',
      period: '2020 - 2022',
      description: 'Développement d\'applications web modernes et scalables'
    },
    {
      title: 'Spécialiste Sécurité',
      period: '2019 - 2020',
      description: 'Audits de sécurité et tests de pénétration'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ngouye Gning
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#accueil" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform">Accueil</a>
            <a href="#apropos" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform">À propos</a>
            <a href="#competences" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform">Compétences</a>
            <a href="#projets" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform">Projets</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            Me contacter
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-cyan-400 font-semibold text-lg tracking-wide uppercase">Portfolio Professionnel</p>
                <h2 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    Ngouye Gning
                  </span>
                </h2>
                <div className="flex flex-wrap gap-3 text-xl">
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300">Ingénieur DevOps</span>
                  <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300">Développeur</span>
                  <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-300">Expert Sécurité</span>
                </div>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed">
                Passionné par la construction d'infrastructures sécurisées et évolutives.
                Expert en technologies cloud, pipelines CI/CD et bonnes pratiques de sécurité.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#projets"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center gap-2"
                >
                  Voir mes projets
                  <ChevronDown className="w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Télécharger CV
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ngouye.gning@example.com"
                  className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ngouye Gning"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              À Propos de Moi
            </h3>
            <p className="text-gray-400 text-lg">Découvrez mon parcours et mes domaines d'expertise</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                  <Server className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-semibold mb-4">Excellence DevOps</h4>
                <p className="text-gray-400 leading-relaxed">
                  Architecture et gestion d'infrastructures cloud avec focus sur l'automatisation, la scalabilité et la fiabilité.
                </p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                  <Code className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-semibold mb-4">Développement Full-Stack</h4>
                <p className="text-gray-400 leading-relaxed">
                  Construction d'applications robustes avec des technologies modernes et du code propre et maintenable.
                </p>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-semibold mb-4">Sécurité Avant Tout</h4>
                <p className="text-gray-400 leading-relaxed">
                  Implémentation des meilleures pratiques de sécurité et réalisation d'audits approfondis de vulnérabilités.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl border border-gray-700">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-blue-400" />
              <h4 className="text-3xl font-bold">Expérience Professionnelle</h4>
            </div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50"></div>
                    {index < experience.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 group-hover:border-blue-500 transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="text-xl font-semibold">{exp.title}</h5>
                        <span className="text-sm text-cyan-400 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-24 px-6 relative bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Compétences Techniques
            </h3>
            <p className="text-gray-400 text-lg">Technologies et outils que je maîtrise</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Server className="w-7 h-7" />
                </div>
                <h4 className="text-3xl font-bold">DevOps</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.devops.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500/10 text-blue-300 px-5 py-2.5 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/20 transition-all transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-emerald-500 transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Code className="w-7 h-7" />
                </div>
                <h4 className="text-3xl font-bold">Programmation</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.programming.map((skill) => (
                  <span
                    key={skill}
                    className="bg-emerald-500/10 text-emerald-300 px-5 py-2.5 rounded-full text-sm font-medium border border-emerald-500/30 hover:bg-emerald-500/20 transition-all transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-orange-500 transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Shield className="w-7 h-7" />
                </div>
                <h4 className="text-3xl font-bold">Sécurité</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.security.map((skill) => (
                  <span
                    key={skill}
                    className="bg-orange-500/10 text-orange-300 px-5 py-2.5 rounded-full text-sm font-medium border border-orange-500/30 hover:bg-orange-500/20 transition-all transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Projets Phares
            </h3>
            <p className="text-gray-400 text-lg">Découvrez mes réalisations les plus remarquables</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-xl`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-4">{project.title}</h4>
                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl border border-gray-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"></div>
            <div className="relative">
              <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Travaillons Ensemble
              </h3>
              <p className="text-xl text-gray-400 mb-10">
                Je suis toujours intéressé par de nouveaux projets et opportunités.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="mailto:ngouye.gning@example.com"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  M'envoyer un email
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-10 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-3"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-10 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-3"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            &copy; 2025 Ngouye Gning. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a>
            <a href="#apropos" className="text-gray-400 hover:text-white transition-colors">À propos</a>
            <a href="#competences" className="text-gray-400 hover:text-white transition-colors">Compétences</a>
            <a href="#projets" className="text-gray-400 hover:text-white transition-colors">Projets</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
