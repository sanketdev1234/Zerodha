import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import axios from 'axios';
import Homepagemain from "./Landingpages/Home/Homepagemain";
import AboutMain from "./Landingpages/About/AboutMain";
import PricingMain from "./Landingpages/Pricings/PricingMain";
import ProductMain from "./Landingpages/Products/ProductMain";
import SupportMain from "./Landingpages/Support/SupportMain";
import Navbar from './Landingpages/Navbar';
import Footer from './Landingpages/Footer';
import NotFound from './Landingpages/NotFound';
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import './index.css'
import SignupHero from './Landingpages/Signup/SignupHero';
import LoginHero from './Landingpages/Signup/LoginHero';
import Tutorial from './Landingpages/Learning/Tutorials';
import Quiz from './Landingpages/Learning/Quiz';

// Configure axios defaults
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
// axios.defaults.baseURL = 'http://localhost:8080';
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<PageWrapper><Homepagemain/></PageWrapper>} />
        <Route path='/home' element={<PageWrapper><Homepagemain/></PageWrapper>} />
        <Route path='/signup' element={<PageWrapper><SignupHero/></PageWrapper>} />
        <Route path='/login' element={<PageWrapper><LoginHero/></PageWrapper>} />
        <Route path='/about' element={<PageWrapper><AboutMain/></PageWrapper>} />
        <Route path='/product' element={<PageWrapper><ProductMain/></PageWrapper>} />
        <Route path='/support' element={<PageWrapper><SupportMain/></PageWrapper>} />
        <Route path='/pricing' element={<PageWrapper><PricingMain/></PageWrapper>} />
        <Route path='/tutorials' element={<PageWrapper><Tutorial/></PageWrapper>} />
        <Route path='/quiz' element={<PageWrapper><Quiz/></PageWrapper>} />
        <Route path='*' element={<PageWrapper><NotFound/></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}



function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}


createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Navbar/>
<AnimatedRoutes />
<Footer/>
</BrowserRouter>
)
