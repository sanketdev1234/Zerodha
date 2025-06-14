import Equity from "./Equity";
import Currency from "./Currency";
import Commodity from "./Commodity";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


function EquityCurrencyCommodity() {
  const [activetab, setactivetab] = useState("Equity");

  function handleEquityClick() {
    setactivetab("Equity");
  }

  function handleCurrencyClick() {
    setactivetab("Currency");
  }

  function handleCommodityClick() {
    setactivetab("Commodity");
  }

  
  // Animation variants
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };
  
  return (
    <div className="container mt-5">
      <div className="d-flex flex-row gap-3 justify-content-center border-bottom border-2 py-2">
        <Link
          to="#"
          onClick={handleEquityClick}
          className="fs-2 fw-medium "
          style={{
            textDecoration: activetab === "Equity" ? "underline" : "none",
            fontWeight: activetab === "Equity" ? "bold" : "normal",
            textUnderlineOffset: "6px"
          }}
        >
          Equity
        </Link>

        <Link
          to="#"
          onClick={handleCurrencyClick}
          className="fs-2 fw-medium "
          style={{
            textDecoration: activetab === "Currency" ? "underline" : "none",
            fontWeight: activetab === "Currency" ? "bold" : "normal",
            textUnderlineOffset: "6px"
          }}
        >
          Currency
        </Link>

        <Link
          to="#"
          onClick={handleCommodityClick}
          className="fs-2 fw-medium "
          style={{
            textDecoration: activetab === "Commodity" ? "underline" : "none",
            fontWeight: activetab === "Commodity" ? "bold" : "normal",
            textUnderlineOffset: "6px"
          }}
        >
          Commodity
        </Link>
      </div>

      <div className="mt-4">
      <AnimatePresence mode="wait">
        {activetab ==="Equity" ?
                <motion.div
                key="equity"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
                  >
        <Equity /> 
        </motion.div>
      : activetab === "Currency" ? 
      <motion.div
              key="currency"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Currency /> 
            </motion.div>
      : 
      <motion.div
              key="commodity"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Commodity />
            </motion.div>
      }
        </AnimatePresence>
      </div>
    </div>
  );
}

export default EquityCurrencyCommodity;
