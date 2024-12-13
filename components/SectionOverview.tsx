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
  subtitleColor = 'secondary',
  separatorColor = 'primary',
  overviewTextColor = 'secondary',
  customId,
  customClasses,
}: SectionOverviewTypes): JSX.Element {
  return (
    <div id={customId} className={`mb-12 ${customClasses}`}>
      <h2 className={`font-anton text-center text-6xl text-${titleColor}`}>
        {title}
      </h2>
      <h3
        className={`text-center my-4 text-2xl title-font text-${subtitleColor}`}
      >
        {subtitle}
      </h3>
      <p
        className={`text-center text-base leading-relaxed max-w-prose mx-auto text-${overviewTextColor}`}
      >
        {overviewText}
      </p>
      <Separator color={separatorColor} />
    </div>
  )
}
