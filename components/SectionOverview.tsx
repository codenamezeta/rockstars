import Separator from './Separator'

type SectionOverviewTypes = {
  title: string
  subtitle?: string
  overviewText?: string
  titleColor?: string
  subtitleColor?: string
  separatorColor?: string
  overviewTextColor?: string
  customId?: string
  customClasses?: string
}

export default function SectionOverview({
  title,
  subtitle,
  overviewText,
  titleColor = 'accent',
  subtitleColor = 'foreground',
  separatorColor = 'primary',
  overviewTextColor = 'primary-foreground',
  customId,
  customClasses = '',
}: SectionOverviewTypes): JSX.Element {
  return (
    <div id={customId} className={`mb-12 ${customClasses}`}>
      <h2
        className={`font-soleil font-bold tracking-tight text-4xl sm:text-6xl text-center text-${titleColor}`}
      >
        {title}
      </h2>
      <h3
        className={`text-center my-4 text-3xl title-font text-${subtitleColor}`}
      >
        {subtitle}
      </h3>
      <p
        className={`text-center text-lg leading-relaxed max-w-prose mx-auto text-${overviewTextColor}`}
      >
        {overviewText}
      </p>
      <Separator color={separatorColor} />
    </div>
  )
}
