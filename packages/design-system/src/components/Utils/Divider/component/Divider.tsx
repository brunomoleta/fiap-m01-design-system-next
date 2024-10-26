type Props = {
  /** Cor */
  color?: "background-accent" | "text-active" | "text-revert" | 'text-default';
  /** O elemento é semântico? */
  isSemantic: boolean;
};

/** Serve para Separar componentes visualmente. */
const Divider = ({ color = "text-revert", isSemantic }: Props) => {

  const returnStyles = () => {
    if (!isSemantic){
      if (color==='background-accent')return 'h-px w-full bg-background-accent'
      if (color==='text-default')return 'h-px w-full bg-text-default'
      if (color==='text-active')return 'h-px w-full bg-text-active'
      if (color==='text-revert')return 'h-px w-full bg-text-revert'
    }
    else {
      if (color==='background-accent')return 'border-0 h-px w-full bg-background-accent'
      if (color==='text-default')return 'h-px w-full bg-text-default'
      if (color==='text-active')return 'border-0 h-px w-full bg-text-active'
      if (color==='text-revert')return 'border-0 h-px w-full bg-text-revert'
    }
  }

  return !isSemantic ? (
    <div className={returnStyles()} />
  ) : (
    <hr className={returnStyles()} />
  );
};

export default Divider;
