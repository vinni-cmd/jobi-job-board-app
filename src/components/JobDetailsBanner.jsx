const JobDetailsBanner = ({ job }) => {
  return (
    <section>
      <div className="wrapper">
        <div>JobDetailsBanner</div>
        <h2 className="text-4xl">{job.title}</h2>
      </div>
    </section>
  )
}

export default JobDetailsBanner