//* Page Header Component

type HeaderProps = {
  title: string
  headerStyle: number
  subtitle?: string
  customClasses?: string
}

export default function Header({
  title = 'Rockstars La Verne',
  headerStyle = 1,
  subtitle = '',
  customClasses = '',
}: HeaderProps): JSX.Element {
  return (
    <header
      className={`themed-background-style-${headerStyle} font-anton px-5 pt-32 md:pt-56 pb-24 mx-auto ${customClasses}`}
    >
      <div className='container'>
        <h1 className='text-6xl font-medium mb-2 text-white'>{title}</h1>
        <span className='sm:text-2xl text-xl font-medium body-font leading-text'>
          {subtitle}
        </span>
      </div>
    </header>
  )
}
