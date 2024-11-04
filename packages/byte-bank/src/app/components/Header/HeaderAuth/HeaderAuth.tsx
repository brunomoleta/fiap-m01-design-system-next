import { UserIcon } from "../../../../../../design-system/src";
import { useRouter } from 'next/navigation';
import NavigationMenu from "$/app/components/Header/HeaderAuth/NavigationMenu";

interface Props {
  username: string;
}

const HeaderAuth = ({ username }: Props) => {
  const router = useRouter();

  const handleUserMenuClick = () => {
    router.push('/dashboard/edituser');
  };

  return (
    <>
      <div className='max-tablet:justify-between max-w-page-width-desktop flex gap-7 tablet:justify-end items-center w-full'>
        <NavigationMenu />
        <span className='text-text-revert max-tablet:hidden'>
          {username}
        </span>
        <div aria-label='menu do usuário' onClick={handleUserMenuClick} style={{ cursor: 'pointer' }}>
          <UserIcon height={40} width={40} fill="background-accent" />
        </div>
      </div>
    </>
  );
};

export default HeaderAuth;
