import Logo from "./logo";
import Nav from "./nav";
const Header = () => {
  return (
    <header className="bg-background/60 backdrop-blur-md fixed top-0 z-20 mx-auto flex flex-wrap w-full items-center justify-between border-b border-gray-500 px-8 py-2">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
