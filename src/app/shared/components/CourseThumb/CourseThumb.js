import svg from "./../../../../assets/svg";

const CourseThumb = ({ data }) => {
  return (
    <div className="course_thumb">
      <div className="course_image" style={{ backgroundColor: data.color }}>
        <img src={data.icon} />
      </div>
      <div className="course_text">
        <h3>{data.title}</h3>
        <h5>{data.tool}</h5>
      </div>
      <img src={svg.right} />
    </div>
  );
};

export default CourseThumb;
