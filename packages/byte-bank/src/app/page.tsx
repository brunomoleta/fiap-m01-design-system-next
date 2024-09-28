import {HamburgerIcon, LogoIcon} from '../../../design-system/src'

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      bytebank
      <div className={'bg-background-accent'}>asopidkasdpoaskd</div>
      <LogoIcon width={30} height={30} fill={'background-accent'}/>
      <HamburgerIcon height={20} width={30} fill={'background-accent'}/>
    </div>
  );
}
