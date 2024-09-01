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
      className={`themed-background-style-${headerStyle} px-5 py-24 mx-auto ${customClasses}`}
    >
      <div className='container'>
        <h1 className='sm:text-6xl text-4xl font-medium title-font mb-2 text-white'>
          {title}
        </h1>
        <span className='sm:text-2xl text-xl font-medium body-font leading-text'>
          {subtitle}
        </span>
      </div>
    </header>
  )
}
