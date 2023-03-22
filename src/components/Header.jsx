import { Link } from "react-router-dom"
import Dropdown from "./Dropdown"

const Header = () => {
  return (
    <header className=" bg-transparent absolute flex text-secondary-1">
      <div className="wrapper">
        <div className=" before:content-jobi-icon">jobi</div>
        <nav className="flex">
          <div className=" before:content-category-icon">Category</div>
          <ul>
            <li>
              <Link to={'/'}>
                Home
              </Link>
            </li>
            <li>
              <Link to={'/joblist'}>
                Job
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                Explore
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                Contact
              </Link>
            </li>
            <li>
              <button>
                Pages
              </button>
              <Dropdown />
            </li>
          </ul>
          <ul>
            <li>
              <Link to={'/'}>
                Post Job
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                Login
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                Hire Top Talents
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header