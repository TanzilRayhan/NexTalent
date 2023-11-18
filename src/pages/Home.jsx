import Banner from "../components/Banner";
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from "./JobCard";
import { useState } from "react";
import Mission from "../components/Mission";
import Faq from "../components/Faq";


const Home = () => {

    const JobData = useLoaderData();
    const [jobs, setJobs] = useState(JobData);

    const filterJobsByCategory = (category) => {
        if (category === "Web Development") {
            setJobs(JobData.filter(job => job.category === "Web Development"));
        } else if (category === "Digital Marketing") {
            setJobs(JobData.filter(job => job.category === "Digital Marketing"));
        } else if (category === "Graphic Design") {
            setJobs(JobData.filter(job => job.category === "Graphic Design"));
        } else {
            setJobs(JobData);
        }
    };

    const loadJobs = () => {
        return jobs.map((job) => (
            <JobCard key={job._id} job={job}></JobCard>
        ));
    };

    return (
        <div>
            <Helmet>
                <title>Home | NexTalent</title>
            </Helmet>
            <Banner></Banner>
            <h1 className="text-center mt-10 py-5 text-5xl font-bold">Browse By Category</h1>
            <Tabs >
                <TabList className="flex pt-2 justify-center items-center themeColor">
                    <Tab onClick={() => filterJobsByCategory("Web Development")}>Web Development</Tab>
                    <Tab onClick={() => filterJobsByCategory("Digital Marketing")}>Digital Marketing</Tab>
                    <Tab onClick={() => filterJobsByCategory("Graphic Design")}>Graphic Design</Tab>
                </TabList>
                <div className="max-w-7xl py-10 mx-auto">
                    <TabPanel>
                    {loadJobs()}
                    </TabPanel>
                    <TabPanel>
                    {loadJobs()}
                    </TabPanel>
                    <TabPanel >
                    {loadJobs()}
                    </TabPanel>
                </div>
            </Tabs>
            <Mission></Mission>
            <Faq></Faq>
        </div>
    );
};

export default Home;