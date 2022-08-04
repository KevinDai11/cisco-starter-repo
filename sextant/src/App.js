
import './App.css';
import Header from './Components/header';
import ExhibitCard from './Components/exhibit_card';


function App() {
  return (
    <div className="App">
      <Header/>
      <ExhibitCard title = {"Public IPv4 Address"} children = {{url: "https://api.ipify.org?format=json", web: false}}/>
      <ExhibitCard title = {"Public IPv6 Address"} children = {{url: "https://api64.ipify.org?format=json", web:false}}/>
      <ExhibitCard title = {"Packet Latency"} children = {{url: "", web: true}}/>
  
    </div>
  );
}

export default App;
