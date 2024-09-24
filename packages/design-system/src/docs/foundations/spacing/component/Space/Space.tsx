interface ISpacingProps {
  spaceEntry: [string, string];
}

const Spacing = ({ spaceEntry: [key, value] } : ISpacingProps) => {
  return (
    <div className={`flex flex-col w-fit`}>
      <canvas className={`h-16 w-${key} bg-background-accent`}/>
      <div className={`flex flex-col`}>
        <span className={`w-full font-semibold`}>{key.toUpperCase()}</span>
        <span>{value}</span>
      </div>
    </div>
  )
}

export default Spacing;