import Desktop from "../../../../../assets/dashboard/woman-card.svg";
import Mobile from "../../../../../assets/dashboard/woman-card-mobile.svg";
import Image from "next/image";

const WomanIllustration = () => {
  return (
    <>
      <Image className={'hidden max-tablet:block'} src={Mobile} alt={''}></Image>
      <Image className={'max-tablet:hidden'} src={Desktop} alt={''}></Image>
    </>
  )
}

export default WomanIllustration;