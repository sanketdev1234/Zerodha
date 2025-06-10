import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Homepagemain from "./Landingpages/Home/Homepagemain";
import AboutMain from "./Landingpages/About/AboutMain";
import PricingMain from "./Landingpages/Pricings/PricingMain";
import SignupMain from "./Landingpages/Signup/SignupMain";
import ProductMain from "./Landingpages/Products/ProductMain";
import SupportMain from "./Landingpages/Support/SupportMain";
import Navbar from './Landingpages/Navbar';
import Footer from './Landingpages/Footer';
import NotFound from './Landingpages/NotFound';

import './index.css'


createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Homepagemain/>}></Route>
  <Route path='/home' element={<Homepagemain/>}></Route>
  <Route path='/signup' element={<SignupMain/>}></Route>
  <Route path='/about' element={<AboutMain/>}></Route>
  <Route path='/product' element={<ProductMain/>}></Route>
  <Route path='/support' element={<SupportMain/>}></Route>
  <Route path='/pricing' element={<PricingMain/>}></Route>
  <Route path='*' element={<NotFound/>}></Route>
</Routes>
<Footer/>
</BrowserRouter>
)
