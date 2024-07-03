import React from "react";
import Header from "../../components/Header/Header";
import EventsContainer from "../../components/OurEvents/Events/EventsContainer";

type Props = {};

const OurEvents = (props: Props) => {
  return (
    <div className="our-events">
      <Header
        message="✨ Birlikte eğlenelim!"
        title="Etkinliklerimiz ve Bilmemne"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
        image="https://img.freepik.com/free-vector/hand-drawn-people-jumping-illustration_23-2149083966.jpg?t=st=1719856686~exp=1719860286~hmac=c526dbe0b927dcf50f05653cf678a6f4a21f58143dd46e809501c96c4e1861e6&w=826"
      />
      <EventsContainer />
    </div>
  );
};

export default OurEvents;
