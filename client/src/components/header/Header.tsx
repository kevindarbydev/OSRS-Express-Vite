import Logo from './logo';
import NavItems from './navItems';

const Header = () => {
  return (
    <div style={{ backgroundColor: "rgba(51, 51, 51, 0.4)" }}>
      <nav className="flex flex-row items-center justify-between flex-1">
        <a href="/">
          
            <Logo />
         
        </a>
        <div className="flex-auto flex flex-row justify-center my-4">
          <NavItems />
        </div>
      </nav>
    </div>
  );
};

export default Header;
