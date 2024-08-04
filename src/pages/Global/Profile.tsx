import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaMedium,
} from "react-icons/fa6";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import BlogListItem from "../../components/Blog/BlogListItem";
import { motion } from "framer-motion";

import "../../styles/pages/Global/Profile/Profile.scss";

type Props = {};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const Profile = (props: Props) => {
  const { id } = useParams();
  const [tab, setTab] = useState(0);

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

  return (
    <div className={`profile-page ${true && "myProfile"}`}>
      <div className="profile-informations-container">
        <div className="profile-informations custom-container">
          <UserAvatar
            name="John"
            surname="Doe"
            imageUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            width={70}
            height={70}
          />
          <div className="user-informations">
            <h1>John Doe</h1>
            <span>Software Engineer</span>
          </div>
          <div className="social-medias">
            <div className="social-media">
              <AiFillInstagram />
            </div>
            <div className="social-media">
              <FaXTwitter />
            </div>
            <div className="social-media">
              <FaYoutube />
            </div>
            <div className="social-media">
              <FaFacebookF />
            </div>
            <div className="social-media">
              <FaMedium />
            </div>
            <div className="social-media">
              <FaLinkedinIn />
            </div>
            <div className="social-media">
              <FaGithub />
            </div>
          </div>
        </div>
        <div className="background-text">DPUBBT</div>
      </div>
      <div className="custom-container">
        <div className="profile-tabs">
          <div
            className={`tab-button ${tab === 0 && "active"}`}
            onClick={() => setTab(0)}
          >
            Blogs
          </div>
          <div
            className={`tab-button ${tab === 1 && "active"}`}
            onClick={() => setTab(1)}
          >
            Messages
          </div>
          <div
            className={`tab-button ${tab === 2 && "active"}`}
            onClick={() => setTab(2)}
          >
            Edit Profile
          </div>
        </div>
        {tab === 0 && (
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
        )}
        {tab === 1 && (
          <motion.div
            className="messages"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item} className="message">
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                eveniet expedita. Delectus velit incidunt recusandae quisquam
                officiis, non, distinctio, exercitationem veniam laudantium ab
                voluptatibus fugiat molestiae molestias consequuntur dolore
                nostrum!
              </div>
              <div className="message-footer">
                <div
                  className="message-status"
                  style={{
                    backgroundColor: "var(--success)",
                  }}
                >
                  Çözüldü
                </div>
                <div className="message-date">01/01/2024</div>
              </div>
              <div className="message-answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, molestias.
              </div>
            </motion.div>
            <motion.div variants={item} className="message">
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                eveniet expedita. Delectus velit incidunt recusandae quisquam
                officiis, non, distinctio, exercitationem veniam laudantium ab
                voluptatibus fugiat molestiae molestias consequuntur dolore
                nostrum!
              </div>
              <div className="message-footer">
                <div
                  className="message-status"
                  style={{
                    backgroundColor: "var(--warn)",
                  }}
                >
                  Cevap Bekleniyor
                </div>
                <div className="message-date">01/01/2024</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Profile;
