import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';

const MyBids = () => {
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);

    const url = `http://localhost:5000/bids?email=${user?.email}`;


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBids(data))
    }, []);

    return (
        <div>
            <Helmet>
                <title>My Bids | NexTalent</title>
            </Helmet>
            <div className="max-w-5xl mx-auto mb-10">
                <h1 className="text-2xl lg:text-5xl font-extrabold text-slate-500 text-center py-5">My bids: {bids.length}</h1>
                <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-500 text-center pb-5">Email: {user.email}</h1>

            </div>
        </div>
    );
};

export default MyBids;