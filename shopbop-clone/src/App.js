import {Routes,Route} from 'react-router-dom'
import './App.css';
import {Navbar} from '../src/components/Navbar'
import {WhatsNew} from '../src/components/WhatsNew'
import {OurFavorite} from '../src/components/OurFavorite'
import {Productdetail} from '../src/components/ProductDetail'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/what'snew" element={<WhatsNew/>}></Route>
        <Route path="/ourfavorite" element={<OurFavorite/>}></Route>
        <Route  path={"/product/:id"}
          element={<Productdetail/>}
        ></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
