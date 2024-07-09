import AdminTools from "../../components/AdminTools";
import Lesson from "../../components/BbtAcademy/Lesson";
import Header from "../../components/Header/Header";

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
        <Lesson
          image="https://i.ibb.co/f2FvnwL/lesson.png"
          title="Full-stack Web Dersleri"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem totam asperiores, quod quisquam"
          topics={["Konu 1", "Konu 2", "Konu 3"]}
          totalHour={60}
          lessonCount={10}
        />
      </main>
      <AdminTools pageName="academy" />
    </div>
  );
};

export default BbtAcademy;
