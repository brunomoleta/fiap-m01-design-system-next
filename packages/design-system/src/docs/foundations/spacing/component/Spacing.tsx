import Space from "@/docs/foundations/spacing/component/Space";
import {spacing} from "@/tokens";

const Spacing = () => {
  return (
    <section className="pt-spacing-xl grid gap-x-spacing-sm gap-y-8 grid-cols-auto-fill-150">
      {Object.entries(spacing).map(spaceEntry => (
        <Space key={spaceEntry[0]} spaceEntry={spaceEntry} />
      ))}
    </section>
  );
};
export default Spacing;