import Banner from "../Components/Banner";
import Common from "../Components/Common";
import Navbar from "../Components/Navbar";
import Whyus from "../Components/Whyus";

const Home = () => {
    return (
        <section className="mbody home">
            <Navbar />
            <Banner />
            <Common />
            <Whyus />
        </section>
    );
};

export default Home;
