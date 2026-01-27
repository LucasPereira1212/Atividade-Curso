import React from "react";
import { Header } from "./components/header/Header.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { Profile } from "./components/profile/Profile.jsx";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className='app'>
        <Profile
          avatar='https://randomuser.me/api/portraits/women/44.jpg'
          name='Anna Caroline Dias'
          bio=' Desenvolvedora FullStack'
          phone='+5511987654321'
          email='ana.carol.dias@email.com'
          githunUrl='https://github.com'
          linkendinUrl='https://www.linkedin.com/login/pt'
          instagramUrl='https://www.instagram.com'
        />
        <Profile
          avatar='https://randomuser.me/api/portraits/men/32.jpg'
          name='João Paulo Souza'
          bio='Engenheiro Backend'
          phone='+5511987654322'
          email='joao.paulo.souza@email.com'
          githunUrl='https://github.com'
          linkendinUrl='https://www.linkedin.com/login/pt'
          instagramUrl='https://www.instagram.com'
          thema='male'
        />
        <Profile
          avatar='https://randomuser.me/api/portraits/women/55.jpg'
          name='Maria Duarte'
          bio='Designer UI/UX'
          phone='+5511987654323'
          email='maria.duarte@email.com'
          githunUrl='https://github.com'
          linkendinUrl='https://www.linkedin.com/login/pt'
          instagramUrl='https://www.instagram.com'
        />
        <Profile
          avatar='https://randomuser.me/api/portraits/men/65.jpg'
          name='Diego Gonçalves'
          bio='Desenvolvedor FrontEnd'
          phone='+5511987654323'
          email='diego.gonçalves@email.com'
          githunUrl='https://github.com'
          linkendinUrl='https://www.linkedin.com/login/pt'
          instagramUrl='https://www.instagram.com'
          thema='male'
        />
      </div>
      <Footer />
    </div>
  );
}
