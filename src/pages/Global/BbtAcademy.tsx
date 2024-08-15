import { useTranslation } from "react-i18next";
import AdminTools from "../../components/AdminTools";
import Lesson from "../../components/BbtAcademy/Lesson";
import Header from "../../components/Header/Header";

import "../../styles/pages/Global/BbtAcademy/BbtAcademy.scss";

type Props = {};

const BbtAcademy = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className="bbt-academy">
      <Header
        message={t("academy.header.message")}
        title={t("academy.header.title")}
        description={t("academy.header.description")}
        image="/images/Header/akademi.svg"
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
