import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/RenewablyLogo.png";
import styles from "../styles/Home.module.css";

const NavButton = ({ text }) => {
  const onClick = () => {
    // TODO prop
    alert("THIS IS FAKE SILLY");
  };
  return (
    <button className={styles.navButton} onClick={onClick}>
      {text}
    </button>
  );
};

export const NavBar = (props) => {
  return (
    <ul className="navContainer">
      <li>
        <Link href="/">
          <Image src={logo} height={50} width={100} />
        </Link>
      </li>
      <li>
        <Link href="/programs">
          <a className={styles.navButton}>Incentives</a>
        </Link>
      </li>
      <li>
        <NavButton text="Trusted Affiliates" />
      </li>
      <li>
        <NavButton text="About Us" />
      </li>
      <li>
        <NavButton text="Blog" />
      </li>
      <li>
        <NavButton text="Login" />
      </li>
    </ul>
  );
};
