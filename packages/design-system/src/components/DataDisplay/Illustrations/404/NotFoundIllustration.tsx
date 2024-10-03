import Desktop from "../../../../assets/404/404-desktop.svg";
import Mobile from "../../../../assets/404/404-mobile.svg";
import Image from "next/image";

/** Ilustração renderizada quando a url não foi encontrada. */
const NotFoundIllustration = () => {
  return (
    <>
      <Image className={'hidden max-tablet:block'} src={Mobile} alt={''}></Image>
      <Image className={'max-tablet:hidden'} src={Desktop} alt={''}></Image>
    </>
  )
}

export default NotFoundIllustration;