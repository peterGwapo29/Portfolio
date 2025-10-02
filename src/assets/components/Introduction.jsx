import { useEffect, useState } from "react";
import profileImg from "../images/profile.png";

function Introduction() {
  const [typedName, setTypedName] = useState("");
  const fullName = "Peter Olan-Olan";
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        setTypedName(fullName.slice(0, index + 1));
        setIndex((prev) => prev + 1);
        if (index + 1 === fullName.length) {
          setTimeout(() => setIsDeleting(true), 1000);
          clearInterval(interval);
        }
      } else {
        setTypedName(fullName.slice(0, index - 1));
        setIndex((prev) => prev - 1);
        if (index - 1 === 0) setIsDeleting(false);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [index, isDeleting]);

  return (
    <section className="Introduction">
      <div className="name">
        <h1>
          I'm{" "}
          <span id="my-name">
            {typedName}
            <span className="typing-cursor">|</span>
          </span>
          <br />
          Web Developer
        </h1>

        <div className="incon-link">
          <a href="https://github.com/peterGwapo29">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="https://www.facebook.com/petergwapo.292004">
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a href="mailto:peterolanolan@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="image">
        <img src={profileImg} alt="profile picture" />
      </div>
    </section>
  );
}

export default Introduction;
