import {transactionHistory} from "../mock/data";
import {useCallback, useEffect, useState} from "react";
import {CgSortAz} from "react-icons/cg";

const getStatusStyle = (topText) => {
    switch (topText) {
        case 'Processing':
            return {color: '#D98E04', fontWeight: '800'};
        case 'Active':
            return {color: '#00C853', fontWeight: '800'};
        case 'Performed':
            return {color: '#2979FF', fontWeight: '800'};
        default:
            return {color: 'white', fontWeight: '800'};
    }
};

const Transactions = ({transaction, setTransaction,}) => {
    const [sortDirection, setSortDirection] = useState('asc');

    useEffect(() => {
        const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
        const defaultTransactions = transactionHistory();
        const combinedTransactions = savedTransactions.length ? savedTransactions : defaultTransactions;

        setTransaction(combinedTransactions);
    }, [setTransaction]);

    const showMore = useCallback(() => {
        const showMoreData = transactionHistory();
        setTransaction((prevState) => [...prevState, ...showMoreData]);
    }, [setTransaction]);

    const sortTransactionsByAmount = () => {
        const sortedTransactions = [...transaction];

        sortedTransactions.sort((a, b) => {
            const amountA = parseFloat(a[3].topText.replace('$', ''));
            const amountB = parseFloat(b[3].topText.replace('$', ''));
            if (sortDirection === 'asc') {
                return amountA - amountB;
            } else {
                return amountB - amountA;
            }
        });

        setTransaction(sortedTransactions);
        setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
    };

    return (
        <div className="table-container">
            <div className="table-header">
                <p className="table-header__title">Last Transactions</p>
                <div className="table-header__sort-button" onClick={sortTransactionsByAmount}>
                    <CgSortAz/>
                </div>
            </div>
            <div className="table-wrapper">
                <table>
                    <tbody>
                    {transaction.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map(({id, image, topText, bottomText}) => (
                                <td key={id} className={image ? "" : "cell--left"}>
                                    {image ? (
                                        <div className="transaction-item">
                                            <div className="transaction-item__image-wrapper">
                                                <img src={image} alt="Transaction"/>
                                            </div>

                                            <div className="transaction-item__details">
                                                <div className="transaction-item__details__top-text">
                                                    {topText}
                                                </div>
                                                <div className="transaction-item__details__bottom-text">
                                                    {bottomText}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="transaction-item__details">
                                            <div style={getStatusStyle(topText)}>{topText}</div>
                                            <div className="transaction-item__details__bottom-text">
                                                {bottomText}
                                            </div>
                                        </div>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <span className="showMoreWrapper">
                <button className="showMoreBtn" onClick={showMore}>Show more</button>
            </span>
        </div>
    );
};
export default Transactions;