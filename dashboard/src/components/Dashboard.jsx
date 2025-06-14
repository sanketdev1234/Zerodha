import React from "react";
import WatchList from "./WatchList";
import Positions from "./Positions";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Funds from "./Funds";
import Apps from "./Apps";
import Summary from "./Summary";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./Notfound";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes({ arr }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Summary arr={arr} /></PageWrapper>} />
        <Route path="/dashboard" element={<PageWrapper><Summary arr={arr} /></PageWrapper>} />
        <Route path="/positions" element={<PageWrapper><Positions /></PageWrapper>} />
        <Route path="/orders" element={<PageWrapper><Orders /></PageWrapper>} />
        <Route path="/holdings" element={<PageWrapper><Holdings /></PageWrapper>} />
        <Route path="/funds" element={<PageWrapper><Funds /></PageWrapper>} />
        <Route path="/apps" element={<PageWrapper><Apps /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function Dashboard() {
  const [arr, setarr] = useState([{ name: "select-name", price: 100, percent: "100%", isDown: false, id: "1234" }]);
  
  function modifyarr(item) {
    const newarr = [item];
    console.log(newarr); // item is object and newarr is arr
    setarr(newarr);
  }

  return (
    <div className="d-flex flex-md-row gap-md-3 gap-3 flex-column">
      <WatchList fun={modifyarr} />
      <div id="dashboardright">
        <AnimatedRoutes arr={arr} />
      </div>
    </div>
  );
}

export default Dashboard;