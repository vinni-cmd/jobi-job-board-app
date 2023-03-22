import Search from "./Search"

const HomeBanner = () => {
  return (
    <section className="bg-primary-1 min-h-screen pt-44">
      <div className="wrapper">
        <h2>Find & Hire</h2>
        <p> Top 3% of expert on jobi.</p>
      </div>
      <Search />
    </section>
  )
}

export default HomeBanner