// import Header from "../../components/Header/Header";
import EventsContainer from "../../components/OurEvents/Events/EventsContainer";
import Event from "../../components/OurEvents/Events/Event";
import AdminTools from "../../components/AdminTools";
import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import HeaderLoader from "../../components/Header/HeaderLoader";
import Header from "../../components/Header/Header";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
          message={t("events.header.message")}
          title={t("events.header.title")}
          description={t("events.header.description")}
          image="/images/Header/etkinlik.svg"
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
              date="11/10/2024"
              emoji="🎮"
              backgroundColor="#a4aeeb"
              status="waiting"
              url="https://gamejam2024.dpubbt.com/"
            />
            <Event
              title="Hackathon 2023"
              date="03/05/2023"
              emoji="💻"
              backgroundColor="#BAE1FF"
              status="completed"
            />
            <Event
              title="Code & Design 2"
              date="02/03/2024"
              emoji="🎨"
              backgroundColor="#F1E1D6"
              status="completed"
            />
            <Event
              title="Code & Design 1"
              date="04/11/2024"
              emoji="🎨"
              backgroundColor="#F1E1D6"
              status="completed"
            />
            <Event
              title="Game Jam 2023"
              date="06/10/2024"
              emoji="🎮"
              backgroundColor="#a4aeeb"
              status="completed"
            />
            <Event
              title="Game Jam 2022"
              date="13/05/2023"
              emoji="🎮"
              backgroundColor="#a4aeeb"
              status="completed"
            />
            <Event
              title="Bilişim ve Değişen Dünya"
              date="26/01/2021"
              emoji="🙀"
              backgroundColor="#fcd53f"
              status="completed"
            />
          </>
        )}
      </EventsContainer>
      <AdminTools pageName="events" />
    </motion.div>
  );
};

export default OurEvents;
