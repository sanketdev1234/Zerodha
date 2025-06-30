import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import axios from 'axios';
import './index.css'
import Home from "./components/Home";

// Configure axios defaults
axios.defaults.baseURL = import.meta.env.MODE === 'production' 
  ? '/api' 
  : 'http://localhost:8080';

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
<Route path="/*" element={<Home />} />
</Routes>
</BrowserRouter> 
)

 