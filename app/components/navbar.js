
import { GSP_NO_RETURNED_VALUE } from "next/dist/lib/constants";
import Link from 'next/link';
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./navbar.module.css"; // Import custom CSS

export default function Navbar() {


    return(
            <nav data-bs-theme="dark" className= {`navbar navbar-expand-lg bg-body-tertiary  ${styles.nav}`}>
                <div className="container-fluid" >
                <Link className="navbar-brand" href="/">
                    <Image className={styles.logoImage} src="/images/cognixialogo.png" alt="Cognixia Logo" width="200" height="100" />
                </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                    About Us
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                    Contact Us
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Login">
                    Login
                    </a>
                </li>
                </ul>
                <form className="d-flex" role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                    Search
                </button>
                </form>
            </div>
            </div>
         </nav>

    );

}