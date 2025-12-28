import styles from "./Skills.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../Common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Node JS" />
        <SkillList src={checkMarkIcon} skill="Express Js" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="JWT Authentication" />
      </div>

      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Rest API" />
        <SkillList src={checkMarkIcon} skill="Git/GitHub" />
      </div>
    </section>
  );
}

export default Skills;
