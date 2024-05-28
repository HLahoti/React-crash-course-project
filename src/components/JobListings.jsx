/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import jobs from "../jobs.json"
import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import spinner from "./spinner";

const JobListings = ({ isHome = false }) => {
    // console.log(jobs);
    // const jobListings = isHome ? jobs.slice(0, 3) : jobs;
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome
                ? "/api/jobs?_limit=3"
                : "/api/jobs";
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);

            } catch (error) {
                console.lob("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []);

    return (
        <>
            {/* <!-- Browse Jobs --> */}
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? "Recent Jobs" : "Browse Jobs"}
                    </h2>

                    {loading ? (<spinner loading={loading} />) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {
                                    jobs.map((job) => (
                                        <JobListing job={job} key={job.id} />
                                    ))
                                }
                            </div>
                        </>

                    )}

                </div>
            </section>
        </>
    )
}

export default JobListings
