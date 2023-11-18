import Banner from "../components/Banner";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Home | NexTalent</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;