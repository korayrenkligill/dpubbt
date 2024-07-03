import { useNavigate } from "react-router-dom";
import "../../styles/components/Blog/BlogListItem.scss";

type Props = {
  image?: string;
  title?: string;
  categories?: string[];
  date?: string;
  content?: string;
};

const BlogListItem = ({ image, title, categories, date, content }: Props) => {
  const navigation = useNavigate();
  return (
    <div className="blog" onClick={() => navigation("/blog/test")}>
      <div className="image">
        <img className="front" src={image} alt="" />
        <img className="back" src={image} alt="" />
      </div>
      <div className="texts">
        <span>
          {categories?.map((item, key) => {
            if (key !== item.length - 1) return <>{item}, </>;
            else return <>{item}</>;
          })}{" "}
          - {date}
        </span>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogListItem;
