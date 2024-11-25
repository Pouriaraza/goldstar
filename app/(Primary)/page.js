import Banner from "../Components/Banner";
import Common from "../Components/Common";
import Navbar from "../Components/Navbar";
import Whyus from "../Components/Whyus";
import Teacher from "../Components/Teachers";

const Home = () => {
    return (
        <section className="mbody home">
            <Navbar />
            <Banner />
            <Common />
            <Whyus />
            <Teacher />
        </section>
    );
};

export default Home;
