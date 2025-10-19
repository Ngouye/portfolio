const SocialLink = ({ href, 'aria-label': ariaLabel, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center transition-all transform hover:scale-110 text-gray-400 hover:text-white"
    >
        {children}
    </a>
);

export default SocialLink;