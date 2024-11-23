import Banner from "../Components/Banner";
import Common from "../Components/Common";
import Navbar from "../Components/Navbar";


const Home = () => {
    return (
        <section className="mbody home">
            <Navbar />
            <Banner />
            <Common />
        </section>
    );
};

export default Home;
