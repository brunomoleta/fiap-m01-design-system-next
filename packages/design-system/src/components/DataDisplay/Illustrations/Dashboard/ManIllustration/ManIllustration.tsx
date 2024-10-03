import Desktop from "../../../../../assets/dashboard/man-coin-desktop.svg";
import Mobile from "../../../../../assets/dashboard/man-coin-mobile.svg";
import Image from "next/image";

const ManIllustration = () => {
  return (
    <>
      <Image className={'hidden max-tablet:block'} src={Mobile} alt={''}></Image>
      <Image className={'max-tablet:hidden'} src={Desktop} alt={''}></Image>
    </>
  )
}

export default ManIllustration;