
import { Link } from "react-router-dom";
export function Header() {
    return(
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="https://getbootstrap.com/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">App Name</span>
                </a>
                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <Link className="me-3 py-2 text-dark text-decoration-none" to="/">Home</Link>
                    <Link className="me-3 py-2 text-dark text-decoration-none" to="/about">About</Link>
                    <Link className="me-3 py-2 text-dark text-decoration-none" to="/click-me">Click Me!</Link>
                </nav>
            </div>
      </header>
    )
}