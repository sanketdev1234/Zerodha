import Imageleft from "./Imageleft.jsx";
import Imageright from "./Imageright.jsx";
import Hero_Product from "./Hero";
import Universe from "./Universe.jsx";

function ProductMain(){
    return (
        <div>
            <Hero_Product/>
            <Imageleft imgleft={"./src/assets/kite.png"} heading={"Trading Simulator"} para={"Our advanced trading simulation platform with real-time market data, interactive charts, virtual portfolio management, and comprehensive order execution. Experience professional trading in a risk-free environment."} link1={"Try demo"} link2={"Learn more"} img1={"./src/assets/googlePlayBadge.svg"} img2={"./src/assets/appstoreBadge.svg"} />
            <Imageright imgright={"./src/assets/consolepage.png"} heading={"Portfolio Dashboard"} para={"The central dashboard for your S-Exchange account. Gain insights into your virtual trades and investments with in-depth reports and visualisations."} link1={"Learn more"} />
            <Imageleft imgleft={"./src/assets/coin.png"} heading={"Learning Academy"} para={"Comprehensive trading education with interactive lessons, strategy guides, and risk management tutorials. Learn at your own pace with our structured curriculum."} link1={"Academy"} link2={""} img1={"./src/assets/googlePlayBadge.svg"} img2={"./src/assets/appstoreBadge.svg"} />
            <Imageright imgright={"./src/assets/kiteconnect.png"} heading={"API Integration"} para={"Build powerful trading applications and experiences with our comprehensive HTTP/JSON APIs. Perfect for developers and advanced users."} link1={"API Docs"}   />
            <Imageleft imgleft={"./src/assets/varsitypage.png"} heading={"Mobile Learning"} para={"An easy to grasp, collection of trading lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} link1={""} link2={""} img1={"./src/assets/googlePlayBadge.svg"} img2={"./src/assets/appstoreBadge.svg"} />
            <Universe/>
        </div>
    )
}
export default ProductMain;