import { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import "../../styles/pages/Global/Blogs/Blogs.scss";
import { FaFilter } from "react-icons/fa6";
import BlogListItem from "../../components/Blog/BlogListItem";
import { Drawer } from "@mui/material";
import useWindowSizes from "../../components/WindowSizes";

type Props = {};

const Blogs = (props: Props) => {
  const [filterBar, setFilterBar] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSizes();

  const DrawerList = (
    <aside className={filterBar ? "open" : "close"} ref={sidebarRef}>
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
    console.log(newOpen);
    setFilterBar(newOpen);
  };

  return (
    <section className="blogs">
      <Header
        message="💭 Bahsetmek istediğimiz konular!"
        title="Blog yazıları"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
        image="https://img.freepik.com/premium-vector/laptop-coffee-with-mail-notification-love-sign_76326-32.jpg?w=826"
      />
      <div className="custom-container content">
        {width < 1025 ? (
          <Drawer open={filterBar} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        ) : (
          <>{DrawerList}</>
        )}
        <main className="blogs">
          <BlogListItem
            image="https://i.pinimg.com/564x/33/2a/41/332a411f1f8e157a95d1ea679a2077a8.jpg"
            categories={["Category 1", "Category 2"]}
            date="01/01/2024"
            title="Lorem ipsum dolor sit amet consectetur."
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi in
          libero dolore, pariatur, nostrum suscipit cum mollitia recusandae
          laudantium minus, amet nisi. Corrupti non maiores odit ipsa placeat,
          perferendis excepturi, vitae officia obcaecati modi eveniet, totam
          error repellendus nam iste. Velit quaerat recusandae nam quos quia
          voluptas vitae officiis doloribus."
          />
        </main>
      </div>
      <button className="filterbar-button" onClick={toggleDrawer(!filterBar)}>
        <FaFilter />
      </button>
    </section>
  );
};

export default Blogs;
