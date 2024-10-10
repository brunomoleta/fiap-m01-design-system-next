import HeaderAuth from "$/app/components/Header/HeaderAuth/HeaderAuth";
import NotLoggedHeader from "$/app/components/Header/NotLoggedHeader/NotLoggedHeader";

const Header = ({isLoggedIn}: { isLoggedIn: boolean }) => {
  return (
    <header className=" min-h-24 bg-text-default m-auto w-full flex place-content-center">
      {!isLoggedIn ?
        <NotLoggedHeader/>
        :
        <HeaderAuth username={'#nome-do-usuário'}/>
      }

    </header>
  )
};

export default Header;