import React from "react";

import BackgroundColors from "@/docs/foundations/colors/component/backgroundColors/BackgroundColors";
import TextColors from "@/docs/foundations/colors/component/textColors";

const Colors = ({ isBgColors }: { isBgColors: boolean }) => {
  return (
    <section className="pt-spacing-xl grid gap-x-spacing-sm gap-y-8 grid-cols-auto-fill-300">
      {isBgColors ? <BackgroundColors /> : <TextColors />}
    </section>
  );
};

export default Colors;
