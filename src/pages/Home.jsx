import Banner from "../components/Banner";
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from "./JobCard";
import { useState } from "react";


const Home = () => {

    const JobData = useLoaderData();
    const [jobs, setJobs] = useState(JobData);

    return (
        <div>
            <Helmet>
                <title>Home | NexTalent</title>
            </Helmet>
            <Banner></Banner>
            <h1 className="text-center mt-10 py-5 text-5xl font-bold">Browse By Category</h1>
            <Tabs >
                <TabList className="flex pt-2 justify-center items-center themeColor">
                    <Tab>Web Development</Tab>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Graphic Design</Tab>
                </TabList>
                <div className="max-w-7xl py-10 mx-auto">
                    <TabPanel>
                        <div className="grid mx-5 lg:mx-0 grid-cols-1 gap-5">
                            {JobData.map((job) => (
                                <JobCard key={job._id} job={job} jobs={jobs} setJobs={setJobs}></JobCard>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid mx-5 lg:mx-0 grid-cols-1 gap-5">
                            {JobData.map((job) => (
                                <JobCard key={job._id} job={job} jobs={jobs} setJobs={setJobs}></JobCard>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel >
                        <div className="grid mx-5 lg:mx-0 grid-cols-1 gap-5">
                            {JobData.map((job) => (
                                <JobCard key={job._id} job={job} jobs={jobs} setJobs={setJobs}></JobCard>
                            ))}
                        </div>
                    </TabPanel>
                </div>

            </Tabs>
        </div>
    );
};

export default Home;