import uniqid from 'uniqid';

import mastercard from '../assets/mastercard.svg'
import visa from '../assets/visa.svg'
import piasrtix from '../assets/piasrtix.svg'
import pm from '../assets/pm.svg'
import pin from '../assets/pin.svg'
import skrill from '../assets/skrill.svg'
import stic from '../assets/stic.svg'
import btc from '../assets/btc.svg'
import eth from '../assets/eth.svg'
import trc from '../assets/trc.svg'

export const cardPayment = [
    {
        id: uniqid(),
        tab: 'Popular',
        image: mastercard,
        paymentName: 'Mastercard',
        commission: '5%',
    },
    {
        id: uniqid(),
        tab: 'Trusted',
        image: visa,
        paymentName: 'Visa',
        commission: '5%',
    },
    {
        id: uniqid(),
        tab: '',
        image: skrill,
        paymentName: 'Skrill',
        commission: '0%',
    },
    {
        id: uniqid(),
        tab: '',
        image: pm,
        paymentName: 'Perfect Money, EUR',
        commission: '0%',
    },
    {
        id: uniqid(),
        tab: '',
        image: piasrtix,
        paymentName: 'Piastrix, EUR',
        commission: '0%',
    },
    {
        id: uniqid(),
        tab: '',
        image: stic,
        paymentName: 'SticPay',
        commission: '0%',
    },
    {
        id: uniqid(),
        tab: '',
        image: pin,
        paymentName: 'Pin',
        commission: '1%',
    },
]

export const cryptoPayment = [
    {
        id: uniqid(),
        tab: '',
        image: btc,
        paymentName: 'BTC',
        commission: '5%',
    },
    {
        id: uniqid(),
        tab: '',
        image: eth,
        paymentName: 'ETH',
        commission: '5%',
    },
    {
        id: uniqid(),
        tab: '',
        image: trc,
        paymentName: 'USDT',
        commission: '5%',
    },
]

export const transactionHistory = () => {
    return [
        // it row
        [
            //its column
            {
                id: uniqid(),
                image: stic,
                topText: 'by SticPay, USD',
                bottomText: 'Withdraw',
            },
            {
                id: uniqid(),
                topText: '142354',
                bottomText: 'Transaction Number',
            },
            {
                id: uniqid(),
                topText: '02.02 at 12:42PM',
                bottomText: 'Payment Date',
            },
            {
                id: uniqid(),
                topText: '123$',
                bottomText: 'Amount Payed',
            },
            {
                id: uniqid(),
                topText: 'Processing',
                bottomText: 'Operation Status',
            },
        ],
        [
            {
                id: uniqid(),
                image: stic,
                topText: 'by SticPay, USD',
                bottomText: 'Withdraw',
            },
            {
                id: uniqid(),
                topText: '142354',
                bottomText: 'Transaction Number',
            },
            {
                id: uniqid(),
                topText: '02.11 at 18:54PM',
                bottomText: 'Payment Date',
            },
            {
                id: uniqid(),
                topText: '6235$',
                bottomText: 'Amount Payed',
            },
            {
                id: uniqid(),
                topText: 'Active',
                bottomText: 'Operation Status',
            },
        ],
        [
            {
                id: uniqid(),
                image: mastercard,
                topText: 'by Mastercard, USD',
                bottomText: 'Withdraw',
            },
            {
                id: uniqid(),
                topText: '142354',
                bottomText: 'Transaction Number',
            },
            {
                id: uniqid(),
                topText: '02.01 at 12:34PM',
                bottomText: 'Payment Date',
            },
            {
                id: uniqid(),
                topText: '2143.05$',
                bottomText: 'Amount Payed',
            },
            {
                id: uniqid(),
                topText: 'Performed',
                bottomText: 'Operation Status',
            },
        ],
    ]
}

// mockData.js

export const paymentMethods = [
    {
        id: uniqid(),
        name: "Mastercard, USD",
        commission: "3%",
        img: mastercard,
        details: "Please notice that you will send money in the USD",
    },
    {
        id: uniqid(),
        name: "Visa, USD",
        commission: "2%",
        img: visa,
        details: "Please notice that you will send money in the USD",
    },

    {
        id: uniqid(),
        name: "Skrill, USD",
        commission: "3%",
        img: skrill,
        details: "Please notice that you will send money in the USD",
    },
    {
        id: uniqid(),
        name: "PM, EUR",
        commission: "2%",
        img: pm,
        details: "Please notice that you will send money in the EUR",
    },

    {
        id: uniqid(),
        name: "Piastrix, EUR",
        commission: "0%",
        img: piasrtix,
        details: "Please notice that you will send money in the EUR",
    },

    {
        id: uniqid(),
        name: "SticPay, USD",
        commission: "0%",
        img: stic,
        details: "Please notice that you will send money in the USD",
    },
    {
        id: uniqid(),
        name: "PIN, USD",
        commission: "0%",
        img: pin,
        details: "Please notice that you will send money in the USD",
    },

    {
        id: uniqid(),
        name: "Bitcoin, USDT",
        commission: "0%",
        img: btc,
        details: "Please notice that you will send money in the BTC",
    },

    {
        id: uniqid(),
        name: "Ethereum, USDT",
        commission: "0.5%",
        img: eth,
        details: "Please notice that you will send money in the ETH",
    },
];

export const amountListDigit = [
    {
        id: uniqid(),
        amount: '10',
    },
    {
        id: uniqid(),
        amount: '20',
    },
    {
        id: uniqid(),
        amount: '30',
    },
    {
        id: uniqid(),
        amount: '50',
    },
    {
        id: uniqid(),
        amount: '100',
    },
]

export const menuItems = [
    {
        menuTitle: 'Casino Games',
    },
    {
        menuTitle: 'Live Games',
    },
    {
        menuTitle: 'TV-Bet',
    },
    {
        menuTitle: 'Sport Games',
    },
    {
        menuTitle: 'Virtual',
    },
    {
        menuTitle: 'Tournaments',
    },
    {
        menuTitle: 'Spin Shop',
    },
    {
        menuTitle: 'FAQ',
    },
    {
        menuTitle: 'Support Chat',
    },

]