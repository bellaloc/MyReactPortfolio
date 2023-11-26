import React from 'react';

const ProjectItem = ({ title, description, link }) => (
  <li className="project-list-item">
    <h4>{title}</h4>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" role="button">
      View Project
    </a>
  </li>
);

const Projects = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore the portfolio of Christa Lococo, a Full Stack Developer from UCLA Extension Bootcamp."
        />
        <meta
          name="keywords"
          content="full stack, web development, UCLA Extension Bootcamp, projects"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/path-to-your-favicon.svg"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-eOHQpGFDeSt6bq1cFV6GG1RpgjfrH3Y4RvJbM34uPmAa/8eBOO80y6U6gBuQ/ccQ"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
        <style>
          {`
            body {
              font-family: 'Roboto', sans-serif;
              background: linear-gradient(to right bottom, #63b4ca, #00838f);
              color: #ff7e5f;
              margin: 0;
              padding: 0;
            }

            #root {
              padding: 2rem;
              background-color: #ffffff;
              border-radius: 8px;
              margin: 2rem;
            }

            h1 {
              color: #009688;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-size: 3rem;
              text-transform: uppercase;
              letter-spacing: 2px;
              margin-bottom: 1rem;
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            }

            p {
              color: #ff7e5f;
              font-size: 1.2rem;
              margin-bottom: 2rem;
            }

            .project-list {
              list-style: none;
              padding: 0;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }

            .project-list-item {
              margin: 1rem;
              padding: 1.5rem;
              border: 2px solid #42f4e2;
              border-radius: 8px;
              transition: transform 0.3s ease-in-out;
              width: 100%;
              background-color: #ffffff;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            .project-list-item img {
              border: 2px solid #0e1414;
              border-radius: 8px;
              max-width: 100%;
              height: auto;
              margin-bottom: 1rem;
            }

            .image-with-border {
              border: 2px solid #162120;
              border-radius: 8px;
              overflow: hidden;
              max-width: 100%;
            }

            .project-list-item:hover {
              transform: scale(1.05);
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            }

            .lead {
              font-size: 1.5rem;
              color: #ff7e5f;
            }

            .navbar {
              background: linear-gradient(to right, #005662, #009688);
            }

            .navbar-brand,
            .navbar-nav .nav-link {
              color: #ffffff;
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
              }

              to {
                opacity: 1;
              }
            }

            body {
              animation: fadeIn 1s ease-in-out;
            }
          `}
        </style>
        <title>Full Stack Developer Portfolio - Christa Lococo</title>
      </head>
      <body>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Christa Lococo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#root">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid" id="root">
          <div className="text-center">
            <h1 className="display-3">
              Welcome to the Full Stack Developer Portfolio of Christa Lococo
            </h1>
            <p className="lead">
              Explore my projects and skills in web development. As a graduate
              of the UCLA Extension Bootcamp, I bring a solid foundation and a
              passion for creating innovative solutions. Let's build something
              amazing together!
            </p>
          </div>
          <section id="projects">
            <h2 className="text-center mb-4">Projects</h2>
            <ul className="list-unstyled project-list d-flex justify-content-center">
              <ProjectItem
                title="Wine & Food Pairing App"
                description="Pair your wine and food with this fullstack application."
                link="https://wine-wizard-a6de255e2c53.herokuapp.com/"
              />
              <ProjectItem
                title="Password Generator"
                description="Generate a secure password with this App."
                link="https://bellaloc.github.io/PasswordGenerator/"
              />
              <ProjectItem
                title="Coding Quiz"
                description="Test your knowledge with this online quiz."
                link="https://bellaloc.github.io/JsCodingQuiz/"
              />
              <ProjectItem
                title="Day Planner"
                description="Plan your day with this App"
                link="https://bellaloc.github.io/dayPlannerHomework/"
              />
              <ProjectItem
                title="Tiny Wear Online Shop"
                description="Full stack ecommerce website"
                link="https://github.com/bellaloc/TinyWear"
              />
              <ProjectItem
                title="Weather App"
                description="Track the weather in any city and get the forecast"
                link="https://bellaloc.github.io/Weather/"
              />
              <ProjectItem
                title="Employee Management System"
                description="Manage your employees with this backend system"
                link="https://drive.google.com/file/d/1iVO830rHDFc2iKqLqBYEQU4IsGoO8GHn/view"
              />
              <ProjectItem
                title="ReadMe Generator"
                description="Generate a readMe for your project in VScode"
                link="https://bellaloc.github.io/readme-generator2/"
              />
              <ProjectItem
                title="Logo Generator"
                description="Generate a Logo for your project in VScode"
                link="https://drive.google.com/file/d/1dgUsUK54Z0AQ11D9E8yzZoftVm4aqkMU/view?pli=1"
              />
              <ProjectItem
                title="Ecommerce Backend"
                description="Scalable Backend management for ecommerce website"
                link="https://drive.google.com/file/d/1nTd9tJX-02JV2MfW3gBm7_kZtCqfGX30/view"
              />
              <ProjectItem
                title="Regex Tutorial"
                description="Learn about Email Validation"
                link="https://gist.github.com/bellaloc/53dff2d3cec06a490432af65733532db"
              />
              <ProjectItem
                title="Tech Blog"
                description="Create, update, or delete a blog post"
                link="https://murmuring-cliffs-02800-824951aee946.herokuapp.com/"
              />
              <ProjectItem
                title="Social Network"
                description="Social Network post, like, comment, add friends"
                link="https://bellaloc.github.io/SocialNetwork/"
              />
              <ProjectItem
                title="First Portfolio"
                description="Check out some of my early projects."
                link="https://bellaloc.github.io/Portfolio/"
              />
              <ProjectItem
                title="Sing Along"
                description="Interactive karaoke website."
                link="https://github.com/adamywfong/singalong/tree/main#readme"
              />
              <ProjectItem
                title="More Projects"
                description="Additional projects"
                link="path-to-deployed-project"
              />
            </ul>
          </section>
        </div>
        <script
          src="https://code.jquery.com/jquery-3.6.4.min.js"
          integrity="sha384-uUuTiLz+Q1x7e8hI8fNss2C27c7jHcFNMYpDLA+Ak5paDy4NbhO4sfpejHHvR+W3"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-eZsTzf3ZN5LDE5lnh6P8Yv9UQWb6a09aF5GpWvjAuC6cOCz5ffM90FhjEKOA7/ms"
          crossOrigin="anonymous"
        ></script>
      </body>
    </>
  );
};

export default Projects;
