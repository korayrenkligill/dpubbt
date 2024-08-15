import { useRef, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { Drawer } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { TiPlus } from "react-icons/ti";
import { atom, useAtom, useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../..";

import Header from "../../components/Header/Header";
import BlogListItem from "../../components/Blog/BlogListItem";
import useWindowSizes from "../../components/WindowSizes";
import AddBlog from "../../components/Blog/AddBlog";
import AdminTools from "../../components/AdminTools";

import "../../styles/pages/Global/Blogs/Blogs.scss";
import { useTranslation } from "react-i18next";

export const addBlogPageAtom = atom(false);

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

type Props = {};

const Blogs = (props: Props) => {
  const { t } = useTranslation();

  const sidebarRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSizes();
  const navigation = useNavigate();

  const userRole = useAtomValue(userAtom);
  const [addBlogPage, setAddBlogPage] = useAtom<boolean>(addBlogPageAtom);

  const [filterBar, setFilterBar] = useState<boolean>(false);

  const [blogs] = useState([
    {
      image:
        "https://i.pinimg.com/564x/33/2a/41/332a411f1f8e157a95d1ea679a2077a8.jpg",
      categories: ["Category 1", "Category 2"],
      date: "01/01/2024",
      title: "Lorem ipsum dolor sit amet consectetur.",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi in
          libero dolore, pariatur, nostrum suscipit cum mollitia recusandae
          laudantium minus, amet nisi. Corrupti non maiores odit ipsa placeat,
          perferendis excepturi, vitae officia obcaecati modi eveniet, totam
          error repellendus nam iste. Velit quaerat recusandae nam quos quia
          voluptas vitae officiis doloribus.`,
    },
    {
      image:
        "https://i.pinimg.com/564x/33/2a/41/332a411f1f8e157a95d1ea679a2077a8.jpg",
      categories: ["Category 1", "Category 2"],
      date: "01/01/2024",
      title: "Lorem ipsum dolor sit amet consectetur.",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi in
          libero dolore, pariatur, nostrum suscipit cum mollitia recusandae
          laudantium minus, amet nisi. Corrupti non maiores odit ipsa placeat,
          perferendis excepturi, vitae officia obcaecati modi eveniet, totam
          error repellendus nam iste. Velit quaerat recusandae nam quos quia
          voluptas vitae officiis doloribus.`,
    },
  ]);

  const DrawerList = (
    <aside className={filterBar ? "open" : "close"} ref={sidebarRef}>
      {userRole ? (
        <div
          className="add-blog-button"
          onClick={() => {
            setFilterBar(false);
            setAddBlogPage(true);
          }}
        >
          <TiPlus className="icon" />
          <span>Blog yaz</span>
        </div>
      ) : (
        <div className="add-blog-button" onClick={() => navigation("/login")}>
          <TiPlus className="icon" />
          <span>Blog yazmak için giriş yap</span>
        </div>
      )}
      <p className="searchBar">Search</p>
      <div className="categories">
        <h2>Categories</h2>
        <p className="category">Category 1</p>
        <p className="category">Category 2</p>
        <p className="category">Category 3</p>
        <p className="category">Category 4</p>
        <p className="category">Category 5</p>
        <p className="category">Category 6</p>
      </div>
    </aside>
  );

  const toggleDrawer = (newOpen: boolean) => () => {
    setFilterBar(newOpen);
  };

  return (
    <section className="blogs">
      <Header
        message={t("blog.header.message")}
        title={t("blog.header.title")}
        description={t("blog.header.description")}
        image="/images/Header/blog.svg"
      />
      <div className="custom-container content">
        {width < 1025 ? (
          <Drawer open={filterBar} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        ) : (
          <>{DrawerList}</>
        )}
        <motion.main
          className="blogs"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((item, key) => (
            <BlogListItem
              key={key}
              image={item.image}
              categories={item.categories}
              date={item.date}
              title={item.title}
              content={item.content}
            />
          ))}
        </motion.main>
      </div>
      <button className="filterbar-button" onClick={toggleDrawer(!filterBar)}>
        <FaFilter />
      </button>
      <AnimatePresence>{addBlogPage && <AddBlog />}</AnimatePresence>
      <AdminTools pageName="blog" />
    </section>
  );
};

export default Blogs;
