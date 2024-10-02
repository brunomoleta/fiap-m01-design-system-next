import HeaderLinks from "$/app/components/Header/HeaderLinks";
import HeaderBtns from "$/app/components/Header/HeaderBtns";
import HeaderAuth from "$/app/components/Header/HeaderAuth/HeaderAuth";


const Header = ({isLoggedIn}: { isLoggedIn: boolean }) => {
  return (
    <header className=" min-h-24 bg-text-default m-auto w-full flex place-content-center">
      {isLoggedIn ?
        <div className='max-w-page-width-desktop flex justify-between items-center w-full'>
          <HeaderLinks/>
          <HeaderBtns/>
        </div>
        :
        <HeaderAuth username={'#nome-do-usuário'}/>
      }

    </header>
  )
};

export default Header;