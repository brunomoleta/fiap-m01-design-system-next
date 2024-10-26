import {Illustration, StyledLink} from "../../../../design-system/src";
import {heading, subheading} from "$/app/[...not_found]/data";

export default function NotFound() {
  return (
    <div className={'text-wrap px-spacing-md flex flex-col gap-spacing-xl mb-14'}>
      <div>
      <h1 className={'font-bold text-headline-base mt-spacing-xl'}>{heading}</h1>
      <p className={'mt-spacing-lg'}>{subheading}</p>
      </div>
      <StyledLink urlDestination={'/'} className={'mt-spacing-lg'} variant={'primary'}> Ir para página inicial </StyledLink>

      <Illustration chooseImage={"404"}/>
    </div>
  )
}