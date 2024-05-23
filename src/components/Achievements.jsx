const Achievements = () => {
  const achievements = [
    {
      title: "Project Turnaround and Management",
      description:
        "Led the revival of pivotal real estate projects, steering them from potential losses to profitable ventures with revenues over ₹4000 crores.",
    },
    {
      title: "Awards and Recognitions",
      description:
        "Received multiple awards including 7 Star CRISIL rating, Platinum IGBC rating, and ROSPA Safety award.",
    },
    {
      title: "Operational Milestones",
      description:
        "Achieved a 5-day slab cycle and maintained positive cash flow from the third quarter of project inception.",
    },
    {
      title: "Cost Savings and Efficiency",
      description:
        "Cost saving of INR 55 Crores through value engineering in the Salsette 27 project.",
    },
    {
      title: "Project Highlights",
      description:
        "Managed significant projects such as New Cuffe Parade, Lodha Bellissimo, Indiabulls Finance Center, and Mahindra Gardens Goregaon.",
    },
  ];
  return (
    <section id="achievements">
      <h1 className="title">Achievements</h1>
      <div className="main-achievement-container">
        <div className="left-achievement-container">
          <video width="360" height="640" autoPlay muted loop>
            <source src="./video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-achievement-container">
          {achievements.map((achievement, index) => (
            <div key={index} className="card">
              <h2 className="achievement-title">{achievement.title}</h2>
              <p className="achievement-desc">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
