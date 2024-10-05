import {Illustration, StyledLink} from "../../../design-system/src";
import { Header } from "$/app/components";
import Footer from "$/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header isLoggedIn={false} />
      <main className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Illustration chooseImage={"home"}/>
        <StyledLink variant={'primary'} >
          teste
        </StyledLink >
      </main>
      <Footer/>
    </>
  );
}
