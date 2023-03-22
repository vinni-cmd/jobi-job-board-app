import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, get } from "firebase/database";
import JobDetailsBanner from "./JobDetailsBanner"
import JobDetailsJob from "./JobDetailsJob"
import firebase from "../database/firebase";


const JobDetails = () => {
  const [job, setJob] = useState({})
  const { jobId } = useParams();
  console.log(jobId)

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `${jobId}`);
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setJob(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <section>
      <JobDetailsBanner job={job} />
      <JobDetailsJob job={job} />
    </section>
  )
}

export default JobDetails