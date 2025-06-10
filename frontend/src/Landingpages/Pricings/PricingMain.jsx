import ChargeDetail from "./ChargesDetail";
import Chargetypes from "./Chargestypes";
import Hero_pricings from "./Hero";
import EquityCurrencyCommodity from "./EquityCurrencyCommodity";

function PricingMain(){
    return (
        <div>
        <Hero_pricings/>
        <Chargetypes/>
        <EquityCurrencyCommodity/>
        <ChargeDetail/>
        </div>
    )
}
export default PricingMain;