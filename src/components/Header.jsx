import headerBg from "../assets/images/bg-header-desktop.svg";

function Header() {
  return (
    <div className="w-100 header-bg">
      <img src={headerBg} className="w-100" />
    </div>
  );
}

export default Header;
