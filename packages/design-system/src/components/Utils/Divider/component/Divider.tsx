type Props = {
  /** Cor */
  color?: "background-accent" | "text-active" | "text-revert";
  /** O elemento é semântico? */
  isSemantic: boolean;
};

/** Serve para Separar componentes visualmente. */
const Divider = ({ color = "text-revert", isSemantic }: Props) => {
  const colorClass = `bg-${color}`;

  return !isSemantic ? (
    <div className={`h-px w-full ${colorClass}`} />
  ) : (
    <hr className={`h-px w-full border-0 ${colorClass}`} />
  );
};

export default Divider;
