import Header from '@/components/Header'
import { getArticleById } from '@/lib/strapi'
import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer'

export default async function Article() {
  const { data } = await getArticleById('ubjzz6c1d4deg4mvrdrnmjzx')
  console.log(data)
  const content = data.content as BlocksContent
  return (
    <article>
      <Header
        title={data.title}
        headerStyle={1}
        subtitle={`By ${data.authors.map((author: { username: string }) => author.username).join(', ')}`}
        date={data.publishedAt}
      />
      <main className='max-w-prose mx-auto py-24'>
        <BlocksRenderer content={content} />
      </main>
    </article>
  )
}
