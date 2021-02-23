import CourseThumb from "../../shared/components/CourseThumb/CourseThumb";
import LearningPath from "../../shared/components/LearningPath/LearningPath";
import SearchBar from "../../shared/components/SearchBar/SearchBar";
import Slider from "./components/Slider/Slider";
import png from "./../../../assets/png";

const Home = () => {
  const courses = [
    {
      title: "Build your first application",
      tool: "Codeigniter",
      icon: png.principle,
      color: "#FFA2C0",
    },
    {
      title: "Build something beautiful",
      tool: "Sketch",
      icon: png.principleTwo,
      color: "#FFCE73",
    },
    {
      title: "Firebase on Android: Cloud fire",
      tool: "Firebase",
      icon: png.principleThree,
      color: "#A0D7E7",
    },
    {
      title: "Creating custom animations",
      tool: "Principle",
      icon: png.principleFour,
      color: "#B2E2D7",
    },
  ];
  const paths = [
    {
      title: "Sketch from A to Z",
      text: "12 hours of video tutorials",
      count: 423,
    },
    {
      title: "Intro to React",
      text: "8 hours of video tutorials",
      count: 648,
    },
    {
      title: "Become a manager",
      text: "24 hours of video tutorials",
      count: 562,
    },
  ];
  const slides = [
    {
      title: "Artificial Intelligence for Marketing",
      text:
        "Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations",
    },
    {
      title: "Artificial Intelligence for Marketing 2",
      text:
        "Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations",
    },
    {
      title: "Artificial Intelligence for Marketing 3",
      text:
        "Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations",
    },
    {
      title: "Artificial Intelligence for Marketing 4",
      text:
        "Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations",
    },
  ];

  return (
    <div id="home-page">
      <div className="head-text w-half">
        <h3 className="mt-50">Hi toda,</h3>
        <h1>What will you learn today?</h1>
      </div>
      <div className="search-head w-half">
        <SearchBar />
      </div>
      <div className="learn-slider w-half">
        <Slider data={slides} />
      </div>
      <div className="courses w-half">
        {courses.map((c, index) => {
          return <CourseThumb key={index} data={c} />;
        })}
      </div>
      <div className="learning-paths w-half">
        <h3>Your learning path</h3>
        <div className="paths">
          {paths.map((p, index) => {
            return (
              <div key={index} className="l-path">
                <LearningPath data={p} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="learning-point w-half"></div>
    </div>
  );
};

export default Home;
