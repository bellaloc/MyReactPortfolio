import React from 'react';

const Home = () => {
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

            .image-with-border {
              border: 2px solid #162120;
              border-radius: 8px;
              overflow: hidden;
              max-width: 100%;
            }

            .image-with-border img {
              border-radius: 8px;
              max-width: 100%;
              height: auto;
            }

            .lead {
              font-size: 1.5rem;
              color: #ff7e5f;
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
        <div id="root" className="container-fluid text-center">
          {/* Image with Border */}
          <div className="image-with-border">
            <img src="https://photos.zillowstatic.com/p_m/ISuw85lrwt7dnb0000000000.jpg" alt="Christa Lococo" />
          </div>

          {/* Header and Description */}
          <h1 className="display-3">Welcome to the Full Stack Developer Portfolio of Christa Lococo</h1>
          <p className="lead">
            Hi, I'm Christa Lococo, a passionate Full Stack Developer who graduated from the UCLA Extension Bootcamp. I bring a solid foundation in web development and a drive for creating innovative solutions. Let's build something amazing together!
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

export default Home;
