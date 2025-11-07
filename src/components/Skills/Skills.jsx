import infoSkills from "../data/skills";
import Title from "../Title/Title";
import "./Skills.css";

const Skills = () => {
  const { skills, exp } = infoSkills;
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <Title title={"Skills"} subtitle={"Skills"} />
        <div className="inner-content">
          <div className="skills-description">
            <h3>Skills</h3>
            <p>
              Gaining practical experience in modern Front-End development, focusing on creating responsive and user-friendly web interfaces.
            </p>
          </div>
          <div className="skills-info education-all">
            <div className="education">
              <h4 className="label">Skills</h4>
              <ul className="bars">
                {skills.map((item, index) => (
                  <li className="bar" key={index}>
                    <div className="info">
                      <span>{item.skill}</span>
                      <span>{item.grade}</span>
                    </div>
                    <div className="line javascript"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="education work-exp">
            <h3 className="work-exp-title">Work & Experience</h3>
            <div className="skills-info">
              {exp.map((item, index) => (
                <div className="experience-card" key={index}>
                  <strong><span>{item.work}</span></strong>
                  <div className="hr"></div>
                  <p>{item.profit}</p>
                </div>
              ))}

              {/* <div className="experience-card">
                <div className="upper">
                  <h3>Cr. Web Developer</h3>
                  <h5>Full Time | InHouse</h5>
                  <span>2019 - 2020</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">ib-themes ltd.</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
              <div className="experience-card">
                <div className="upper">
                  <h3>Jr. Web Developer</h3>
                  <h5>Full Time | Remote</h5>
                  <span>2018 - 2019</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">Creative Gigs.</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
