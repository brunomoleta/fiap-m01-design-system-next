import {UserIcon} from "../../../../../../design-system/src";
import NavigationMenu from "$/app/components/Header/HeaderAuth/NavigationMenu";

interface Props {
  username: string;
}

const HeaderAuth = ({username}: Props) => {
  return (
    <>
      <div
        className='max-tablet:justify-between max-w-page-width-desktop flex gap-7 tablet:justify-end items-center w-full'>
        <NavigationMenu/>
        <span className={'text-text-revert max-tablet:hidden'}>
          {username}
        </span>
        <div aria-label='menu do usuário'>
          <UserIcon height={40} width={40} fill="background-accent"/>
        </div>
      </div>
    </>
  )
}

export default HeaderAuth;