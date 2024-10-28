import {cardPayment, cryptoPayment} from "../mock/data";
import Payment from "./Payment";
import Modal from "./Modal";

const Hero = ({
                  isModalOpen,
                  setIsModalOpen,
                  paymentMethod,
                  setPaymentMethod,
                  setTransaction,
                  setCurrentBalance,
                  setShowSuccessMessage,
                  currentBalance
              }) => {

    const handleModal = (isOpen) => {
        setIsModalOpen(isOpen);
    };

    const handlePaymentClick = (paymentMethod) => {
        handleModal(true);
        setPaymentMethod(paymentMethod)
    };

    const showSuccessMessageHandler = () => {
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    };

    return (
        <section>
            <h1 className="hero__title">Make a deposit</h1>
            <p className="hero__subtitle">Choose payment method</p>
            <p className="hero__payment-type">Cards, e-money, PIN</p>
            <div className="cardPayment">
                {cardPayment.map((payment) => (
                    <div key={payment.id} onClick={() => handlePaymentClick(payment)}>
                        <Payment
                            tab={payment.tab}
                            image={payment.image}
                            paymentName={payment.paymentName}
                            commission={payment.commission}
                        />
                    </div>
                ))}
            </div>
            <p className="hero__payment-type">Cryptocurrency</p>
            <div className='herotest'>
                <div className="cardPayment">
                    {cryptoPayment.map(({id, image, paymentName, commission}) => (
                        <div key={id} onClick={handlePaymentClick}>
                            <Payment
                                image={image}
                                paymentName={paymentName}
                                commission={commission}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {paymentMethod && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => handleModal(false)}
                    paymentMethod={paymentMethod}
                    currentBalance={currentBalance}
                    setTransaction={setTransaction}
                    setCurrentBalance={setCurrentBalance}
                    showSuccessMessage={showSuccessMessageHandler}
                />
            )}
        </section>
    );
};

export default Hero;