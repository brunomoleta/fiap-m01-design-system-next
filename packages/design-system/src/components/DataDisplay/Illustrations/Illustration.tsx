import NotFoundIllustration from "./404";
import RegisterIllustration from "./Register";
import EditAccountIllustration from "./EditAccount";
import HomeIllustration from "./Home";
import LoginIllustration from "./Login";

type Props = {
  chooseImage: '404' | 'register' | 'editAccount' | 'home' | 'login'
}

/** Ilustração para ser renderizada. A responsividade já está prevista ;) */
const Illustration = ({chooseImage}: Props) => {
  switch (chooseImage) {
    case '404':
      return <NotFoundIllustration/>
    case 'login':
      return <LoginIllustration/>
    case 'editAccount':
      return <EditAccountIllustration/>
    case 'register':
      return <RegisterIllustration/>
    case 'home':
      return <HomeIllustration/>
    default:
      return;
  }
}
export default Illustration