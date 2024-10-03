import Desktop from "../../../../assets/home/Home-desktop.svg";
import Mobile from "../../../../assets/home/Ilustração Banner-mobile.svg";
import Tablet from "../../../../assets/home/Ilustração-Banner-tablet.svg";
import Image from "next/image";

/** Ilustração renderizada quando a url não foi encontrada. */
const HomeIllustration = () => {
  return (
    <>
      <Image className={'hidden max-tablet:block'} src={Mobile} alt={''}></Image>
      <Image className={'hidden max-desktop:block max-tablet:hidden'} src={Tablet} alt={''}></Image>
      <Image className={'block max-desktop:hidden max-tablet:hidden'} src={Desktop} alt={''}></Image>
    </>)
}

export default HomeIllustration;