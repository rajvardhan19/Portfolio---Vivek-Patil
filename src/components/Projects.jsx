import React from "react";

const projects = [
  {
    title: "Lodha Group: New Cuffe Parade (Mix used project of 23 Acre) ",
    description:
      "Two High Rise Super Luxury Residential Tower (46 floor), associated parking lots, amenities and infrastructure. Principle Architect - WOHA Design Singapore, Interior Architect - YOO UK, Structural - MKA, Completed Phase I from start to end, per unit price - 6.5 to 20 Crores approx. 2 million sqft. developments from start to end within budgeted time and cost. 6 days slab cycle. Successfully turndown Contractor's (L&T and other) claims for extra items and idling charges with proper technical analysis and logical reasoning",
    imageUrl: "/project1.jpg",
  },
  {
    title: "Lodha Group:	Lodha Bellissimo ",
    description:
      "200mt tall 48-storied Residential Tower Amid Large Pristine Landscaped Terrain in the Heart of Mumbai. Spa by L'Occitane, France, Club House-20,000 sq.ft, 3 Acres Landscape and 3 Level Government Car Park",
    imageUrl: "project2.jpg",
  },
  {
    title: "Indiabulls: Indiabulls Finance Center",
    description:
      " Commercial Offices approx. 13.72 lac sqft development. From 2nd floor RCC to handover in 15 months. 7 days slab cycle",
    imageUrl: "project3.jpg",
  },
  {
    title: "Indiabulls: Sky Suites",
    description: " High Rise Luxury Tower 80 Storey + 3 Basement",
    imageUrl: "project1.jpg",
  },
  {
    title: "ICICI Bank",
    description:
      "Project Appraisals, Valuation and Pre/post funding audits, Training of  Sales, Credit Managers and Valuers, Appointing New Valuers, Business Development and so on",
    imageUrl: "project2.jpg",
  },
  {
    title: "K Raheja Universal",
    description:
      "One Altamount, 33 Storey + 2 Basements Tower at Altamount Road. 1.65 lac sqft. development.  From start to end in 35 months .Raheja Legend, 40 Storey Tower at Worli, Mumbai. Raheja Infocity: IT park- 100 Acre Development (IT Building, Hotels, Malls and so on)",
    imageUrl: "project3.jpg",
  },
  {
    title: "Mahindra Gesco",
    description:
      "Mahindra Gardens Goregaon -W, Mumbai - 16 Storey Twin Tower with Common Basement, Infra and Amenities. Pre-tendering work, planning and cost control, completed project within budget",
    imageUrl: "project1.jpg",
  },
  {
    title: "Kanakia Construction:",
    description:
      " 	Challenger, 27+2 Storey Tower at Kandivali-E. Successfully completed all balance Civil and entire finishing work with department labours after main contractor was terminated. Received special appreciation from MD",
    imageUrl: "project2.jpg",
  },
];

const Projects = () => {
  // Split projects into chunks of 3
  const chunkedProjects = projects.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new row
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h1 className="title">Projects</h1>
      {chunkedProjects.map((row, rowIndex) => (
        <div className="projects-row" key={rowIndex}>
          {row.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Projects;
