import { useEffect, useState } from "react"
import { getDatabase, ref, get } from "firebase/database";


import firebase from "../database/firebase";

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
      <div>JobListAllJobs</div>
      <ul>
        {
          allJobs.map(job => {
            return (
              <li key={job.jobId}>
                <h3>{job.jobDetails.title}</h3>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default JobListAllJobs