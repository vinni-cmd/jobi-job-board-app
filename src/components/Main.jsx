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
import JobDetailsBanner from "./JobDetailsBanner"
import JobDetailsJob from "./JobDetailsJob"
import JobListAllJobs from "./JobListAllJobs"
import JobListBanner from "./JobListBanner"
import JobListFilter from "./JobListFilter"

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
            <JobListFilter />
            <JobListAllJobs />
          </>
        } />
        <Route path="/joblist/:jobId" element={
          <>
            <JobDetailsBanner />
            <JobDetailsJob />
          </>
        } />
        <Route path="*" element={<ErrorPageBody />} />
      </Routes>
    </main>
  )
}

export default Main