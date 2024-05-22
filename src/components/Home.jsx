import "../App.css";
import project1 from "../assets/Images/project1.jpg";
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="main-home">
        <div className="left-image">
          <img src={project1} alt="project1" />
        </div>
        <div className="right-content">
          <div className="text">
            <h1>Vivek Patil</h1>
            <h2>
              Vice President at Peninsula Land Ltd. Strategic Visionary in Real
              Estate with 24-Year Track Record
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
