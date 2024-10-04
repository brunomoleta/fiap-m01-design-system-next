import {FullLogoIcon, InstagramIcon, WhatsappIcon, YoutubeIcon} from "../../../../../design-system/src";

const Footer = () => {
  return (
    <footer className={'bg-text-default'}>
      footerTest
      <FullLogoIcon width={146} height={32} fill={"text-revert"}/>
      <WhatsappIcon width={30} height={30} fill={"text-revert"}/>
      <YoutubeIcon width={30} height={30} fill={"text-revert"}/>
      <InstagramIcon width={30} height={30} fill={"text-revert"}/>
    </footer>
  )
};

export default Footer