import { Button, CashIcon, DevicesIcon, GiftIcon, Illustration, StarIcon } from "../../../design-system/src";
import { Header } from "$/app/components";
import Footer from "$/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header isLoggedIn={false} />
      <main className="bg-gradient-to-b from-background-default to-background-fade">
        <div className="flex max-desktop:flex-col items-center justify-center p-4">
          <div className="flex items-center w-[430px] mr-4 max-desktop:mr-0 mb-0 max-desktop:mb-4">
            <p className="text-headline-lg font-semibold text-left">
              Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
            </p>
          </div>
          <div className="flex items-center p-4">
            <Illustration chooseImage={"home"} />
          </div>
          <div className={'hidden max-tablet:block'}>
            <div className=" grid grid-cols-2 gap-spacing-lg">
              <Button variant={"primaryBlack"}>Abrir minha conta</Button>
              <Button variant={"outlineBlack"}>Já tenho conta</Button>
            </div>
          </div>
        </div>
        <p className="text-headline-lg font-semibold text-center">Vantagens do nosso banco:</p>
        <div className="flex justify-center p-4 mt-4 pb-16">
          <div className="grid gap-8 max-w-[1200px] max-[1200px]:grid-cols-2 max-tablet:grid-cols-1 grid-cols-4 items-center justify-items-center">
            <div className="flex flex-col items-center text-center w-[282px]">
              <GiftIcon />
              <p className="text-text-active text-headline-sm mt-2">Conta e cartão gratuitos</p>
              <p className="text-text-gray text-text-base mt-2">Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção</p>
            </div>
            <div className="flex flex-col items-center text-center w-[282px]">
              <CashIcon />
              <p className="text-text-active text-headline-sm mt-2">Saques sem custo</p>
              <p className="text-text-gray text-text-base mt-2">Você pode sacar gratuitamente 4x por mês de qualquer Banco 24</p>
            </div>
            <div className="flex flex-col items-center text-center w-[282px]">
              <StarIcon />
              <p className="text-text-active text-headline-sm mt-2">Programa de pontos</p>
              <p className="text-text-gray text-text-base mt-2">Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!</p>
            </div>
            <div className="flex flex-col items-center text-center w-[282px]">
              <DevicesIcon />
              <p className="text-text-active text-headline-sm mt-2">Seguro Dispositivos</p>
              <p className="text-text-gray text-text-base mt-2">Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
