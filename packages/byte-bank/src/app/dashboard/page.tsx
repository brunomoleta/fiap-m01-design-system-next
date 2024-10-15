import { Header } from "$/app/components";
import Footer from "$/app/components/Footer";
import {  WidgetContainer } from "../../../../design-system/src";
import { Balance, Extract, Transactions } from "../components";

export default function Home() {
  return (
    <>
      <Header isLoggedIn={true} />
      <main className="p-spacing-lg flex gap-spacing-lg max-desktop:flex-col">
        <div className="max-desktop:hidden">
          <WidgetContainer
            backgroundColor="background-light-grey"
            title="Extrato"
          >
            teste
          </WidgetContainer>
        </div>

        <div className="flex flex-col gap-spacing-lg grow">
          <Balance />

          <Extract />
        </div>

        <Transactions />
      </main>
      <Footer/>
    </>
  );
}
