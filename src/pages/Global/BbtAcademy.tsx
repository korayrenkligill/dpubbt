import Header from "../../components/Header/Header";
import { IoTime } from "react-icons/io5";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

import "../../styles/pages/Global/BbtAcademy/BbtAcademy.scss";

type Props = {};

const BbtAcademy = (props: Props) => {
  return (
    <div className="bbt-academy">
      <Header
        message="🎓 Sizin için hazırladıklarımız"
        title="BBT Akademi"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
        image="https://img.freepik.com/free-vector/gradient-poetry-illustration_52683-81904.jpg?t=st=1720028604~exp=1720032204~hmac=2bd0439b05ef5186d026dbf0b839e5174ac3baa5eb0b894a90bceddfeba87418&w=1380"
      />
      <main className="lessons custom-container">
        <div className="lesson">
          <img
            src="https://img.freepik.com/free-photo/young-student-learning-library_23-2149215397.jpg?t=st=1720029625~exp=1720033225~hmac=f24527f32f3b5c65303c451dd1bc80c861264a813f9a1cb8edbe6da29c54448a&w=1380"
            alt=""
          />
          <div className="details">
            <div className="title-desc">
              <h1>Full-stack Web Dersleri</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem totam asperiores, quod quisquam ut molestiae ea
                iste voluptatem corporis, aperiam explicabo sint impedit quas
                nam quo nisi maxime natus ullam ratione. Amet culpa voluptatem
                ab? Repellat, velit iste, expedita tenetur quisquam maxime
                numquam eaque laborum, commodi sed libero placeat quod alias
                explicabo.
              </p>
              <div className="topics">
                <span>Konu 1</span>
                <span>Konu 2</span>
                <span>Konu 3</span>
              </div>
            </div>
            <div className="bottom">
              <div>
                <span>
                  <IoTime /> 10 Saat
                </span>
                <span>
                  <BsArrowCounterclockwise />
                  10 Ders
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
        <div className="lesson">
          <img
            src="https://img.freepik.com/free-photo/young-student-learning-library_23-2149215397.jpg?t=st=1720029625~exp=1720033225~hmac=f24527f32f3b5c65303c451dd1bc80c861264a813f9a1cb8edbe6da29c54448a&w=1380"
            alt=""
          />
          <div className="details">
            <div className="title-desc">
              <h1>Full-stack Web Dersleri</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem totam asperiores, quod quisquam ut molestiae ea
                iste voluptatem corporis, aperiam explicabo sint impedit quas
                nam quo nisi maxime natus ullam ratione. Amet culpa voluptatem
                ab? Repellat, velit iste, expedita tenetur quisquam maxime
                numquam eaque laborum, commodi sed libero placeat quod alias
                explicabo.
              </p>
              <div className="topics">
                <span>Konu 1</span>
                <span>Konu 2</span>
                <span>Konu 3</span>
              </div>
            </div>
            <div className="bottom">
              <div>
                <span>
                  <IoTime /> 10 Saat
                </span>
                <span>
                  <BsArrowCounterclockwise />
                  10 Ders
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
        <div className="lesson">
          <img
            src="https://img.freepik.com/free-photo/young-student-learning-library_23-2149215397.jpg?t=st=1720029625~exp=1720033225~hmac=f24527f32f3b5c65303c451dd1bc80c861264a813f9a1cb8edbe6da29c54448a&w=1380"
            alt=""
          />
          <div className="details">
            <div className="title-desc">
              <h1>Full-stack Web Dersleri</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem totam asperiores, quod quisquam ut molestiae ea
                iste voluptatem corporis, aperiam explicabo sint impedit quas
                nam quo nisi maxime natus ullam ratione. Amet culpa voluptatem
                ab? Repellat, velit iste, expedita tenetur quisquam maxime
                numquam eaque laborum, commodi sed libero placeat quod alias
                explicabo.
              </p>
              <div className="topics">
                <span>Konu 1</span>
                <span>Konu 2</span>
                <span>Konu 3</span>
              </div>
            </div>
            <div className="bottom">
              <div>
                <span>
                  <IoTime /> 10 Saat
                </span>
                <span>
                  <BsArrowCounterclockwise />
                  10 Ders
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
      </main>
    </div>
  );
};

export default BbtAcademy;
