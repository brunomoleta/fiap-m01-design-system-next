import {LogoIcon} from "../../../../../../design-system/src";
import Link from "next/link";

const HeaderLinks = () => {
  return (
    <div>
      <LogoIcon width={27} height={27} fill={"text-active"}/>
      <nav className={'text-text-active'}>
        <Link href={'#'}>Sobre</Link>
        <Link href={'#'}>Serviços</Link>
      </nav>
    </div>
  )
}
export default HeaderLinks