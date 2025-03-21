
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/mens_banner.png';
import women_banner from './Components/Assests/womens_bannaer.png'
import kid_banner from './Components/Assests/kids_banner.png'

function App() {
  return (
    <div>
      <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Shop></Shop>} />
      <Route path='/mens' element={<ShopCategory banner= {men_banner}  category="men"></ShopCategory>} />
      <Route path='/Womens' element={<ShopCategory banner= {women_banner} category="women"></ShopCategory>} />
      <Route path='/kids' element={<ShopCategory banner= {kid_banner} category="kid"></ShopCategory>} />
      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  
    </div>
  );
}

export default App;
