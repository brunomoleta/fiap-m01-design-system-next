import HeaderLinks from "$/app/components/Header/HeaderLinks";
import HeaderBtns from "$/app/components/Header/HeaderBtns";
import {HamburgerIcon} from "../../../../../../design-system/src";

const NotLoggedHeader = () => {
  return (
    <>
      <div className='max-w-page-width-desktop flex justify-between items-center w-full max-tablet:px-spacing-lg px-spacing-xl'>
        <div className={'w-full flex justify-between'}>
          <div aria-label={'menu de opções'} className={'hidden max-tablet:block'}>
            <HamburgerIcon width={32} height={32} fill={'text-active'}/>
          </div>
          <HeaderLinks/>
          <HeaderBtns/>
        </div>
      </div>
    </>
  )
}

export default NotLoggedHeader;