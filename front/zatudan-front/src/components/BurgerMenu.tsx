import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';
import { useState, useRef, useEffect } from 'react';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    let isMobile = false;
    if (typeof window !== "undefined") {
        isMobile = window.innerWidth <= 768;
    }
    return (

        <div className="relative">
            <div className={`${isOpen && isMobile ? 'absolute top-full right-4 p-4 bg-white border rounded z-10' : 'hidden'} md:block`} ref={menuRef}>
                {Object.entries(CATEGORIES).map(([key, val]) => (
                    <Link key={key} href={key === 'top' ? '/' : `/categories/${key}`} className="md:text-white text-gray-600 font-bold hover:text-black py-1 block md:inline-block w-20 text-sm" onClick={closeMenu}>{val}</Link>
                ))}
            </div>
            <button
                className="md:hidden focus:outline-none"
                onClick={handleToggle}
            >
                <div className="w-6 h-0.5 bg-gray-600 my-1 rounded"></div>
                <div className="w-6 h-0.5 bg-gray-600 my-1 rounded"></div>
                <div className="w-6 h-0.5 bg-gray-600 my-1 rounded"></div>
            </button>
        </div>
    );
};

export default BurgerMenu;