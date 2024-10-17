import { FullLogoIcon, InstagramIcon, WhatsappIcon, YoutubeIcon } from "../../../../../design-system/src";

const Footer = () => {
  return (
    <footer className={'bg-black text-white py-10'}>

      {/* <div className="max-w-6xl mx-auto  flex justify-between items-center">
        <div className="flex-1 text-left space-y-4">
          <p className="font-semibold">Serviços</p>
          <p>Conta corrente</p>
          <p>Conta PJ</p>
          <p>Cartão de crédito</p>
        </div>
        <div className="flex-1 text-left space-y-4">
          <p className="font-semibold">Contato</p>
          <p>0800 004 250 08</p>
          <p>meajuda@bytebank.com.br</p>
          <p>ouvidoria@bytebank.com.br</p>
        </div>
        <div className="flex-1 space-y-4">
          <p className="font-semibold text-center">Desenvolvido por Alura</p>
          <div className="flex justify-center">
            <FullLogoIcon width={145} height={32} fill={"text-revert"} />
          </div>
          <div className="flex justify-center space-x-4">
            <WhatsappIcon width={30} height={30} fill={"text-revert"} />
            <YoutubeIcon width={30} height={30} fill={"text-revert"} />
            <InstagramIcon width={30} height={30} fill={"text-revert"} />
          </div>
        </div>
      </div> */}
      {/* <div className="flex justify-center">
        <div className="grid gap-8 max-tablet:grid-cols-1 grid-cols-3 items-center justify-items-center">
          <div className="flex-1 text-left space-y-4 w-[282px]">
            <p className="font-semibold">Serviços</p>
            <p>Conta corrente</p>
            <p>Conta PJ</p>
            <p>Cartão de crédito</p>
          </div>
          <div className="flex-1 text-left space-y-4 w-[282px]">
            <p className="font-semibold">Contato</p>
            <p>0800 004 250 08</p>
            <p>meajuda@bytebank.com.br</p>
            <p>ouvidoria@bytebank.com.br</p>
          </div>
          <div className="flex-1 space-y-4 w-[282px]">
            <p className="font-semibold text-left">Desenvolvido por Alura</p>
            <div className="flex justify-normal">
              <FullLogoIcon width={145} height={32} fill={"text-revert"} />
            </div>
            <div className="flex justify-normal space-x-4">
              <WhatsappIcon width={30} height={30} fill={"text-revert"} />
              <YoutubeIcon width={30} height={30} fill={"text-revert"} />
              <InstagramIcon width={30} height={30} fill={"text-revert"} />
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex justify-center bg-black py-10">
        <div className="grid gap-8 max-w-6xl w-full max-tablet:w-auto max-tablet:mx-auto max-tablet:grid-cols-1 grid-cols-3 items-center justify-items-center px-4">
          <div className="text-left space-y-4 w-full max-w-xs">
            <p className="font-semibold">Serviços</p>
            <p>Conta corrente</p>
            <p>Conta PJ</p>
            <p>Cartão de crédito</p>
          </div>
          <div className="text-left space-y-4 w-full max-w-xs max-tablet:mt-2">
            <p className="font-semibold">Contato</p>
            <p>0800 004 250 08</p>
            <p>meajuda@bytebank.com.br</p>
            <p>ouvidoria@bytebank.com.br</p>
          </div>
          <div className="text-left space-y-4 w-full max-w-xs max-tablet:mt-2">
            <p className="font-semibold">Desenvolvido por Alura</p>
            <div className="flex justify-start">
              <FullLogoIcon width={145} height={32} fill={"text-revert"} />
            </div>
            <div className="flex justify-start space-x-4">
              <WhatsappIcon width={30} height={30} fill={"text-revert"} />
              <YoutubeIcon width={30} height={30} fill={"text-revert"} />
              <InstagramIcon width={30} height={30} fill={"text-revert"} />
            </div>
          </div>
        </div>
      </div>



    </footer>
  )
};

export default Footer