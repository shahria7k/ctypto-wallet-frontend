import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Market from "./components/Market/Market";
import { useState, useEffect } from "react";
function App() {
	const [userWallet, setUserWallet] = useState(
		JSON.parse(localStorage.getItem("userWallet")) || {
			usdc: 10,
			btc: 5,
			eth: 15,
			ltc: 50,
			others: 0,
		}
	);
	const [tradeHistory, setTradeHistory] = useState(
		JSON.parse(localStorage.getItem("tradeHistory")) || []
	);
	const updateTradeHistory = (trade) => {
		localStorage.setItem(
			"tradeHistory",
			JSON.stringify([...tradeHistory, trade])
		);
		setTradeHistory([...tradeHistory, trade]);
	};
	useEffect(() => {
		// console.log(userWallet);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userWallet]);
	const updateUserWallet = (currency, amount, name) => {
		// console.log(currency);
		amount = parseInt(amount);
		const tempWallet = { ...userWallet };

		if (tempWallet[currency]) {
			tempWallet[currency] += amount;
		} else {
			tempWallet["others"] += amount;
		}
		localStorage.setItem("userWallet", JSON.stringify(tempWallet));
		setUserWallet(tempWallet);
		updateTradeHistory({ name, amount });
	};

	return (
		<div className="App">
			<Header></Header>
			<Dashboard userWallet={userWallet}></Dashboard>
			<Market
				userWallet={userWallet}
				updateUserWallet={updateUserWallet}
				tradeHistory={tradeHistory}
			></Market>
		</div>
	);
}

export default App;
