import style from "./HeroStyle.module.css";
import heroImage from "../../assets/abdullah.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/CV.pdf";
import { useTheme } from "../../Common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={style.container}>
      <div className={style.colorModeContainer}>
        <img
          className={style.hero}
          src={heroImage}
          alt="profile picture of Abdullah Sabir"
        />
        <img
          className={style.colorMood}
          src={themeIcon}
          alt="Color mood icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={style.info}>
        <h1>
          Abdullah
          <br />
          Sabir
        </h1>
        <h2>Backend Developer</h2>
        <span>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/abdullah123-debug" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-butt-191327398?"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={style.description}>
          With a strong passion for building scalable, secure, and
          high-performance <br />
          backend systems for commercial business applications.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
