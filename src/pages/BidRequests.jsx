/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import BidsRequestsRow from './BidRequestsRow';

const BidRequests = () => {
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);
    const totalBids = useLoaderData();

    useEffect(() => {
        const bidRequest = totalBids.filter(bid => bid.bidder_email !== user.email);
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

    const handleConfirm = id => {
        fetch(`https://nex-talent-server.vercel.app/bids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'accept'},{status: 'reject'})
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.modifiedCount > 0){
                    //update
                    const remaining = bids.filter(bid => bid._id !== id);
                    const updated = bids.find(bid => bid._id === id);
                    updated.status = 'accept'
                    updated.status = 'reject'
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
            <div className="max-w-4xl max-h-screen mx-auto mb-10">
                <h1 className="text-2xl lg:text-5xl font-extrabold text-center py-5">Total Bid Requests: {bids.length}</h1>
                <h1 className="text-2xl lg:text-3xl font-extrabold text-center pb-5">Email: {user.email}</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <tbody>
                            {
                                bids.map(bid => <BidsRequestsRow key={bid._id} bid={bid} handleDeleteBid={handleDeleteBid} handleConfirm={handleConfirm}></BidsRequestsRow>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default BidRequests;