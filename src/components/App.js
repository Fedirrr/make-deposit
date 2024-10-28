import {useState} from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Promo from "./Promo";
import Transactions from "./Transactions";

const App = () => {
    const [transaction, setTransaction] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentBalance, setCurrentBalance] = useState(0);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState()

    return (
        <>
            <Navbar
                setTransaction={setTransaction}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                currentBalance={currentBalance}
                setCurrentBalance={setCurrentBalance}
                showSuccessMessage={showSuccessMessage}
                setShowSuccessMessage={setShowSuccessMessage}
            />
            <main className="main__container">
                <div className="main__wrapper">
                    <Hero
                        paymentMethod={paymentMethod}
                        setPaymentMethod={setPaymentMethod}
                        setTransaction={setTransaction}
                        isModalOpen={isModalOpen}
                        currentBalance={currentBalance}
                        setIsModalOpen={setIsModalOpen}
                        setCurrentBalance={setCurrentBalance}
                        setShowSuccessMessage={setShowSuccessMessage}

                    />
                    <Promo/>
                    <Transactions
                        transaction={transaction}
                        setTransaction={setTransaction}
                    />
                </div>
            </main>
        </>
    );
};
export default App;