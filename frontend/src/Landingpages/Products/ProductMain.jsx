import Imageleft from "./Imageleft.jsx";
import Imageright from "./Imageright.jsx";
import Hero_Product from "./Hero";
import Universe from "./Universe.jsx";
import kite from "../../assets/kite.png";
import consolepage from "../../assets/consolepage.png";
import coin from "../../assets/coin.png";
import kiteconnect from "../../assets/kiteconnect.png";
import varsity from "../../assets/varsitypage.png";
import googpleplay from "../../assets/googlePlayBadge.svg";
import appstore from "../../assets/appstoreBadge.svg";
function ProductMain(){
    return (
        <div>
            <Hero_Product/>
            <Imageleft imgleft={kite} heading={"Trading Simulator"} para={"Our advanced trading simulation platform with real-time market data, interactive charts, virtual portfolio management, and comprehensive order execution. Experience professional trading in a risk-free environment."} link1={"Try demo"} link2={"Learn more"} img1={googpleplay} img2={appstore} />
            <Imageright imgright={consolepage} heading={"Portfolio Dashboard"} para={"The central dashboard for your S-Exchange account. Gain insights into your virtual trades and investments with in-depth reports and visualisations."} link1={"Learn more"} />
            <Imageleft imgleft={coin} heading={"Learning Academy"} para={"Comprehensive trading education with interactive lessons, strategy guides, and risk management tutorials. Learn at your own pace with our structured curriculum."} link1={"Academy"} link2={""} img1={googpleplay} img2={appstore} />
            <Imageright imgright={kiteconnect} heading={"API Integration"} para={"Build powerful trading applications and experiences with our comprehensive HTTP/JSON APIs. Perfect for developers and advanced users."} link1={"API Docs"}   />
            <Imageleft imgleft={varsity} heading={"Mobile Learning"} para={"An easy to grasp, collection of trading lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} link1={""} link2={""} img1={googpleplay} img2={appstore} />
            <Universe/>
        </div>
    )
}
export default ProductMain;