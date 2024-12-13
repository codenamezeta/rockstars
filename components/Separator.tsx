interface SeparatorProps {
  color?: string
  space?: string
  justify?: string
  customClass?: string
}

export default function Separator({
  color = 'primary',
  space = '6',
  justify = 'center',
  customClass,
}: SeparatorProps): JSX.Element {
  return (
    <div
      className={`flex my-${space} justify-${justify} ${customClass}`}
      aria-hidden='true'
    >
      <div className={`w-24 h-1 rounded-full inline-flex bg-${color}`}></div>
    </div>
  )
}
