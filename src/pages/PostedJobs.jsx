import { Helmet } from 'react-helmet-async';
import { useLoaderData } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PostedJobsCard from './PostedJobsCard';

const PostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useContext(AuthContext);
    const postedJobs = useLoaderData();

    useEffect(() => {
        // Filter jobs that match the user's email
        const userJobs = postedJobs.filter(job => job.email === user.email);
        setJobs(userJobs);
    }, [user.email, postedJobs]);

    return (
        <div>
            <Helmet>
                <title>My Posted Jobs | NexTalent</title>
            </Helmet>
            <div className="max-w-5xl mx-auto mb-10">
                <h1 className="text-2xl lg:text-5xl font-extrabold text-slate-500 text-center py-5">My Total Posted Jobs: {jobs.length}</h1>
                <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-500 text-center pb-5">Email: {user.email}</h1>
                <div className="grid grid-cols-1 px-5 gap-4">
                    {jobs.map(job => (
                        <PostedJobsCard key={job._id} job={job}></PostedJobsCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostedJobs;
