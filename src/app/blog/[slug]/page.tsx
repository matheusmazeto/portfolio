import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import { Mdx } from '@/components/mdx-components'
import ThemeSwitch from '@/components/theme-switch'

async function loadBlogPost(slug: string) {
  const post = allPosts.find((p) => p.slug === slug)

  if (!post) {
    // throw new Error(`Post with slug ${slug} not found`)
    notFound()
  }

  return post
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await loadBlogPost(params.slug)
  console.log({ post })

  return (
    <div>
      <ThemeSwitch />
      <Mdx code={post.body.code} />
    </div>
  )
}
