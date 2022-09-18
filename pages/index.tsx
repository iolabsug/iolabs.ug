import type { NextPage } from "next";
import Head from "./head/head";
import Image from "next/image";
import Logo from "/public/assets/logo/logo.png";
import Header from "./components/header/header";
import styles from "../styles/Home.module.scss";
import Title from "./components/title/Title";
import Subtitle from "./components/subtitle/Subtitle";

const Home: NextPage = () => {
  return (
    <div>
      <Head />
      <main className={styles.main}>
        <nav className={styles.navigation}>
          <Header />
          <Image className={styles.logo} src={Logo} width={125} height={125} />
        </nav>
      </main>

      <footer className={styles.footer}>
        <Subtitle text="Turn your vision into an idea" />
        <Title text="iolabs.ug" />
        <Subtitle text="with Professional Developers & Designers who will bring it to life." />
      </footer>
    </div>
  );
};

export default Home;
