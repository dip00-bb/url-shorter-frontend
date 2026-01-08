import NavLinks from "./NavLinks";


interface MobileMenu {
    isOpen: boolean;
    onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenu) => (
    <div
        className={`md:hidden fixed top-16 left-0 right-0 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        style={{ backgroundColor: 'var(--background-color)', borderBottom: '1px solid var(--surface-border)' }}
    >
        <div className="px-6 py-8">
            <NavLinks mobile onClick={onClose} />
        </div>
    </div>
);

export default MobileMenu