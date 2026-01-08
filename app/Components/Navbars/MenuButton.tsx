
interface MenuButton {
    isOpen: boolean;
    onClick: () => void
}

const MenuButton = ({ isOpen, onClick }:MenuButton ) => (
    <button
        onClick={onClick}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
        aria-label="Toggle menu"
    >
        <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
        />
        <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                }`}
        />
        <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
        />
    </button>
);


export default MenuButton