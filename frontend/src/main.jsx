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
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import './index.css'

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<PageWrapper><Homepagemain/></PageWrapper>} />
        <Route path='/home' element={<PageWrapper><Homepagemain/></PageWrapper>} />
        <Route path='/signup' element={<PageWrapper><SignupMain/></PageWrapper>} />
        <Route path='/about' element={<PageWrapper><AboutMain/></PageWrapper>} />
        <Route path='/product' element={<PageWrapper><ProductMain/></PageWrapper>} />
        <Route path='/support' element={<PageWrapper><SupportMain/></PageWrapper>} />
        <Route path='/pricing' element={<PageWrapper><PricingMain/></PageWrapper>} />
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
