//* Page Header Component

type HeaderProps = {
  title: string
  headerStyle: number
  subtitle?: string
  date?: string
  customClasses?: string
}

export default function Header({
  title = 'Rockstars La Verne',
  headerStyle = 1,
  subtitle,
  date,
  customClasses = '',
}: HeaderProps): JSX.Element {
  return (
    <header
      className={`themed-background-style-${headerStyle} font-anton z-0 px-5 pt-32 md:pt-56 pb-24 ${customClasses}`}
    >
      <div className='container'>
        <h1 className='text-5xl md:text-8xl font-bold mb-2 text-accent themed-text-1'>
          {title}
        </h1>
        <span className='sm:text-2xl text-xl font-medium body-font leading-text block w-full text-white'>
          {subtitle}
        </span>
        {date && (
          <time dateTime={`${date}`}>{new Date(date).toDateString()}</time>
        )}
      </div>
    </header>
  )
}
