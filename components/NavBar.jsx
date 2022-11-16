import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/RenewablyLogo.png';
import styles from '../styles/NavBar.module.css';

const NavButton = ({ text, href }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className={styles.navButton}>{text}</a>
    </Link>
  );
};

export const NavBar = (props) => {
  return (
    <ul className={styles.navContainer}>
      <li style={{ cursor: 'pointer' }}>
        <Link href='/'>
          <Image src={logo} height={50} width={100} />
        </Link>
      </li>
      <li>
        <NavButton href='/programs' text='Incentives' />
      </li>
      <li>
        <NavButton href='/' text='Trusted Affiliates' />
      </li>
      <li>
        <NavButton href='/' text='About Us' />
      </li>
      <li>
        <NavButton href='/' text='Blog' />
      </li>
      <li>
        <NavButton href='/' text='Login' />
      </li>
    </ul>
  );
};
