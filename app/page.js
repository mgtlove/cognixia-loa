import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css"; // Import custom CSS
import Link from 'next/link';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <body>

      {/* Main Content */}
      <main className="container-fluid bg-dark">
        <h2 className="text-center text-bg-dark m-2 p-2">
          Cognixia Trainings Portal
        </h2>
        <p className="text-center m-2 p-2">
          Cognixia – a Collabera Learning Solutions Company is the world’s leading digital talent transformation partner. To date, Cognixia provides talent transformation programs for individuals as well as corporate workforce in the world’s leading emerging technologies, such as DevOps, Cloud Computing, Containers, Microservices, Agile, ITSM, Project Management, Business Analytics & Intelligence, Internet of Things, Machine Learning & Data Science, Application Development, etc.
        </p>
        
        {/* Cards Section */}
        <section className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-header text-center">
                <Image className={`card-img-top ${styles.cardImage}`} src="/images/genai.jpeg" alt="Card image" width="150" height="75" />
              </div>
              <div className="card-body">
                <h4 className="card-title">GenAI Programs</h4>
                <p className="card-text">Cognixia offers trainings in Generative AI from the basics of prompt engineering, through model integrations with APIs, Chatbots, and AI Agenting.</p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-success">Learn more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-header text-center">
                <Image className={`card-img-top ${styles.cardImage}`} src="/images/javafullstack.jpeg" alt="Card image" width="150" height="75" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Java Full Stack Programs</h4>
                <p className={`card-text ${styles.cardText}`}>The Java Full Stack program includes core Java, SQL, J2EE, Git, SpringBoot, React, and AWS.</p>
              </div>
              <div className="card-footer">
                <Link href="/javaProgram" className="btn btn-success">Learn more</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-header text-center">
                <Image className={`card-img-top ${styles.cardImage}`} src="/images/dataengineering.png" alt="Card image" width="150" height="75" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Data Engineering Programs</h4>
                <p className={`card-text ${styles.cardText}`}>The Data Engineering Program includes core Python 3.6+, NumPy, Pandas, SQL, Git, Visualizations, and AWS.</p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-success">Learn more</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}