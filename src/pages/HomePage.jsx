import Hero from '../components/Hero'
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {
    return (
        // <div>HomePage</div>
        <>
            <Hero title='Become a React Dev'
                subtitle='Find the react job that speaks to you!' />
            <HomeCards />
            <JobListings isHome={true} />
            <ViewAllJobs />
        </>
    )
}

export default HomePage
