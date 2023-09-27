
import Link from "next/link";

const Navbar = () =>
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
            <div className="container-fluid">
                <Link className="navbar-brand p-2" href="/">Portfolio</Link>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="me-auto mb-2 mb-lg-0"></ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link href="blog" className="nav-link"> About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" href="github"> Contact </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
export default Navbar;