import React from "react";
import Header from "../../components/Header/Header";
import AtomTest from "../../components/AtomTest/AtomTest";
import AtomTest2 from "../../components/AtomTest/AtomTest2";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <main>
      <Header
        message="👋 Topluluğumuza Hoşgeldin!"
        title="Bilgisayar ve Bilişim Topluluğu"
        description="İnovasyon ve Öğrenmeye Adanmış Bir Aile"
        buttonText="İletişime Geç"
        image="https://i.ibb.co/PjxVCTW/main.png"
      />
      Test
    </main>
  );
};

export default MainPage;
