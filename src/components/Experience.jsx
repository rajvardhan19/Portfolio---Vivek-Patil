import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-main">
        <h1 className="title">Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="March 2023 - Present"
            iconStyle={{
              background: "rgb(169,169,169)",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            <h3 className="vertical-timeline-element-title">Vice President</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Peninsula Land Ltd.
            </h4>
            <p>
              Leading strategic planning, project management, and operations to
              drive real estate development projects.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2011 - February 2023"
            iconStyle={{
              background: "rgb(169,169,169)",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Vice President - Projects
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Sumer Group</h4>
            <p>
              Managed end-to-end project lifecycle, from conception to
              completion, ensuring quality and timely delivery.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2009 - December 2010"
            iconStyle={{
              background: "rgb(169,169,169)",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            <h3 className="vertical-timeline-element-title">Head - Projects</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hiranandani Upscale
            </h4>
            <p>
              Spearheaded multiple residential and commercial projects, leading
              cross-functional teams to achieve project goals.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2004 - June 2009"
            iconStyle={{
              background: "rgb(169,169,169)",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            <h3 className="vertical-timeline-element-title">Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hiranandani Upscale
            </h4>
            <p>
              Managed project schedules, budgets, and resources, ensuring
              alignment with organizational objectives.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2001 - April 2004"
            iconStyle={{
              background: "rgb(169,169,169)",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            <h3 className="vertical-timeline-element-title">Senior Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Simplex Infrastructures Ltd.
            </h4>
            <p>
              Oversaw construction activities, coordinated with subcontractors,
              and ensured adherence to safety standards.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2000 - 2002"
            iconStyle={{
              background: "rgb(169, 169, 169)",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Master of Business Administration (MBA)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Pune
            </h4>
            <p>
              Specialized in project management and business administration.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 1999 - March 2001"
            iconStyle={{
              background: "rgb(169,169,169)",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            <h3 className="vertical-timeline-element-title">Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gammon India Ltd.
            </h4>
            <p>
              Worked on various civil engineering projects, focusing on quality
              control and project execution.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="1995 - 1999"
            iconStyle={{
              background: "rgb(169, 169, 169)",
              color: "#fff",
              borderRadius: "50%",
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Engineering in Civil Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Shivaji University
            </h4>
            <p>Completed undergraduate studies in civil engineering.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
