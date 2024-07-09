import { useNavigate } from "react-router-dom";
import "../../styles/components/Blog/BlogListItem.scss";
import { motion } from "framer-motion";

type Props = {
  image?: string;
  title?: string;
  categories?: string[];
  date?: string;
  content?: string;
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const BlogListItem = ({ image, title, categories, date, content }: Props) => {
  const navigation = useNavigate();
  return (
    <motion.div
      className="blog"
      onClick={() => navigation("/blog/test")}
      variants={item}
    >
      <div className="image">
        <img className="front" src={image} alt="" />
        <img className="back" src={image} alt="" />
      </div>
      <div className="texts">
        <span>
          {categories?.map((item, key) => {
            if (key !== categories.length - 1)
              return <span key={key}>{item}, </span>;
            else return <span key={key}>{item}</span>;
          })}{" "}
          - {date}
        </span>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </motion.div>
  );
};

export default BlogListItem;
