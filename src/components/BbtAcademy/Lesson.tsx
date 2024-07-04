import { IoTime } from "react-icons/io5";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

import "../../styles/components/BbtAcademy/Lesson.scss";

type Props = {
  image?: string;
  title?: string;
  content?: string;
  topics?: string[];
  totalHour?: number;
  lessonCount?: number;
  active?: boolean;
};

const Lesson = ({
  image,
  title,
  content,
  topics,
  totalHour,
  lessonCount,
  active = false,
}: Props) => {
  return (
    <div className={`${active && "active"} lesson`}>
      <img src={image} alt="" />
      <div className="details">
        <div className="title-desc">
          <h1>{title}</h1>
          <p>{content}</p>
          <div className="topics">
            {topics?.map((item, key) => (
              <span key={key}>{item}</span>
            ))}
          </div>
        </div>
        <div className="bottom">
          <div>
            <span>
              <IoTime /> {lessonCount} Saat
            </span>
            <span>
              <BsArrowCounterclockwise />
              {totalHour} Ders
            </span>
          </div>
          <span className="playButton">
            <FaPlay />
          </span>
        </div>
      </div>
      <img
        src="/images/lesson-shape-left.png"
        alt=""
        id="left-shape"
        className="shape"
      />
      <img
        src="/images/lesson-shape-right.png"
        alt=""
        id="right-shape"
        className="shape"
      />
    </div>
  );
};

export default Lesson;
