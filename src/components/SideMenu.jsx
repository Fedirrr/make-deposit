import { useState, useEffect } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import navLogo from "../assets/navLogo.svg";
import {menuItems} from "../mock/data";

const SideMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <>
            <div className="side-menu__icon" onClick={toggleMenu}>
                <HiOutlineMenuAlt1 size={24} color='white' />
            </div>

            <div className={`side-menu ${isMenuOpen ? 'side-menu--open' : ''}`}>
                <div className="side-menu__header">
                    <div className="navbar__logo-image">
                        <img src={navLogo} alt="Logo"/>
                    </div>
                    <IoMdClose className="side-menu__close-icon" onClick={toggleMenu} />
                </div>
                <ul className="side-menu__list">
                    {
                        menuItems.map(({menuTitle}) => (
                            <li key={menuTitle} className="side-menu__item">
                                {menuTitle}
                            </li>
                        ))
                    }

                </ul>
            </div>


            {isMenuOpen && (
                <div className={`side-menu__overlay ${isMenuOpen ? 'side-menu__overlay--visible' : ''}`} onClick={toggleMenu}></div>
            )}
        </>
    );
};

export default SideMenu;