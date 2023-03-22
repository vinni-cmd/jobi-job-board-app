import { Link } from "react-router-dom"
import facebookIcon from "../assets/facebook-icon.svg"

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div>
          <div>
            <h3>Most complete job portal.</h3>
            <p>Signup and start find your job or talents</p>
          </div>
          <Link to={'/joblist'}>Looking for job?</Link>
          <Link>Post a job</Link>
        </div>
        <div className="flex">
          <div className="before:content-jobi-icon">
            jobi
          </div>
          <nav>
            <div>
              <h4>Products</h4>
              <ul>
                <li>
                  <Link>Take the tour</Link>
                </li>
                <li>
                  <Link>Live chat</Link>
                </li>
                <li>
                  <Link>Self-service</Link>
                </li>
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Collaboration</Link>
                </li>
                <li>
                  <Link>Reviews</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Links</h4>
              <ul>
                <li>
                  <Link>Pricing</Link>
                </li>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Careers</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link>Terms of use</Link>
                </li>
                <li>
                  <Link>Terms & conditions</Link>
                </li>
                <li>
                  <Link>Privacy</Link>
                </li>
                <li>
                  <Link>Cookie policy</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <h4>Newsletter</h4>
            <p>Join & get important news regularly</p>
            <form>
              <label htmlFor="subEmail" className="sr-only">Email</label>
              <input type="email" name="subEmail" id="subEmail" placeholder="Enter your email" required />
              <button>Send</button>
            </form>
            <p>We only send interesting and relevant emails.</p>
          </div>
        </div>
        <div>
          <div>
            <ul>
              <li>
                <Link>Privacy & Terms</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
          <p>Copyright @2022 jobi inc.</p>
          <div>
            <ul role="list">
              <li>
                <a href="#" aria-label="jobi facebook link">
                  <img src={facebookIcon} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="jobi instagram link">
                  <img src="../assets/instagram-icon.svg" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="jobi pinterest link">
                  <img src="../assets/pinterest-icon.svg" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer