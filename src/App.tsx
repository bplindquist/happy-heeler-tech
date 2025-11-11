import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <img style={{ width: "50%", height: "50%" }} src={logo} alt="Logo" />
      <h1>Welcome to Happy Heeler Technologies, LLC!</h1>

      <section>
        <h3>
          We offer tutoring services and instruction in web development concepts
          and programming languages such as Javascript and Python. Our mission
          is to empower individuals with the skills and knowledge needed to
          excel in the tech industry.
        </h3>
      </section>

      <p>For all inquiries, please reach out to us anytime at:</p>
      <a href="mailto:brian@happyheelertech.com">brian@happyheelertech.com</a>
    </>
  );
}

export default App;
