import profileAbout from "../images/profile.jpg";
import CV from "../CV/PeterCV.pdf";

function AboutMe() {
  return (
    <section id="about-me">
      <h1>WHO AM I ?</h1>

      <div className="about-person">
        <img src={profileAbout} alt="profile picture" />

        <div className="about-me-info">
          <p id="about-me-info">
            {" "}
            Hi, I'm <strong>Peter Olan-Olan</strong>, currently pursuing
            Bachelor of Science in Information Technology as 3rd year student. A
            passionate and detail-driven web developer with a strong foundation
            in front-end technologies like{" "}
            <strong>HTML, CSS, JavaScript, and ReactJS. </strong>
            I love creating clean, responsive, and user-friendly websites that
            blend function and design. My focus is on writing efficient,
            maintainable code and continuously learning to improve my skills.
            <br />
            <br />
            I'm currently expanding my knowledge in back-end development to
            become a full-stack developer. Outside of coding, I enjoy exploring
            new tech trends, experimenting with UI design, and solving
            real-world problems through code.
          </p>

          <button>
            <a href={CV}>Download CV</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
