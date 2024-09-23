

type Props = {
  /** Divider color */
  color?: 'light' | 'medium' | 'green';
  /** Should this line have a semantic meaning? */
  isSemantic: boolean;
};

const Divider = ({ color = 'light', isSemantic }: Props) => {
  return !isSemantic ? <div color={color} /> : <hr color={color} />;
};

export default Divider;
