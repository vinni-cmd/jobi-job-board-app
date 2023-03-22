import { useEffect, useState } from "react"
import { getDatabase, ref, get } from "firebase/database";
import firebase from "../database/firebase";
import { Link } from "react-router-dom";
import JobListFilter from "./JobListFilter";


const JobListAllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        const jobsObject = snapshot.val();
        const jobsArray = [];
        for (let job in jobsObject) {
          jobsArray.push({
            jobId: job,
            jobDetails: jobsObject[job],
          });
        }
        setAllJobs(jobsArray);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <section>
      <div className="wrapper">
        <div>JobListAllJobs</div>
        <JobListFilter />
        <ul>
          {
            allJobs.map(job => {
              return (
                <li key={job.jobId}>
                  <h3>{job.jobDetails.title}</h3>
                  <Link to={`/job/${job.jobId}`}>
                    apply
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default JobListAllJobs