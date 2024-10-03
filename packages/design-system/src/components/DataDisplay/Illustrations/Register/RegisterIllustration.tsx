import Desktop from "../../../../assets/register/cadastro-desktop.svg";
import Mobile from "../../../../assets/register/IlustraçãoCadastro-mobile.svg";
import Image from "next/image";

/** Ilustração renderizada junto ao registro de novo usuário. */
const RegisterIllustration = () => {
  return (
    <>
      <Image className={'hidden max-tablet:block'} src={Mobile} alt={''}></Image>
      <Image className={'max-tablet:hidden'} src={Desktop} alt={''}></Image>
    </>
  )
}

export default RegisterIllustration;