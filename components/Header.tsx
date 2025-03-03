//* Page Header Component

type HeaderProps = {
  title: string
  subtitle?: string
  date?: string
  customClasses?: string
}

export default function Header({
  title = 'Rockstars La Verne',
  subtitle,
  date,
  customClasses = '',
}: HeaderProps): JSX.Element {
  return (
    <header
      className={`font-anton z-0 px-5 pt-32 md:pt-56 pb-24 ${customClasses}`}
    >
      <div className='container'>
        <h1 className='text-5xl md:text-8xl font-bold mb-2 text-accent themed-text-2'>
          {title}
        </h1>
        <span className='sm:text-2xl text-xl font-medium body-font leading-text block max-w-prose text-white'>
          {subtitle}
        </span>
        {date && (
          <time dateTime={`${date}`}>{new Date(date).toDateString()}</time>
        )}
      </div>
    </header>
  )
}
