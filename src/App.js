import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Market from './components/Market/Market';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Dashboard></Dashboard>
      <Market></Market>
    </div>
  );
}

export default App;
