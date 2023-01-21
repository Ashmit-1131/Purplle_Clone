
import './App.css';

import Navbar from './Components/Navbar/Navbar';

import Homepage from "./Components/Homepage/Homepage";

import Footer from "./Components/Footer/Footer";
function App() {

  return (
    <div className="App">
    <h1>Purplle Website</h1>

    <Navbar/>
    <Homepage />
    <Footer />
    </div>
  );
}

export default App;
