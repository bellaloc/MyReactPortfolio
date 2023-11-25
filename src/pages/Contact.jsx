import React, { useState } from "react";
import * as emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_9uvvzpt', 'template_y51733v', formData, 'vx37v5uoWs3oWu7jW');
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

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

            form {
              max-width: 600px;
              margin: 0 auto;
            }

            .btn-primary {
              background-color: #009688;
              border: none;
            }

            .btn-primary:hover {
              background-color: #005662;
            }
          `}
        </style>
        <title>Full Stack Developer Portfolio - Christa Lococo</title>
      </head>
      <body>
        <div id="root" className="container-fluid">
          <h1>Contact Me</h1>
          <p>
            Ready to take your project to the next level? Feel free to reach
            out! I am open to collaboration and always excited about new
            opportunities. You can contact me via email at{" "}
            <a href="mailto:christa.lococo@example.com">
              christa.lococo@example.com
            </a>{" "}
            or connect with me on LinkedIn [
            <a href="https://www.linkedin.com/in/christa-lococo-4540992a1/">
              https://www.linkedin.com/in/christa-lococo-4540992a1/
            </a>
            ].
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
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

export default Contact;
