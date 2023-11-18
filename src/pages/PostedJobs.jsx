import { Helmet } from 'react-helmet-async';
import { useLoaderData } from "react-router-dom";
import PostedJobsCard from './PostedJobsCard';
import { useState } from "react";

const PostedJobs = () => {

    const postedJobs = useLoaderData();
    const [jobs, setJobs] = useState(postedJobs);

    return (
        <div>
             <Helmet>
                <title>My Posted Jobs | NexTalent</title>
            </Helmet>
            <div className="max-w-5xl mx-auto mb-10">
            <h1 className="text-5xl font-extrabold text-slate-500 text-center p-10">Total Posted Jobs: {postedJobs.length}</h1>
            <div className="grid grid-cols-1 px-5 gap-4">
            {
                postedJobs.map(job => <PostedJobsCard key={job._id} job={job} jobs={jobs}  setJobs={setJobs}></PostedJobsCard>)
            }
            </div>
            </div>
        </div>
    );
};

export default PostedJobs;