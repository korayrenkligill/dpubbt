import {
  FaLaptopCode,
  FaMobileAlt,
  FaGamepad,
  FaDesktop,
  FaPlug,
  FaDatabase,
  FaChartLine,
  FaBrain,
  FaCloud,
  FaShieldAlt,
  FaEllipsisH,
} from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import "../../styles/pages/Global/Projects/ProjectListItem.scss";

const GetCategory = (categoryName: string) => {
  switch (categoryName) {
    case "Web Geliştirme":
      return { icon: <FaLaptopCode />, color: "#B3E5FC" }; // Pastel Mavi
    case "Mobil Uygulama Geliştirme":
      return { icon: <FaMobileAlt />, color: "#C5CAE9" }; // Pastel Mor
    case "Oyun Geliştirme":
      return { icon: <FaGamepad />, color: "#FFAB91" }; // Pastel Turuncu
    case "Masaüstü Uygulama Geliştirme":
      return { icon: <FaDesktop />, color: "#FFE082" }; // Pastel Sarı
    case "API Geliştirme":
      return { icon: <FaPlug />, color: "#D1C4E9" }; // Pastel Lavanta
    case "Veritabanı Yönetimi":
      return { icon: <FaDatabase />, color: "#B39DDB" }; // Pastel Mor
    case "Veri Bilimi ve Analitiği":
      return { icon: <FaChartLine />, color: "#80DEEA" }; // Pastel Turkuaz
    case "Yapay Zeka ve Makine Öğrenimi":
      return { icon: <FaBrain />, color: "#F48FB1" }; // Pastel Pembe
    case "Bulut Bilişim ve Dağıtık Sistemler":
      return { icon: <FaCloud />, color: "#B0BEC5" }; // Pastel Gri-Mavi
    case "Güvenlik ve Siber Güvenlik":
      return { icon: <FaShieldAlt />, color: "#FFCC80" }; // Pastel Turuncu
    default:
      return { icon: <FaEllipsisH />, color: "#E0E0E0" }; // Varsayılan Pastel Beyaz
  }
};

type Props = {
  category: string;
};

const ProjectListItem = ({ category }: Props) => {
  const { icon, color } = GetCategory(category);
  return (
    <div className="project-list-item">
      <img
        src="https://cdn.logojoy.com/wp-content/uploads/20230323171412/How-to-design-a-website-guide-with-examples.jpg"
        alt="project image"
        className="project-image"
      />
      <div className="project-texts">
        <div className="project-information">
          <div className="project-details">
            <p className="project-category" style={{ color: color }}>
              <span className="project-category-icon">{icon}</span>
              {category}
            </p>
            <p className="project-date">00:00 - 01/01/2024</p>
          </div>
          <h2 className="project-title">Lorem, ipsum dolor.</h2>
          <p className="project-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            vel est quasi dolorem asperiores a atque odio sint. Cupiditate,
            asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Excepturi vel est quasi dolorem asperiores a atque odio sint.
            Cupiditate, asperiores. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi vel est quasi dolorem asperiores a atque
            odio sint. Cupiditate, asperiores. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Excepturi vel est quasi dolorem
            asperiores a atque odio sint. Cupiditate, asperiores. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Excepturi vel est quasi
            dolorem asperiores a atque odio sint. Cupiditate, asperiores. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel est
            quasi dolorem asperiores a atque odio sint. Cupiditate, asperiores.
          </p>
        </div>
        <div className="project-extra">
          <div className="project-tech">
            <span className="custom-chip">React</span>
            <span className="custom-chip">JavaScript</span>
            <span className="custom-chip">CSS</span>
            <span className="custom-chip">HTML</span>
          </div>
          <button className="project-download">
            <MdOutlineFileDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectListItem;
