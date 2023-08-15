import Slider from "../components/Slider";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Priceing from "../components/Priceing";
import Services from "../components/Services";
function HomePage(){
    return(
        <>
            <Slider/>
            <About/>
            <Blogs/>
            <Priceing/>
            <Services/>
        </>
    );
}
export default HomePage;