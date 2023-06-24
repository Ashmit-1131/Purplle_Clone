
import './App.css';





import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer/Footer'





function App() {

  return (
    <div className="App">
  
    <Navbar/>

    <AllRoutes/>
   
    <Footer/>
    {/* Checking whether connected to repo change */}


    </div>
  );
}

export default App;
