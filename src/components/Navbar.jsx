import {useEffect} from 'react';
import '../scss/index.scss';
import navLogo from '../assets/navLogo.svg';
import accImg from '../assets/acc.svg';
import {FaSearch} from "react-icons/fa";
import {SlPresent} from "react-icons/sl";
import {IoMdNotificationsOutline, IoIosArrowDown} from "react-icons/io";

import Modal from './Modal';
import SideMenu from "./SideMenu";

const Navbar = ({
                    setTransaction,
                    isModalOpen,
                    setIsModalOpen,
                    currentBalance,
                    setCurrentBalance,
                    showSuccessMessage,
                    setShowSuccessMessage,

                }) => {

    useEffect(() => {
        const savedBalance = localStorage.getItem('balance');
        if (savedBalance) {
            setCurrentBalance(parseFloat(savedBalance));
        }
    }, [setCurrentBalance]);

    const handleModal = (isOpen) => {
        setIsModalOpen(isOpen);
    };

    const showSuccessMessageHandler = () => {
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar__container">
                    <div className="navbar__wrapper">
                        <div className="navbar__logo">
                            <div className="navbar__menu-icon">
                                <SideMenu/>
                            </div>
                            <div className="navbar__logo-image">
                                <img src={navLogo} alt="Logo"/>
                            </div>
                        </div>

                        <div className="navbar__menu">
                            <div className='navbar__menu-icons'>
                                <ul className="navbar__menu-list">
                                    <li className="navbar__menu-item"><FaSearch size={24}/></li>
                                    <li className="navbar__menu-item"><SlPresent size={24}/></li>
                                    <li className="navbar__menu-item navbar__menu-item--notification">
                                        <IoMdNotificationsOutline size={24}/>
                                        <span className="notification-badge"/>
                                    </li>
                                </ul>
                            </div>

                            <div className='balance-button'>
                                <div className='balance-button__left'>
                                    <span className='balance-button__amount'>{currentBalance} $</span>
                                    <span className='balance-button__percentage'>13%</span>
                                    <span className='balance-button__icon'><IoIosArrowDown/></span>
                                </div>

                                <div className='balance-button__right'>
                                    <span
                                        className='balance-button__add'
                                        onClick={() => handleModal(true)}
                                    >+</span>
                                </div>
                            </div>

                            <span className='navbar__menu-account'>
                                <img src={accImg} alt="account image" width={52} height={52}/>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            <Modal
                isOpen={isModalOpen}
                onClose={() => handleModal(false)}
                currentBalance={currentBalance}
                setCurrentBalance={setCurrentBalance}
                showSuccessMessage={showSuccessMessageHandler}
                setTransaction={setTransaction}
            />

            <div className={`success-message ${showSuccessMessage ? 'show' : ''}`}>
                Deposit successfully completed!
            </div>
        </>
    );
};

export default Navbar;