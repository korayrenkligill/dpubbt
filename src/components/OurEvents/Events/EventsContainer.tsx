import "../../../styles/pages/Global/OurEvents/EventsContainer.scss";

type Props = { children: any };

const EventsContainer = ({ children }: Props) => {
  return <section className="custom-container events">{children}</section>;
};

export default EventsContainer;
