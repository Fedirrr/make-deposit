import PromoInput from "./PromoInput";

const Promo = () => {

    return (
        <div className='promo_container'>
            <div className="promo__title">Have a promo code?</div>
            <div className="promo__subtitle">Enter promo code here. It will activate a special bonus!</div>
            <div className="promo__input-section">
                <PromoInput />
            </div>
        </div>
    );
};

export default Promo;