import { useNavigate } from "react-router-dom";
import "../../../styles/pages/Global/OurEvents/Events.scss";

type Props = {
  title?: string;
  date?: string;
  emoji?: string;
  backgroundColor?: string;
  status?: "completed" | "waiting" | "cancelled";
  url: string;
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
    <div
      className="event"
      style={{
        backgroundColor: backgroundColor,
      }}
      onClick={() => navigation(`/${url}`)}
    >
      <div className="status">
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
                ? "rgb(72, 255, 0)"
                : status === "waiting"
                ? "rgb(255, 217, 0)"
                : "rgb(197, 0, 0)",
          }}
        ></div>
      </div>
      <div className="texts">
        <h1>{title}</h1>
        <span>{date}</span>
      </div>
      <i className="background-text">{backgroundText(title ?? "")}</i>
      <div className="emoji">{emoji}</div>
    </div>
  );
};

export default Event;
