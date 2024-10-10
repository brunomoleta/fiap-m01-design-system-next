import Link from "next/link";
import LogoLink from "$/app/components/Header/LogoLink";

const HeaderLinks = () => {
  return (
    <div className={'flex items-center justify-between'}>
      <LogoLink/>
      <nav className={'max-tablet:ml-spacing-xl ml-spacing-lg text-text-active max-tablet:hidden flex gap-spacing-xl max-desktop:gap-spacing-lg'}>
        <Link href={'#'}>Sobre</Link>
        <Link href={'#'}>Serviços</Link>
      </nav>
    </div>
  )
}
export default HeaderLinks;