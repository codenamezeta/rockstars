import Separator from './Separator'

type SectionOverviewTypes = {
  title: string
  subtitle: string
}

export default function SectionOverview({
  title,
  subtitle,
}: SectionOverviewTypes): JSX.Element {
  return (
    <div className='container'>
      <h2 className='sm:text-3xl text-2xl font-medium text-center title-font text-secondary mt-24 mb-4'>
        {title}
      </h2>
      <p className='text-base leading-relaxed text-center xl:w-2/4 lg:w-3/4 mx-auto text-secondary'>
        {subtitle}
      </p>
      <Separator />
    </div>
  )
}
