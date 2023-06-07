import "./App.css"

function App() {
    return (
        <>
            <div className="portfolio">
                <header>
                    <h1>Jirapat Klaokliang</h1>
                    <h2>Backend Developer</h2>
                </header>

                <section id="about">
                    <h3>About Me</h3>
                    <p>
                        Hi, I am Natt, a passionate Software Developer with
                        expertise in software solutions, data-related fields,
                        and DevOps. I have experience in Go, Python, Data
                        Engineering, Machine Learning, and DevOps. Seeking
                        opportunities to enhance my career and utilize my
                        skills.
                    </p>
                    <div className="contact-icons">
                        <a
                            href="https://www.linkedin.com/in/jirapat-klaokliang/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/nattrio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="https://dev.to/nattrio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-dev"></i>
                        </a>
                        <a href="mailto:jirapat.nattrio@gmail.com">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </section>
                <section id="projects">
                    <h3>Projects</h3>
                    <div className="project">
                        <a
                            href="https://github.com/nattrio/go-clean-arch"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h4>Go Note App</h4>
                        </a>
                        <p>
                            Simple note-taking application built with Go,
                            adhering to the clean architecture principles. It
                            provides a RESTful API for users to create, read,
                            update, and delete notes. The application is
                            containerized using Docker and can be easily
                            deployed and managed using Docker Compose.
                        </p>
                        <p className="stack">
                            <b> Stack: </b>Go Fiber, GORM, PostgreSQL, Docker
                        </p>
                    </div>
                    <div className="project">
                        <a
                            href="https://github.com/nattrio/student-prediction"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h4>
                                Undergraduate Student Admission Screening System
                            </h4>
                        </a>
                        <p>
                            This project aimed to develop a system for
                            predicting undergraduate students' performance in
                            information technology studies to support admission
                            decisions. The project consisted of two main parts:
                            analysis and model development and web application
                            interface development. Five machine learning
                            algorithms were studied.
                        </p>
                        <p className="stack">
                            <b> Stack: </b>Python FastAPI, NumPy, Pandas,
                            Scikit-learn
                        </p>
                    </div>
                    <div className="project">
                        <h4>Master Data</h4>

                        <p>
                            Worked on analyzing a relational database and SQL
                            script within a university database. The goal was to
                            create a refined structure for the database,
                            optimizing its organization and efficiency. This
                            project provided me with valuable hands-on
                            experience in working with real-world databases,
                            allowing me to enhance my skills in data analysis
                            and database management.
                        </p>
                        <p className="stack">
                            <b> Stack: </b>Python, SQL
                        </p>
                    </div>
                </section>
                <section id="exp">
                    <h3>Working Experience</h3>
                    <div className="project">
                        <h4>MSyne Innovations MSpire Academy</h4>
                        <p className="stack">
                            <b>Data Engineer</b> Oct 2021 - Dec 2021
                        </p>

                        <ul>
                            <li>
                                Trained in big data and data analytics modules,
                                including SQL, Hadoop and Machine Learning
                            </li>
                            <li>
                                Gained experience in Tableau project for
                                analyzing business information to meet specific
                                requirements and utilize the appropriate chart
                                types.
                            </li>
                            <li>
                                Utilized Informatica and Cloudera Data Science
                                Workbench for data management, profiling,
                                pipelining, and monitoring.
                            </li>
                        </ul>
                    </div>
                    <div className="project">
                        <h4>KASIKORN Business-Technology Group</h4>
                        <p className="stack">
                            <b>Data Engineer Intern</b> Jun 2021 - Jul 2021
                        </p>

                        <ul>
                            <li>
                                Created BASH scripts for job execution pipeline,
                                utilizing PySpark for data processing, and
                                manage user privilege on Cloudera Data Science
                                Workbench.
                            </li>
                            <li>
                                Collaborated with data science team for data
                                quality checks and model deployment, utilizing
                                SQL and DDL tools on Apache Hue.
                            </li>
                            <li>
                                Completed CBR documentation, including data
                                dictionaries.
                            </li>
                        </ul>
                    </div>
                </section>
                <footer>
                    <p>&copy; 2023 Jirapat Klaokliang. All rights reserved.</p>
                </footer>
            </div>
        </>
    )
}

export default App
