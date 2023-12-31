import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import BidsRow from './BidsRow';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const MyBids = () => {
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);
    const totalBids = useLoaderData();

    useEffect(() => {
        // Filter bids that match the user's email
        const bidRequest = totalBids.filter(bid => bid.bidder_email === user.email);
        setBids(bidRequest);
    }, []);



    const handleDeleteBid = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://nex-talent-server.vercel.app/bids/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!!!",
                                text: "Bid deleted successfully!!!",
                                icon: "success",
                                confirmButtonText: "Ok"
                            })
                            const remaining = bids.filter(bid => bid._id !== id);
                            setBids(remaining);
                        }
                    });
            }
        })
    }

    const handleComplete = id => {
        fetch(`https://nex-talent-server.vercel.app/bids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'complete' })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //update
                    const remaining = bids.filter(bid => bid._id !== id);
                    const updated = bids.find(bid => bid._id === id);
                    updated.status = 'complete'
                    const newBids = [updated, ...remaining]
                    setBids(newBids);
                }
            })

    }

    return (
        <div>
            <Helmet>
                <title>My Bids | NexTalent</title>
            </Helmet>
            <div className="max-w-4xl mx-auto mb-10">
                <h1 className="text-2xl lg:text-5xl font-extrabold text-center py-5">My bids: {bids.length}</h1>
                <h1 className="text-2xl lg:text-3xl font-extrabold  text-center pb-5">Email: {user.email}</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <tbody>
                            {
                                bids.map(bid => <BidsRow key={bid._id} bid={bid} handleDeleteBid={handleDeleteBid} handleComplete={handleComplete}></BidsRow>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyBids;