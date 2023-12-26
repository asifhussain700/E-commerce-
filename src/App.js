
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from '../src/Components/Assets/banner_mens.png'
import women_banner from '../src/Components/Assets/banner_women.png'
import kid_banner from '../src/Components/Assets/banner_kids.png'
import Login from './Pages/Login';

function App() {
  return (
    
       <BrowserRouter>
        <Navbar> </Navbar>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory  banner={men_banner} category="men"/>}/>
            <Route path='/womens' element={<ShopCategory  banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
            <Route path='/product' element={<Product></Product>}  >
              <Route path=':productId' element={<Product></Product>}/>
            </Route>
            <Route path='/cart' element={<Cart></Cart>}/>
            <Route path='/login' element={<LoginSignup/>}/>
            <Route path='/alreadylog' element={<Login></Login>}></Route>
          </Routes>

          <Footer/>
       
       </BrowserRouter>
     
     
 
  );
}

export default App;
