import React from "react";
import Header from "../../components/Header/Header";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div>
      <Header
        message="🥸 Dile benden ne dilersen!"
        title="BBT Hakkında"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
        buttonText="İletişime Geç"
        image="https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_23-2149167947.jpg?t=st=1719887895~exp=1719891495~hmac=713db1698de4a9e5f1f67b79abce0cf07f6193791b2e0d1ea8a9ad61aa2bd98c&w=1380"
      />
    </div>
  );
};

export default AboutUs;
