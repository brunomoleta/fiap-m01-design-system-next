import Desktop from "../../../../assets/editAccount/EditAccount.svg";
import Mobile from "../../../../assets/editAccount/EditAccount-mobile.svg";
import Tablet from "../../../../assets/editAccount/EditAccount-tablet.svg";
import Image from "next/image";

/** Ilustração renderizada quando a url não foi encontrada. */
const EditAccountIllustration = () => {
  return (
    <>
      <Image className={'hidden max-tablet:block'} src={Mobile} alt={''}></Image>
      <Image className={'hidden max-desktop:block max-tablet:hidden'} src={Tablet} alt={''}></Image>
      <Image className={'block max-desktop:hidden max-tablet:hidden'} src={Desktop} alt={''}></Image>
    </>)
}

export default EditAccountIllustration;