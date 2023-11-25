import React from 'react';

const About = () => {
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
        <div id="root" className="container-fluid">
          <h1>About Me</h1>
          <p>
            Hi there! I'm Christa Lococo, a passionate Full Stack Developer
            originally from the vibrant city of Los Angeles, CA. I have a
            deep-seated love for technology and a knack for crafting innovative
            solutions.
            <br />
            <br />
            Born and raised in the diverse and dynamic environment of Los
            Angeles, I bring a unique perspective to my work. Recently, I
            graduated from the rigorous UCLA Extension Bootcamp Software
            Engineering Program, where I immersed myself in the world of web
            development.
            <br />
            <br />
            My journey in the bootcamp equipped me with a robust skill set that
            spans the entire software development stack. From designing
            responsive and intuitive user interfaces with HTML, CSS, and React,
            to building powerful server-side applications using Node.js, my
            skills cover a broad spectrum.
            <br />
            <br />
            During my time at the bootcamp, I delved into the intricacies of
            database management, version control with Git, and the principles
            of full-stack development. I am proficient in creating dynamic and
            scalable web applications, and I thrive on the challenges that come
            with turning ideas into functional, user-friendly products.
            <br />
            <br />
            My goal is to leverage my technical expertise and creativity to
            contribute meaningfully to the ever-evolving field of software
            development. I am excited about the prospect of using my skills to
            build robust, user-centric applications and contribute to innovative
            projects.
            <br />
            <br />
            Let's connect and explore the endless possibilities in the world of
            web development!
          </p>
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

export default About;
