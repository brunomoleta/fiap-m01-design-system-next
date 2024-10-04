import {Illustration, StyledLink} from "../../../../design-system/src";
import {heading, subheading} from "$/app/[...not_found]/data";

export default function NotFound() {
  return (
    <>
      <h1 className={'mt-spacing-xl'}>{heading}</h1>
      <p className={'mt-spacing-lg'}>{subheading}</p>
      <StyledLink urlDestination={'/'} className={'mt-spacing-lg'} variant={'primary'}> Ir para página inicial </StyledLink>
      <Illustration chooseImage={"404"}/>
    </>
  )
}