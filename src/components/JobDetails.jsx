import { useParams } from "react-router-dom";
import JobDetailsBanner from "./JobDetailsBanner"
import JobDetailsJob from "./JobDetailsJob"

const JobDetails = () => {
  const { job } = useParams();

  return (
    <section>
      <JobDetailsBanner />
      <JobDetailsJob />
    </section>
  )
}

export default JobDetails