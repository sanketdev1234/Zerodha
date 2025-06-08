import Imageleft from "./Imageleft.jsx";
import Imageright from "./Imageright.jsx";
import Hero_Product from "./Hero";
import Universe from "./Universe.jsx";

function ProductMain(){
    return (
        <div>
            <Hero_Product/>
            <Imageleft imgleft={"./src/assets/kite.png"} heading={"Kite"} para={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} link1={"Try demo"} link2={"Learn more"} img1={"./src/assets/googlePlayBadge.svg"} img2={"./src/assets/appstoreBadge.svg"} />
            <Imageright imgright={"./src/assets/consolepage.png"} heading={"Console"} para={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} link1={"Learn more"} />
            <Imageleft imgleft={"./src/assets/coin.png"} heading={"Coin"} para={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} link1={"Coin"} link2={""} img1={"./src/assets/googlePlayBadge.svg"} img2={"./src/assets/appstoreBadge.svg"} />
            <Imageright imgright={"./src/assets/kiteconnect.png"} heading={"Kite Connect API"} para={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} link1={"Kite Connect"}   />
            <Imageleft imgleft={"./src/assets/varsitypage.png"} heading={"Varsity mobile"} para={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} link1={""} link2={""} img1={"./src/assets/googlePlayBadge.svg"} img2={"./src/assets/appstoreBadge.svg"} />
            <Universe/>
        </div>
    )
}
export default ProductMain;