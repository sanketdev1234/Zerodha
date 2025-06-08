import StepsforDemat from "./StepsforDemat";
import Hero_signup from "./Hero";
import Faq from "./Faq";
import Investment from "./Investment";
import AboutMain from "../About/AboutMain";
import Benifits from "./Benifits";

function SignupMain(){
    return (
        <div>
        <StepsforDemat/>
        <Hero_signup/>
        <Faq/>
        <Investment/>
        <AboutMain/>
        <Benifits/>
        </div>
    )
}
export default SignupMain;