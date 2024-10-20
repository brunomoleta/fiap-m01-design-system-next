import HeaderAuth from "$/app/components/Header/HeaderAuth/HeaderAuth";
import NotLoggedHeader from "$/app/components/Header/NotLoggedHeader/NotLoggedHeader";

const Header = ({isLoggedIn}: { isLoggedIn: boolean }) => {
  return (
    <>
      <header
        className={`px-spacing-lg min-h-24 m-auto w-full flex place-content-center ${isLoggedIn ? 'bg-background-default' : 'bg-black'}`}
      >
        {isLoggedIn ? <HeaderAuth username={'#nome-do-usuário'}/> : <NotLoggedHeader/>}
      </header>
    </>
  )
};

export default Header;