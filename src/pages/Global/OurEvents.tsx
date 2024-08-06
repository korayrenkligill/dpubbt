import Header from "../../components/Header/Header";
import EventsContainer from "../../components/OurEvents/Events/EventsContainer";
import Event from "../../components/OurEvents/Events/Event";
import AdminTools from "../../components/AdminTools";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import HeaderLoader from "../../components/Header/HeaderLoader";

type Props = {};

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const OurEvents = (props: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <motion.div
      className="our-events"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {loading ? (
        <HeaderLoader />
      ) : (
        <Header
          message="✨ Birlikte eğlenelim!"
          title="Etkinliklerimiz ve Bilmemne"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
          image="https://img.freepik.com/free-vector/hand-drawn-people-jumping-illustration_23-2149083966.jpg?t=st=1719856686~exp=1719860286~hmac=c526dbe0b927dcf50f05653cf678a6f4a21f58143dd46e809501c96c4e1861e6&w=826"
        />
      )}
      <EventsContainer>
        {loading ? (
          <>
            <Skeleton variant="rounded" height={200} />
            <Skeleton variant="rounded" height={200} />
            <Skeleton variant="rounded" height={200} />
            <Skeleton variant="rounded" height={200} />
          </>
        ) : (
          <>
            <Event
              title="Game Jam 2024"
              date="26/01/2024"
              emoji="🎮"
              backgroundColor="#a4aeeb"
              status="cancelled"
              url="event"
            />
            <Event
              title="Hackathon 2024"
              date="26/01/2024"
              emoji="💻"
              backgroundColor="#26aeff"
              status="waiting"
              url="event"
            />
            <Event
              title="Game Jam 2023"
              date="26/01/2023"
              emoji="🙀"
              backgroundColor="#fcd53f"
              status="completed"
              url="event"
            />
          </>
        )}
      </EventsContainer>
      <AdminTools pageName="events" />
    </motion.div>
  );
};

export default OurEvents;
