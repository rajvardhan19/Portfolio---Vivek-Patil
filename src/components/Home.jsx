import "../App.css";
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="main-home">
        <div className="left-image">
          <video width="360" height="640" autoPlay muted loop>
            <source src="./video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-content">
          <div className="text">
            <h1 className="title">Vivek Patil</h1>
            <h2 className="sub-heading">
              Hi, I'm Vivek R. Patil, the Vice President at Peninsula Land Ltd.
              With over 24 years of extensive experience in the real estate
              industry, I have consistently driven strategic vision and
              operational excellence to deliver remarkable results. Welcome to
              my professional portfolio.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
