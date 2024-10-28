import {useState} from 'react';
import {LuCheckCircle} from "react-icons/lu";

const PromoInput = ({isRow = false}) => {
    const [inputValue, setInputValue] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const showSuccessMessageHandler = () => {
        setShowSuccessMessage(true);
        setInputValue('')
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    };
    return (
        <div className={isRow ? 'promo__input-wrapper_row' : 'promo__input-wrapper'}>
            <div className='promo__input_section'>
                <input
                    type="text"
                    className="promo__input"
                    placeholder="Enter promo code"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                />
                <div className="promo__check-icon" style={{color: inputValue.length > 0 ? 'green' : 'gray',}}>
                    <LuCheckCircle size={20}/>
                </div>
            </div>


            <button
                className={`promo__apply-button ${!inputValue ? 'promo__apply-button--disabled' : ''}`}
                disabled={!inputValue}
                onClick={showSuccessMessageHandler}

            >
                Apply
            </button>

            <div
                className={`success-message ${showSuccessMessage ? 'show' : ''}`}
            >
                Promo code successfully applied!
            </div>
        </div>
    );
};

export default PromoInput;