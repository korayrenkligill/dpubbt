import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "../../../styles/pages/Global/OurEvents/Events.scss";

type Props = {
  title?: string;
  date?: string;
  emoji?: string;
  backgroundColor?: string;
  status?: "completed" | "waiting" | "cancelled";
  url?: string;
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Event = ({ title, date, emoji, backgroundColor, status, url }: Props) => {
  const navigation = useNavigate();

  const backgroundText = (text: string) => {
    const formattedText = text.replace(/\s+/g, "").toUpperCase();
    const spacedText = formattedText.split("").join(" ");
    const result = new Array(20).fill(spacedText).join("\n");

    return result;
  };
  return (
    <motion.div
      className="event"
      style={{
        backgroundColor: backgroundColor,
      }}
      onClick={() => {
        if (!url) alert("bu etkinliğe ait aktif bir sayfa bulunmamakta");
        else if (url.includes("http")) window.open(url, "_blank");
        else navigation(`/${url}`);
      }}
      variants={item}
    >
      <div
        className="status"
        style={{
          color:
            status === "completed"
              ? "var(--onSuccess)"
              : status === "waiting"
              ? "var(--onWarn)"
              : "var(--onError)",
        }}
      >
        <p>
          {status === "completed"
            ? "Tamamlandı"
            : status === "waiting"
            ? "Bekleniyor"
            : "İptal"}
        </p>
        <div
          className="notification"
          style={{
            backgroundColor:
              status === "completed"
                ? "var(--success)"
                : status === "waiting"
                ? "var(--warn)"
                : "var(--error)",
          }}
        ></div>
      </div>
      <div className="texts">
        <h1>{title}</h1>
        <span>{date}</span>
      </div>
      <i className="background-text">{backgroundText(title ?? "")}</i>
      <div className="emoji">{emoji}</div>
    </motion.div>
  );
};

export default Event;
