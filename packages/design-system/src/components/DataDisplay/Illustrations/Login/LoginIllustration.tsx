import Desktop from "../../../../assets/login/IlustraçãoLogin-desktop.svg";
import Mobile from "../../../../assets/login/IlustracaoLogin-mobile.svg";
import Image from "next/image";

const HomeIllustration = () => {
  return (
    <>
      <Image className={'hidden max-tablet:block'} src={Mobile} alt={''}></Image>
      <Image className={'max-tablet:hidden'} src={Desktop} alt={''}></Image>
    </>)
}

export default HomeIllustration;