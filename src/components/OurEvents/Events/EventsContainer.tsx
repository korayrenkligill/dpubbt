import "../../../styles/pages/Global/OurEvents/EventsContainer.scss";
import Event from "./Event";

type Props = {};

const EventsContainer = (props: Props) => {
  return (
    <section className="custom-container events">
      <Event
        title="Game Jam 2024"
        date="26/01/2024"
        emoji="🎮"
        backgroundColor="#a4aeeb"
        status="cancelled"
      />
      <Event
        title="Hackathon 2024"
        date="26/01/2024"
        emoji="💻"
        backgroundColor="#26aeff"
        status="waiting"
      />
      <Event
        title="Game Jam 2023"
        date="26/01/2023"
        emoji="🙀"
        backgroundColor="#fcd53f"
        status="completed"
      />
    </section>
  );
};

export default EventsContainer;
