import maPhoto from '../assets/ngouye.jpg';
import projetDevOps from '../assets/projet-devops.jpg';
import projetCICD from '../assets/projet-cicd.jpg';
import projetSecurite from '../assets/projet-securite.jpg';
import projetIDS from '../assets/projet-ids.jpg';
import projetDjango from '../assets/projet-django.jpg';
import certificatCS50P from '../assets/cs50p-certificate.jpg';

export const portfolioData = {
    name: "Ngouye Gning",
    roles: ["Expert DevOps", "Développeur", "Expert Sécurité", "Freelance"],
    introduction: "Expert DevOps, Sécurité et Freelance passionné par la construction d'infrastructures sécurisées et évolutives. Expert en technologies cloud, pipelines CI/CD et bonnes pratiques de sécurité. J'apprends actuellement le DevSecOps.",
    photo: maPhoto,
    certifications: [
        {
            title: "CS50P - Introduction to Programming with Python",
            issuer: "Harvard University",
            date: "2024",
            description: "Certificat d'achèvement du cours CS50P de l'Université Harvard couvrant la programmation Python avancée, les structures de données, et les bonnes pratiques de développement.",
            image: certificatCS50P
        }
    ],
    skills: [
        {
            category: "Développement Logiciel",
            icon: "Code",
            color: "emerald",
            items: [
                { name: "Java / JavaFX", description: "applications desktop avec interface graphique." },
                { name: "JavaScript", description: "Développement dynamique côté client avec ES6+" },
                { name: "Python", description: "cryptographie, applications bancaires, scripts automatisés." },
                { name: "Java EE", description: "Développement d'applications web avec Servlets, JSP et JDBC." },
                { name: "React / React Native", description: "applications web et mobiles (CV interactif, interfaces complètes)." },
                { name: "Flask (Python)", description: "développement web sécurisé avec authentification et gestion de rôles." },
                { name: "PHP / MySQL / HTML / CSS / JavaScript", description: "développement web dynamique et sécurisé." }
            ]
        },
        {
            category: "Infrastructure & DevOps",
            icon: "Cloud",
            color: "blue",
            items: [
                { name: "Terraform", description: "Infrastructure as Code (IaC) pour AWS et autres clouds." },
                { name: "Ansible", description: "Automatisation de la configuration et du déploiement." },
                { name: "Docker & Kubernetes", description: "Conteneurisation et orchestration." },
                { name: "CI/CD", description: "Jenkins, GitLab CI pour des pipelines robustes." },
                { name: "Cloud", description: "AWS (S3, EC2, IAM) et bases de Azure/GCP." },
                { name: "Monitoring", description: "Prometheus, Grafana." },
            ]
        },
        {
            category: "Sécurité Informatique & Cryptographie",
            icon: "Shield",
            color: "orange",
            items: [
                { name: "Fonctions de hachage", description: "SHA-256." },
                { name: "Chiffrement symétrique", description: "AES." },
                { name: "Chiffrement asymétrique", description: "RSA." },
                { name: "Gestion des mots de passe", description: "BCrypt." },
                { name: "Sécurité des fichiers", description: "surveillance d'intégrité, journalisation, rapports PDF." },
                { name: "WAF/IPS/IDS", description: "Protection contre les menaces web et réseau." },
            ]
        },
        {
            category: "Sécurité Réseau & Pare-feu",
            icon: "Server",
            color: "cyan",
            items: [
                { name: "Virtualisation / Déploiement", description: "configuration de pfSense et FortiGate sur VMware." },
                { name: "Segmentation réseau", description: "VLANs, LAN, DMZ, WAN." },
                { name: "Contrôle du trafic", description: "règles firewall pour autoriser/limiter le trafic entrant/sortant." },
                { name: "NAT / PAT et VPN (OpenVPN)", description: "pour accès sécurisé." },
                { name: "Systèmes IDS/IPS", description: "Snort sur pfSense." },
                { name: "iptables / UFW", description: "sécurisation de serveurs Linux." }
            ]
        },
        {
            category: "Machine Learning (ML)",
            icon: "BrainCircuit",
            color: "purple",
            items: [
                { name: "Apprentissage supervisé", description: "régression, KNN, SVM, arbres de décision, Random Forest." },
                { name: "Apprentissage non supervisé", description: "clustering (K-means)." },
                { name: "Prétraitement des données", description: "nettoyage, normalisation, feature engineering." },
                { name: "Librairies", description: "scikit-learn, pandas, NumPy, matplotlib." }
            ]
        },
        
        
        {
            category: "Bases de données & Systèmes",
            icon: "Database",
            color: "yellow",
            items: [
                { name: "MySQL & SQL Server", description: "conception et gestion de bases, manipulation de datasets." },
                { name: "Linux (Kali, Ubuntu Server)", description: "déploiement, sécurisation et administration." },
                { name: "Windows Server / Windows 10-11", description: "administration basique et gestion des droits utilisateurs." }
            ]
        }
    ],
    projects: [
        
        {
            title: 'Pipeline CI/CD Sécurisé',
            description: 'Conception et implémentation de pipelines CI/CD robustes avec tests automatisés, analyse de sécurité et déploiement conteneurisé',
            tech: ['Jenkins', 'Docker', 'Kubernetes', 'GitLab'],
            icon: "Zap",
            gradient: 'from-emerald-500 to-teal-500',
            image: projetCICD,
            features: ['Tests automatisés', 'Analyse sécurité', 'Déploiement auto']
        },
        
        {
            title: 'Système de Détection d\'Intrusion (SDI)',
            description: 'Mise en place et configuration de Snort pour la détection proactive et la prévention d\'intrusions sur le réseau de l\'entreprise.',
            tech: ['Snort', 'Linux', 'Réseau', 'Sécurité'],
            icon: "Lightbulb",
            gradient: 'from-purple-500 to-indigo-500',
            image: projetIDS,
            features: ['Détection temps réel', 'Prévention intrusions', 'Rapports détaillés']
        },
        {
            title: 'Application Gestion Employés Django',
            description: 'Application web complète de gestion des employés développée avec Django, incluant authentification et interface administrateur.',
            tech: ['Django', 'Python', 'SQLite', 'HTML/CSS', 'JavaScript'],
            icon: "ClipboardList",
            gradient: 'from-green-500 to-emerald-500',
            image: projetDjango,
            features: ['Interface admin', 'Authentification', 'Gestion complète']
        }
    ],
    experience: [
        {
            title: 'Expert DevOps Senior - Freelance',
            period: '2025 - Présent',
            description: 'Architecture et gestion d\'infrastructures cloud complexes, déploiement CI/CD, et gouvernance de la sécurité pour divers clients.',
            icon: "Cloud"
        },
        {
            title: 'Développeur Full-Stack & Sécurité - Freelance',
            period: '2023 - 2025',
            description: 'Développement d\'applications web modernes et scalables avec un accent sur la sécurité par conception (Security by Design) pour des projets clients variés.',
            icon: "Code"
        },
        {
            title: 'Spécialiste Sécurité & Réseau',
            period: '2023 - 2025',
            description: 'Audits de sécurité, tests de pénétration et administration des pare-feu (FortiGate, pfSense).',
            icon: "Shield"
        }
    ],
    freelance: {
        available: true,
        description: "Disponible pour des missions freelance en DevOps et Développement. N'hésitez pas à me contacter pour discuter de votre projet.",
        services: [
            "Architecture et déploiement d'infrastructures cloud",
            "Mise en place de pipelines CI/CD",
            "Audits de sécurité et tests de pénétration",
            "Développement d'applications sécurisées",
            "Formation et conseil en DevOps"
        ]
    },
    contact: {
        email: "ngouyegning2001@gmail.com",
        github: "https://github.com/ndoondol",
        linkedin: "https://www.linkedin.com/in/ngouye-gning-316a812b3",
    }
};

export const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#competences", label: "Compétences" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projets", label: "Projets" },
    { href: "#contact", label: "Contact" },
];