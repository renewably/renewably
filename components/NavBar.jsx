const NavButton = ({ text }) => {
  const onClick = () => { // TODO prop
    alert("THIS IS FAKE SILLY")
  }
  return (
    <button className="nav-button" onClick={onClick}>{text}</button>
  );
};

export const NavBar = (props) => {
  return (
    <ul className="nav-container">
      <li><NavButton text="Incentives" /></li>
      <li><NavButton text="Trusted Affiliates" /></li>
      <li><NavButton text="About Us" /></li>
      <li><NavButton text="Blog" /></li>
      <li><NavButton text="Login" /></li>
    </ul>
  );
};
