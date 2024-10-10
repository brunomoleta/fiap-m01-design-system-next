import {Button} from "../../../../../../design-system/src";

const HeaderBtns = () => {
  return (
    <>
      <div className={'max-tablet:hidden grid grid-cols-2 gap-spacing-lg max-desktop:gap-spacing-md'}>
        <Button variant={"secondary"}>Clique aqui</Button>
        <Button variant={"outlineGreen"}>Tenho conta</Button>
      </div>
    </>
  )
}

export default HeaderBtns;