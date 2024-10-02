import {UserIcon} from "../../../../../../design-system/src";

interface Props {
  username: string;
}

const HeaderAuth = ({ username }: Props) => {
  return (
    <>
      <div className='max-w-page-width-desktop flex gap-7 justify-end items-center w-full'>
        <span className={'text-text-revert'}>
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