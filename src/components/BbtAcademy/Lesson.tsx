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
    <div
      className={`${active && "active"} lesson`}
      style={{
        backgroundImage: 'url("/images/academyBackground.png")',
      }}
    >
      <img src={image} alt="" />
      <div className="details">
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="information">
          <div className="topics">
            {topics?.map((item, key) => (
              <span key={key}>{item}</span>
            ))}
          </div>
          <div className="counts">
            <span>
              <IoTime /> {lessonCount} Saat
            </span>
            <span>
              <BsArrowCounterclockwise />
              {totalHour} Ders
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
