const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16">
        <h3 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {title}
        </h3>
        <p className="text-gray-400 text-lg">{subtitle}</p>
    </div>
);

export default SectionTitle;