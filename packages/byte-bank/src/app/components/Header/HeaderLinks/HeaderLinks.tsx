import {FullLogoIcon} from "../../../../../../design-system/src";
import Link from "next/link";

const HeaderLinks = () => {
  return (
    <div>
      <Link href={'/'} aria-label='retornar para página inicial'>
        <FullLogoIcon width={146} height={32} fill={"text-active"}/>
      </Link>
      <nav className={'text-text-active'}>
        <Link href={'#'}>Sobre</Link>
        <Link href={'#'}>Serviços</Link>
      </nav>
    </div>
  )
}
export default HeaderLinks