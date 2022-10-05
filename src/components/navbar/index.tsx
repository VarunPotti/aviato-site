import Logo from "../../assets/logo.svg";
import Profile from "./profile";
import Search from "./search";
const Navbar = () => {
  return (
    <nav className="h-24 flex items-center justify-between px-[60px] border-b border-b-gray">
      <img src={Logo} className="select-none" />
      <Search />
      <Profile />
    </nav>
  );
};

export default Navbar;
