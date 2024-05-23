import "../index.css";
import project1 from "../assets/Images/project1.jpg";
const Skill = () => {
  const skills = [
    {
      title: "Project Management",
      description:
        "Spearheading entire project workflows including planning, scheduling, budgeting, tendering, execution, and closure.",
    },
    {
      title: "Operational Excellence",
      description:
        "Developing and implementing best-in-class SOPs in operations, safety, quality, and procurement.",
    },
    {
      title: "Team Leadership",
      description: "Managing and supervising multi-departmental teams.",
    },
    {
      title: "Technical Proficiency",
      description:
        "Familiar with project design software such as AutoCAD, Microsoft Project, Primavera, and Revit.",
    },
    {
      title: "Strategic Planning",
      description:
        "Analyzing and developing alternate vendor sources to achieve cost-effective procurement.",
    },
    {
      title: "Client and Stakeholder Management",
      description:
        "Building and sustaining healthy business relationships with architects and consultants.",
    },
    {
      title: "Regulatory Compliance and Safety",
      description: "Developing safety and quality site-specific SOPs.",
    },
  ];

  return (
    <section id="skills" className="skills-main">
      <h1 className="title">Skills</h1>
      <div className="main-container">
        <div className="container-left">
          {skills.map((skill, index) => (
            <div key={index} className="card">
              <h2 className="skill-title">{skill.title}</h2>
              <p className="skill-desc">{skill.description}</p>
            </div>
          ))}
        </div>
        <div className="container-right">
          <img id="homepage-img" src={project1} alt="project1" />
        </div>
      </div>
    </section>
  );
};

export default Skill;
