import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import "../../styles/pages/Global/Blogs/Blogs.scss";
import { FaFilter } from "react-icons/fa6";

type Props = {};

const Blogs = (props: Props) => {
  const [filterBar, setFilterBar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const filterBarChange = useCallback(() => {
    setFilterBar(!filterBar);
  }, [filterBar]);

  return (
    <section className="blogs">
      <Header
        message="💭 Bahsetmek istediğimiz konular!"
        title="Blog yazıları"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
        buttonText="İletişime Geç"
        image="https://img.freepik.com/premium-vector/laptop-coffee-with-mail-notification-love-sign_76326-32.jpg?w=826"
      />
      <div className="custom-container content">
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
        <main className="blogs">
          <div className="blog">
            <div className="image">
              <img
                className="front"
                src="https://i.pinimg.com/564x/33/2a/41/332a411f1f8e157a95d1ea679a2077a8.jpg"
                alt=""
              />
              <img
                className="back"
                src="https://i.pinimg.com/564x/33/2a/41/332a411f1f8e157a95d1ea679a2077a8.jpg"
                alt=""
              />
            </div>
            <div className="texts">
              <span>Category 1, Category2 - 01/01/2024</span>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi in libero dolore, pariatur, nostrum suscipit cum
                mollitia recusandae laudantium minus, amet nisi. Corrupti non
                maiores odit ipsa placeat, perferendis excepturi, vitae officia
                obcaecati modi eveniet, totam error repellendus nam iste. Velit
                quaerat recusandae nam quos quia voluptas vitae officiis
                doloribus.
              </p>
            </div>
          </div>
          <div className="blog">
            <div className="image">
              <img
                className="front"
                src="https://i.pinimg.com/564x/c1/02/05/c10205b40af9e555df9e995816dd2e11.jpg"
                alt=""
              />
              <img
                className="back"
                src="https://i.pinimg.com/564x/c1/02/05/c10205b40af9e555df9e995816dd2e11.jpg"
                alt=""
              />
            </div>
            <div className="texts">
              <span>Category 1, Category2 - 01/01/2024</span>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi in libero dolore, pariatur, nostrum suscipit cum
                mollitia recusandae laudantium minus, amet nisi. Corrupti non
                maiores odit ipsa placeat, perferendis excepturi, vitae officia
                obcaecati modi eveniet, totam error repellendus nam iste. Velit
                quaerat recusandae nam quos quia voluptas vitae officiis
                doloribus.
              </p>
            </div>
          </div>
        </main>
      </div>
      <button className="filterbar-button" onClick={filterBarChange}>
        <FaFilter />
      </button>
    </section>
  );
};

export default Blogs;
