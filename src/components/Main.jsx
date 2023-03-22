import { Route, Routes } from "react-router-dom"
import ErrorPageBody from "./ErrorPageBody"
import HomeBanner from "./HomeBanner"
import HomeClientFeedback from "./HomeClientFeedback"
import HomeCollaboration from "./HomeCollaboration"
import HomeDirections from "./HomeDirections"
import HomeExperts from "./HomeExperts"
import HomeJobCategories from "./HomeJobCategories"
import HomeJobiGuides from "./HomeJobiGuides"
import HomePostJob from "./HomePostJob"
import HomeUploadCV from "./HomeUploadCV"
import JobDetails from "./JobDetails"
import JobListAllJobs from "./JobListAllJobs"
import JobListBanner from "./JobListBanner"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={
          <>
            <HomeBanner />
            <HomeJobCategories />
            <HomePostJob />
            <HomeDirections />
            <HomeExperts />
            <HomeClientFeedback />
            <HomeCollaboration />
            <HomeJobiGuides />
            <HomeUploadCV />
          </>
        } />
        <Route path="/joblist" element={
          <>
            <JobListBanner />
            <JobListAllJobs />
          </>
        } />
        <Route path="/job/:jobId" element={<JobDetails />} />
        <Route path="*" element={<ErrorPageBody />} />
      </Routes>
    </main>
  )
}

export default Main