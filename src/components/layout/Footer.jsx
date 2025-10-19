import { navLinks } from '../../data/portfolioData';

const Footer = () => (
    <footer className="py-10 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
                &copy; {new Date().getFullYear()} Ngouye Gning. Réalisé avec <span className="text-red-500">❤️</span> et React/Tailwind.
            </p>
            <div className="flex gap-6">
                {navLinks.slice(0, 5).map(link => (
                    <a key={link.href} href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">{link.label}</a>
                ))}
            </div>
        </div>
    </footer>
);

export default Footer;