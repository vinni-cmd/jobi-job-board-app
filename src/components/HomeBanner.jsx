import Search from "./Search"

const HomeBanner = () => {
  return (
    <section className="bg-primary-1 min-h-screen pt-48">
      <div className="wrapper">
        <div>
          <h1>Find & Hire</h1>
          <p> Top 3% of expert on jobi.</p>
        </div>
        <Search />
      </div>
    </section>
  )
}

export default HomeBanner