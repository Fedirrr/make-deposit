import {useState} from 'react';
import ReactDOM from 'react-dom';
import {IoMdClose} from 'react-icons/io';
import {IoIosArrowDown} from 'react-icons/io';
import {amountListDigit, paymentMethods} from "../mock/data";
import {FaChevronLeft} from "react-icons/fa";
import PromoInput from "./PromoInput";
import uniqid from "uniqid";

const formatTransactionDate = (date) => {
    const optionsDate = {day: '2-digit', month: '2-digit'};
    const optionsTime = {hour: 'numeric', minute: 'numeric', hour12: true};

    const formattedDate = date.toLocaleDateString('en-US', optionsDate).replace(/\//g, '.');
    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

    return `${formattedDate} at ${formattedTime}`;
};

const generateRandomNumber = () => {
    return Math.floor(1000000 + Math.random() * 9000000).toString();
};

const Modal = ({
                   isOpen,
                   onClose,
                   currentBalance,
                   setCurrentBalance,
                   showSuccessMessage,
                   setTransaction,
                   paymentMethod,
               }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethods[0]);
    const [inputValue, setInputValue] = useState(21);


    const handlePaymentMethod = (method) => {
        setSelectedPaymentMethod(method);
        setDropdownOpen(false);
    };

    const handleChange = (e) => {
        const value = e.target.value.replace(/[^0-9.]/g, '');
        if ((value.match(/\./g) || []).length > 1) {
            setInputValue(value.replace(/\.+$/, ''));
        } else {
            setInputValue(value);
        }
    };

    const handleAmountClick = (amount) => {
        const currentAmount = parseFloat(inputValue) || 0;
        setInputValue(currentAmount + +amount);
    };

    const handleDeposit = () => {
        const depositAmount = parseFloat(inputValue);
        const formattedDate = formatTransactionDate(new Date());

        if (!isNaN(depositAmount)) {
            const newTransaction = [
                {
                    id: uniqid(),
                    topText: ` by ${selectedPaymentMethod.name}`,
                    bottomText: 'Withdraw',
                    image: selectedPaymentMethod.img
                },
                {
                    id: uniqid(),
                    topText: generateRandomNumber(),
                    bottomText: 'Transaction Number'
                },
                {
                    id: uniqid(),
                    topText: formattedDate,
                    bottomText: 'Payment Date'
                },
                {
                    id: uniqid(),
                    topText: `${depositAmount}$`,
                    bottomText: 'Amount Payed'
                },
                {
                    id: uniqid(),
                    topText: 'Processing',
                    bottomText: 'Operation Status'
                }
            ];

            setTransaction((prevTransactions) => {
                const updatedTransactions = [newTransaction, ...prevTransactions];
                localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
                return updatedTransactions;
            });

            const updatedBalance = currentBalance + depositAmount;
            setCurrentBalance(updatedBalance);
            localStorage.setItem('balance', updatedBalance);

            onClose();
            setInputValue(21);
            showSuccessMessage();
        }
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <span className="back-link" onClick={onClose}>
                        <FaChevronLeft/>
                        Back to Payment Method</span>
                    <IoMdClose className="close-icon" onClick={onClose}/>
                </div>

                <div className="balance-section">
                    <span className="balance-title">Current Balance: </span>
                    <span className="balance-amount">$ {currentBalance}</span>
                </div>

                <div className="payment-container">
                    <div className="payment-wrapper">
                        <div className="payment-info" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                            <div className='modal__payment-info-content'>
                                {
                                    paymentMethod ? (
                                        <>

                                            <div className="payment-info__image">
                                                <img src={paymentMethod.image} alt="Payment Method"/>
                                            </div>
                                            <div className="payment-info__details">
                                                <span>{paymentMethod.paymentName} • Comission {paymentMethod.commission}</span>
                                                <span className="small-text">{selectedPaymentMethod.details}</span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="payment-info__image">
                                                <img src={selectedPaymentMethod.img} alt="Payment Method"/>
                                            </div>
                                            <div className="payment-info__details">
                                                <span>{selectedPaymentMethod.name} • Comission {selectedPaymentMethod.commission}</span>
                                                <span className="small-text">{selectedPaymentMethod.details}</span>
                                            </div>
                                        </>
                                    )
                                }


                            </div>
                            <div className="dropdown-icon">
                                <IoIosArrowDown/>
                            </div>

                            {isDropdownOpen && (
                                <div className="payment-dropdown">
                                    <ul>
                                        {paymentMethods.map((method) => (
                                            <li key={method.id} onClick={() => handlePaymentMethod(method)}>
                                                {method.name} • Comission {method.commission}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="amount-section-container">
                            <div className="amount-wrapper">
                                <span >Amount</span>
                                <input
                                    className='amount-input'
                                    type="text"
                                    placeholder="Enter Amount"
                                    value={inputValue ? `$ ${inputValue}` : ''}
                                    onChange={handleChange}
                                />
                                <ul>
                                    {amountListDigit.map(({amount, id}) => (
                                        <li key={id}
                                            className="amount-list__item"
                                            onClick={() => handleAmountClick(amount)}>
                                            + {amount}$
                                        </li>
                                    ))}
                                </ul>
                                <span className='amountSpan'>
                                    From 21.00 to 906.00 USD at a time
                                </span>
                            </div>
                        </div>

                        <div className='promoInput-section'>
                            <p >Promo code</p>
                            <PromoInput isRow={true}/>
                        </div>

                        <button
                            className="deposit-button"
                            onClick={handleDeposit}
                            disabled={inputValue < 21 || inputValue > 906 ? true : false}
                        >
                            Deposit
                        </button>
                    </div>
                </div>
            </div>

        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;