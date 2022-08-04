
import './App.css';
import Header from './Components/header';
import ExhibitCard from './Components/exhibit_card';
import IPRequest from './Components/IPRequest';

function App() {
  return (
    <div className="App">
      <Header/>
      <ExhibitCard title = "Public IPv4 Address" url = "https://api.ipify.org?format=json"/>
      <ExhibitCard title = "Public IPv6 Address" url = "https://api64.ipify.org?format=json"/>
  
    </div>
  );
}

export default App;
