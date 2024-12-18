import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
  <body data-bs-theme="dark">
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid" data-bs-theme="dark">
          <a className="navbar-brand" href="#">
           
            <Image src="/cognixialogo.png" alt="Cognixia Logo" width="200" height="100" />
          </a>
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
                <a className="nav-link" href="#">
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
        <div className="btn-group">


</div>

      </nav>

      <main className="container">
      <h2 className="text-center text-bg-dark m-2 p-2" >
        Cognixia Trainings Portal
      </h2>
      <p className="text-center text-bg-secondary m-2 p-2">
      Cognixia – a Collabera Learning Solutions Company is the world’s leading digital talent transformation partner. To date, Cognixia provides talent transformation programs for individuals as well as corporate workforce in the world’s leading emerging technologies, such as DevOps, Cloud Computing, Containers, Microservices, Agile, ITSM, Project Management, Business Analytics & Intelligence, Internet of Things, Machine Learning & Data Science, Application Development, etc.
rmation goals
        </p>
        <section className="row">
          <div className="card col-4 h-100">
            <div className ="card-header"> 
            <Image className="card-img-top" src="/cognixialogo.png" alt="Card image" width="100" height = "150" />
            </div>
            <div className="card-body">
              <h4 className="card-title">GenAI Programs</h4>
              <p className="card-text">Cognixia offers trainings in Generative AI from the basics of prompt engineering, through model integrations with APIs, Chatbots, and AI Agenting.</p>
              
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-success">Learn more</a>
            </div>
          </div>
          <div className="card col-4 h-100">
          <div className ="card-header"> 
            <Image className="card-img-top" src="/cognixialogo.png" alt="Card image" width="100" height = "150" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Java Full Stack Programs</h4>
              <p className="card-text">The Java Full Stack program includes core Java, SQL, J2EE, Git, SpringBoot, Reac, and AWS.</p>
              <div className="card-footer">
              <a href="#" className="btn btn-success">Learn more</a>
            </div>
            </div>
          </div>
          <div className="card col-4 h-100">
          <div className ="card-header"> 
            <Image className="card-img-top" src="/cognixialogo.png" alt="Card image" width="100" height = "150" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Data Engineering Programs</h4>
              <p className="card-text">The Data Engineering Program includes core Python 3.6+, NumPy, Pandas, SQL, Git, Visualizations, and AWS.</p>
              
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-success">Learn more</a>
            </div>
          </div>
          </section>
      </main>
   </body>
  );
}
