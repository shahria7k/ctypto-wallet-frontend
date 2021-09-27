import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Market from './components/Market/Market';
import { useState, useEffect } from 'react';
function App() {
  const [userWallet, setUserWallet] = useState(JSON.parse(localStorage.getItem('userWallet')) || {
    usd: 10,
    btc: 5,
    eth: 15,
    ltc: 50,
    others: 0
  });
  useEffect(() => {
    // console.log(userWallet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userWallet]);
  const updateUserWallet = (currency, amount) => {
    amount = parseInt(amount);
    const tempWallet = { ...userWallet };

    if (tempWallet[currency]) {
      tempWallet[currency] += amount;
    } else {
      tempWallet["others"] += amount;
    }
    localStorage.setItem('userWallet', JSON.stringify(tempWallet));
    setUserWallet(tempWallet);
  };
  return (
    <div className="App">
      <Header></Header>
      <Dashboard userWallet={userWallet}></Dashboard>
      <Market userWallet={userWallet} updateUserWallet={updateUserWallet}></Market>
    </div>
  );
}

export default App;
