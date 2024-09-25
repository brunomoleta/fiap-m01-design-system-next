import Space from "@/docs/foundations/spacing/component/Space";
import {spacing} from "@/tokens";

const Spacing = () => {
  return (
    <section className="pt-spacing-xl grid gap-x-spacing-sm gap-y-8 grid-cols-auto-fill-150">
      <Space spaceEntry={['spacing-sm', spacing['spacing-sm']]}>
        <canvas className={`h-16 w-spacing-sm bg-background-accent`}/>
      </Space>
      <Space spaceEntry={['spacing-md', spacing['spacing-md']]}>
        <canvas className={`h-16 w-spacing-md bg-background-accent`}/>
      </Space>
      <Space spaceEntry={['spacing-lg', spacing['spacing-lg']]}>
        <canvas className={`h-16 w-spacing-lg bg-background-accent`}/>
      </Space>
      <Space spaceEntry={['spacing-xl', spacing['spacing-xl']]}>
        <canvas className={`h-16 w-spacing-xl bg-background-accent`}/>
      </Space>
    </section>
  );
};
export default Spacing;