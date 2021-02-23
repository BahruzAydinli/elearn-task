import user from "./icons/user.png";
import dots from "./icons/dots.png";
import star from "./icons/star.png";

const LearningPath = ({ data }) => {
  console.log(data);
  return (
    <div className="learning_path">
      <h4>{data.title}</h4>
      <p>{data.text}</p>
      <p>{data.count} students</p>
      <div className="users">
        <img src={user} />
        <img src={user} />
        <img src={user} />
        <img src={user} />
        <img src={user} />
      </div>
      <div className="path-bottom">
        <img src={star} />
        <img src={dots} />
      </div>
    </div>
  );
};

export default LearningPath;
