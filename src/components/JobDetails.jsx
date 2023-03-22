import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDatabase, ref, get } from "firebase/database";
import JobDetailsBanner from "./JobDetailsBanner"
import JobDetailsJob from "./JobDetailsJob"
import firebase from "../database/firebase";


const JobDetails = () => {
  const [job, setJob] = useState({})
  const { jobId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `${jobId}`);
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setJob(snapshot.val());
      } else {
        navigate('*')
      }
    }).catch((error) => {
      console.log(error)
      navigate('*')
    })
  }, [])

  return (
    <>
      <JobDetailsBanner job={job} />
      <JobDetailsJob job={job} />
    </>
  )
}

export default JobDetails