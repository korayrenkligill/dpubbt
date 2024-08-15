import { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import { useTranslation } from "react-i18next";
import { TiPlus } from "react-icons/ti";
import useWindowSizes from "../../components/WindowSizes";
import { useNavigate } from "react-router-dom";
import { atom, useAtom, useAtomValue } from "jotai";
import { userAtom } from "../..";
import { Drawer } from "@mui/material";
import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa6";

import "../../styles/pages/Global/Projects/Projects.scss";
import ProjectListItem from "../../components/Projects/ProjectListItem";

export const addProjectPageAtom = atom(false);
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

const Projects = (props: Props) => {
  const { t } = useTranslation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSizes();
  const navigation = useNavigate();

  const userRole = useAtomValue(userAtom);
  const [addBlogPage, setAddBlogPage] = useAtom<boolean>(addProjectPageAtom);

  const [filterBar, setFilterBar] = useState<boolean>(false);

  const [projects] = useState([
    {
      category: "Web Geliştirme",
    },
    {
      category: "Yapay Zeka ve Makine Öğrenimi",
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
        <div
          className="add-project-button"
          onClick={() => navigation("/login")}
        >
          <TiPlus className="icon" />
          <span>Proje eklemek için giriş yap</span>
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
      <div className="technologies">
        <h2>Technologies</h2>
        <p className="technology">C</p>
        <p className="technology">C++</p>
        <p className="technology">C#</p>
        <p className="technology">JS</p>
        <p className="technology">React</p>
        <p className="technology">Python</p>
      </div>
      {/* <div className="hasBadge">
        <p>Rozet</p>
        <p>Hayır</p>
      </div> */}
    </aside>
  );

  const toggleDrawer = (newOpen: boolean) => () => {
    setFilterBar(newOpen);
  };

  return (
    <section className="projects-page">
      <Header
        message={t("projects.header.message")}
        title={t("projects.header.title")}
        description={t("projects.header.description")}
        image="https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_23-2149167947.jpg?t=st=1719887895~exp=1719891495~hmac=713db1698de4a9e5f1f67b79abce0cf07f6193791b2e0d1ea8a9ad61aa2bd98c&w=1380"
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
          className="projects"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {projects.map((item, key) => (
            <ProjectListItem category={item.category} />
          ))}
        </motion.main>
      </div>
      <button className="filterbar-button" onClick={toggleDrawer(!filterBar)}>
        <FaFilter />
      </button>
    </section>
  );
};

export default Projects;
