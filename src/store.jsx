import { createStore } from "redux";

const initState = {
    accounts: [
        {
            id: 1,
            customerName: "Israa Othman",
            accountNumber: "123456",
            accountType: "Savings",
        },
        {
            id: 2,
            customerName: "Ahmad Zahran",
            accountNumber: "987654",
            accountType: "Student accounts",
        },
        {
            id: 3,
            customerName: "Soso Saeed",
            accountNumber: "585482",
            accountType: "Student accounts",
        },
        {
            id: 4,
            customerName: "Lana Del ray",
            accountNumber: "123432",
            accountType: "Student accounts",
        },
        {
            id: 5,
            customerName: "Rana Matar",
            accountNumber: "215487",
            accountType: "Savings",
        },
        {
            id: 6,
            customerName: "Saleem Shady",
            accountNumber: "548761",
            accountType: "Student accounts",
        },
        {
            id: 7,
            customerName: "Fadi Khair",
            accountNumber: "6969",
            accountType: "Savings",
        },
        {
            id: 8,
            customerName: "Rand Ali",
            accountNumber: "876213",
            accountType: "Student accounts",
        },
        {
            id: 9,
            customerName: "Salem Ahmad",
            accountNumber: "548731",
            accountType: "Student accounts",
        },
        {
            id: 10,
            customerName: "Lila Murad",
            accountNumber: "65487",
            accountType: "Savings",
        },
    ],
};

const reducer = (state = initState, action) => {
    return state;
};

const store = createStore(reducer);

export default store; 