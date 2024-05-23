import "../App.css";
import { useState, useEffect } from "react";
const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Company A",
      message:
        "Vivek is a remarkable project manager who consistently delivers top-notch results. His expertise and leadership have been invaluable to our projects.",
    },
    {
      name: "Jane Smith",
      position: "CTO, Company B",
      message:
        "Working with Vivek has been a pleasure. His attention to detail and commitment to excellence are unmatched.",
    },
    {
      name: "Bob Johnson",
      position: "Colleague",
      message:
        "Vivek is a great team player and a highly skilled professional. He always goes above and beyond to ensure project success.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials available</div>;
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h1 className="title">Testimonials</h1>
        <div className="testimonials-content">
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-slide ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <h3 className="name">{testimonial.name}</h3>
                <p className="position">{testimonial.position}</p>
                <p className="message">{testimonial.message}</p>
              </div>
            ))}
          </div>
          <div className="video-container">
            <video width="100%" controls>
              <source src="./video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
