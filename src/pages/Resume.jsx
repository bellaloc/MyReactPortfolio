import React from 'react';
import jsPDF from 'jspdf';

const Resume = () => {
  // Function to handle the resume download
  const handleDownload = () => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();
    
    // Add content to the PDF
    pdf.text('Christa Lococo - Resume', 10, 10);
    pdf.text(`
USA | (805) 284-1445 | ChristaLococo@gmail.com
Innovative and results-driven Full Stack Developer with a robust skill 
set from the UCLA Full Stack software engineering program. Proficient in designing and 
implementing dynamic web applications using cutting-edge technologies.
Adept at problem-solving, fostering client relationships, and contributing
to forward-thinking development teams.
TECHNICAL EXPERTISE
Languages & Frameworks:
  - JavaScript (Node.js) and ES6 (server-side development).
  - React, HTML, CSS (interactive and responsive UI).
  - Python with OOP principles.
Web Development:
  - Full Stack Development (MERN and MySQL stack).
  - Apollo for efficient data fetching through GraphQL.
  - Vite for streamlined development.
Database Management:
  - SQL (MySQL) and NoSQL (MongoDB) databases.
  - Strong database design and optimization skills.
  - Object-Relational Mapping (ORM).
Authentication & Security:
  - JWT (JSON Web Tokens) for secure authentication.
  - Two-Factor Authentication (2FA) implementation.
APIs and Integrations:
  - Building and consuming RESTful APIs.
  - Integrating third-party services.
  - Designing and implementing server-side APIs.
API Testing:
  - Proficient in using Insomnia for testing APIs.
Additional Skills:
  - Server-Side Rendering (SSR) for optimized performance.
  - Apollo Client and Server for efficient data modification.
  - OAuth for secure authorization.
  - Node.js ES6 syntax for server-side development.
EDUCATION & TECHNICAL TRAINING
UCLA Full Stack software engineering program (Graduated November 2023)
  - Proficient in Python, MERN stack, MySQL, and deploying dynamic
  web applications.
Bachelor's Degree in Business Law (Cal State Northridge - 2012)
  - Minor in Real Estate.
UCLA Statistics Certificate of Completion (2011)
Associate Degree in International Business (Santa Monica College - 2010)
  - Entrepreneurship Certificate of Achievement.
Additional Credentials and references upon request.`, 10, 10);

    // Save the PDF with a specific name
    pdf.save('ChristaLococo_Resume.pdf');
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Resume of Christa Lococo, a Full Stack Developer with a focus on MERN stack and web development."
        />
        <meta
          name="keywords"
          content="full stack, web development, MERN stack, resume, UCLA"
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

            .resume-section {
              margin-bottom: 2rem;
            }

            .resume-title {
              font-size: 2rem;
              color: #009688;
              margin-bottom: 1rem;
            }

            .resume-item {
              margin-bottom: 1rem;
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

            .btn-primary {
              background-color: #009688;
              border-color: #009688;
            }

            .btn-primary:hover {
              background-color: #00796b;
              border-color: #00796b;
            }
          `}
        </style>
        <title>Christa Lococo - Resume</title>
      </head>
      <body>
        <div className="container-fluid" id="root">
          <div className="resume-section">
            <h1 className="display-3 text-center">Christa Lococo - Resume</h1>
            <p className="lead text-center">
              Innovative and results-driven Full Stack Developer
            </p>
            <div className="text-center mb-3">
              <button className="btn btn-primary" onClick={handleDownload}>
                Download Resume
              </button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="resume-section">
            <h2 className="resume-title">Profile</h2>
            <p>
              Innovative and results-driven Full Stack Developer, equipped with a robust skill set honed at the UCLA Full Stack software engineering program and diversified project experiences. Demonstrated proficiency in designing and implementing dynamic web applications using cutting-edge technologies. Adept at problem-solving in fast-paced environments, fostering client/business relationships, and eager to contribute technical expertise to a forward-thinking development team.
            </p>
          </div>

          {/* Technical Expertise Section */}
          <div className="resume-section">
            <h2 className="resume-title">Technical Expertise</h2>
            <h3>Languages & Frameworks:</h3>
            <p>
              Proficient in JavaScript (Node.js) and ES6, specializing in server-side development.
              Extensive experience building interactive and responsive user interfaces using React, HTML, and CSS.
              Competent in Python, incorporating Object-Oriented Programming (OOP) principles.
            </p>
            {/* Add more technical expertise details */}
          </div>

          {/* Education & Technical Training Section */}
          <div className="resume-section">
            <h2 className="resume-title">Education & Technical Training</h2>
            <h3>UCLA Full Stack Software Engineering Program</h3>
            <p>Graduated November 2023</p>
            {/* Add more education details */}
          </div>

          {/* Project Experience Section */}
          <div className="resume-section">
            <h2 className="resume-title">Project Experience</h2>
            <h3>E-commerce Platform (Personal Project)</h3>
            <p>
              Designed and implemented an e-commerce website for "The Montecito Candle Company" using Python (Django), HTML, CSS, and JavaScript.
              Successfully integrated secure payment gateways and implemented order tracking functionality.
            </p>
            {/* Add more project experience details */}
          </div>

          {/* Key Achievements Section */}
          <div className="resume-section">
            <h2 className="resume-title">Key Achievements</h2>
            <ul>
              <li>Successfully graduated from the UCLA Full Stack Software Engineering Program, showcasing proficiency in a wide range of cutting-edge web development technologies.</li>
              <li>Developed and launched an e-commerce platform for "The Montecito Candle Company," highlighting strong entrepreneurial and problem-solving skills.</li>
              <li>Acquired a comprehensive skill set, ensuring versatility and adaptability in dynamic development environments.</li>
            </ul>
          </div>

          {/* References Section */}
          <div className="resume-section">
            <h2 className="resume-title">References</h2>
            <p>references available upon request.</p>
          </div>

          {/* Button to view the published resume */}
          <div className="text-center mb-3">
            <button className="btn btn-primary" onClick={() => window.open("https://docs.google.com/document/d/e/2PACX-1vQGXHBU1C7KP5KPdHaOXQ-a5Y1O-hwyVdmYaHCO8vuLmaLPhGi2IHQWJTWRoRtHOYLnrxu3qBBTjzOD/pub?embedded=true", "_blank")}>
              View Published Resume
            </button>
          </div>
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

export default Resume;
