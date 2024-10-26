import {Button} from "../../../../../../design-system/src";

const HeaderBtns = () => {
  return (
    <>
      <div className={'max-tablet:hidden grid grid-cols-2 gap-spacing-lg max-desktop:gap-spacing-md'}>
        <Button variant={"primaryGreen"}>Abrir minha conta</Button>
        <Button variant={"outlineGreen"}>Já tenho conta</Button>
      </div>
    </>
  )
}

export default HeaderBtns;