import ChargeDetail from "./ChargesDetail";
import Chargetypes from "./Chargestypes";
import Hero_pricings from "./Hero";
import EquityCurrencyCommodity from "./EquityCurrencyCommodity";
function PricingMain(){
    return (
        <div>
        <ChargeDetail/>
        <Chargetypes/>
        <Hero_pricings/>
        <EquityCurrencyCommodity/>
        </div>
    )
}
export default PricingMain;