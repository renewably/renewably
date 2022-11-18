import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ProudPerson from '../public/images/ProudPerson.png';
import Housie from '../public/images/housie.png';
import Solar from '../public/images/Solar.png';
import { ActionButton } from '../components/actionButton/ActionButton';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Renewably!</h1>
        <div>
          <h3>Let us simplify renewable energy for your home.</h3>
          <div>
            <Image src={ProudPerson} height={200} width={200} />
            <Image src={Housie} height={200} width={200} />
            <Image src={Solar} height={200} width={200} />
          </div>
          <ActionButton>Find Incentives</ActionButton>
        </div>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Home;
