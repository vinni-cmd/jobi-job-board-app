import { Link } from "react-router-dom";

const ErrorPageBody = () => {

  return (
    <section className="bg-slate-700 pt-48">
      <div className="wrapper">
        <h2 className="text-5xl">ErrorPageBody</h2>
        <Link to={'/'} className="p-11">
          go back
        </Link>
      </div>
    </section>
  )
}

export default ErrorPageBody