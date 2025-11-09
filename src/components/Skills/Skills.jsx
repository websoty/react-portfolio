import { motion } from "motion/react";
import infoSkills from "../data/skills";
import Title from "../Title/Title";
import "./Skills.css";
import { motionVariantY, motionVariant, motionVariantYF } from "../../utils/animation";

const Skills = () => {
  const { skills, exp } = infoSkills;
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <Title title={"Skills"} subtitle={"Skills"} />
        <div className="inner-content">
          <motion.div className="skills-description"
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.5}}
              custom={0}
              variants={motionVariantY}
          >
            {/* <h3>Skills</h3> */}
            <p>
              Gaining practical experience in modern Front-End development, focusing on creating responsive and user-friendly web interfaces.
            </p>
          </motion.div>
          <div className="skills-info education-all">
            <div className="education">
              <motion.h4 className="label"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0.5}}
                  custom={1}
                  variants={motionVariantY}
              >Skills</motion.h4>
              <ul className="bars">
                {skills.map((item, index) => (
                  <motion.li className="bar" key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: false, amount: 0.5}}
                      custom={index}
                      variants={motionVariantYF}
                  >
                    <div className="info">
                      <span>{item.skill}</span>
                      <span>{item.grade}</span>
                    </div>
                    <div className="line javascript"></div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className="education work-exp">
            <h3 className="work-exp-title">Work & Experience</h3>
            <div className="skills-info">
              {exp.map((item, index) => (
                <motion.div className="experience-card" key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.5}}
                    custom={index}
                    variants={motionVariant}
                >
                  <strong><span>{item.work}</span></strong>
                  <div className="hr"></div>
                  <p>{item.profit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
