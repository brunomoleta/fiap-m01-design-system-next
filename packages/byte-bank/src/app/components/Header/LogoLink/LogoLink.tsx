import Link from "next/link";
import {FullLogoIcon, LogoIcon} from "../../../../../../design-system/src";

const LogoLink = () => {
  return (
    <>
      <Link className={'hidden max-tablet:hidden max-desktop:block'} href={'/'}
            aria-label='retornar para página inicial'>
        <LogoIcon width={27} height={27} fill={"text-active"}/>
      </Link>
      <Link className={'block max-tablet:block max-desktop:hidden'} href={'/'}
            aria-label='retornar para página inicial'>
        <FullLogoIcon width={146} height={32} fill={"text-active"}/>
      </Link>
    </>
  )
}
export default LogoLink;