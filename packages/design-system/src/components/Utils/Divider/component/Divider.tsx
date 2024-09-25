

type Props = {
  /** Cor */
  color?: 'light' | 'medium' | 'green';
  /** O elemento é semântico? */
  isSemantic: boolean;
};

/** Serve para Separar componentes visualmente. */
const Divider = ({ color = 'light', isSemantic }: Props) => {
  return !isSemantic ? <div color={color} /> : <hr color={color} />;
};

export default Divider;
