import Header from '@/components/Header'
import Enroll from '@/components/Enroll'

export default function EnrollPage(): JSX.Element {
  return (
    <>
      <Header
        title={'Enroll'}
        headerStyle={2}
        subtitle='Rockstars of Tomorrow - La Verne'
      />
      <Enroll />
    </>
  )
}
