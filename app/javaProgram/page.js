// filepath: /Users/matthewtruelove/Java Workspace/cognixia-loa-portal/app/JavaProgram/page.js
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css"; // Import custom CSS
import Link from 'next/link';

export default function javaProgram() {
  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={`text-center p-5 ${styles.heroSection}`}>
        <div className="container">
          <h1 className="display-4 fw-bold">Java Program</h1>
          <p className="lead">
            Your pathway to understanding the fundamentals of Java full stack.
          </p>
          <button className="btn btn-primary btn-lg mt-3">Start Learning</button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Left Side (2/3) */}
            <div className="col-lg-8">
              <div className="embed-responsive embed-responsive-16by9 mb-4">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/r2rpLrScyr0"
                  title="Meet the Instructors: Matthew Truelove"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="text-center mb-4">Curriculums</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Future Horizons</h5>
                      <p className="card-text">
                        A entry level, 4-week course that covers the basics of Java programming.
                      </p>
                      <a href="#" className="btn btn-outline-primary">
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">eLearning</h5>
                      <p className="card-text">
                        Offerings of basic and intermediate Java programming course in a self-paced format.
                      </p>
                      <a href="#" className="btn btn-outline-primary">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                {/* Add more cards as needed */}
              </div>
            </div>

            {/* Right Side (1/3) */}
            <div className="col-lg-4">
              <h2 className="text-center mb-4">Additional Resources</h2>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Documentation</h5>
                  <p className="card-text">
                    Access the official Unity documentation for more in-depth information.
                  </p>
                  <a href="#" className="btn btn-outline-primary">
                    Read More
                  </a>
                </div>
              </div>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Community</h5>
                  <p className="card-text">
                    Join the Unity community to get help and share your experiences.
                  </p>
                  <a href="#" className="btn btn-outline-primary">
                    Join Now
                  </a>
                </div>
              </div>
              {/* Add more cards or content as needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}