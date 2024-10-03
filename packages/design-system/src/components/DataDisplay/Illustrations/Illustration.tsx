import NotFoundIllustration from "./404";
import RegisterIllustration from "./Register";
import EditAccountIllustration from "./EditAccount";
import HomeIllustration from "./Home";
import LoginIllustration from "./Login";
import ManIllustration from "./Dashboard/ManIllustration";
import WomanIllustration from "./Dashboard/WomanIllustration";

type Props = {
  chooseImage: '404' | 'register' | 'editAccount' | 'home' | 'login' | 'dashboardMan' | 'dashboardWoman'
}

/** Ilustração que aceita uma prop `chooseImage` para renderizar a imagem necessária. A responsividade já está prevista ;) */
const Illustration = ({chooseImage}: Props) => {
  switch (chooseImage) {
    case '404':
      return <NotFoundIllustration/>
    case 'dashboardMan':
      return <ManIllustration/>
    case 'login':
      return <LoginIllustration/>
    case 'editAccount':
      return <EditAccountIllustration/>
    case 'register':
      return <RegisterIllustration/>
    case 'home':
      return <HomeIllustration/>
    case 'dashboardWoman':
      return <WomanIllustration/>
    default:
      return;
  }
}
export default Illustration