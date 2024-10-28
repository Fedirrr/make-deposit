const getTabColor = (tab) => {
    switch (tab) {
        case 'Popular':
            return 'card-tab--popular';
        case 'Trusted':
            return 'card-tab--trusted';
        default:
            return 'card-tab--default';
    }
};

const Payment = ({tab, image, paymentName, commission}) => {
    return (
        <div className="cardPayment__container">
            <img src={image} alt={paymentName} className="cardPayment__image"/>
            {tab && (
                <span className={`card-tab ${getTabColor(tab)}`}>
                    {tab}
                </span>
            )}
            <span className="cardPayment__name">{paymentName}</span>
            <span className="cardPayment__commission">
                Commission {commission}
            </span>
        </div>
    );
};

export default Payment;