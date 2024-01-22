import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import * as React from 'react'

import { cn } from '@/lib/utils'

import CodeSnippet from './CodeSnippet/code-snippet'
import FunctionalCounter from './counter'

const components = {
  h1: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadElement>) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadElement>) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 pb-1 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadElement>) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadElement>) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLHeadElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({
    className,
    ...props
  }: React.HtmlHTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLLIElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HtmlHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn('[&>*]:text-accent mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-lg border', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('even:bg-muted m-0 border-t p-0', className)}
      {...props}
    />
  ),
  th: ({
    className,
    ...props
  }: React.HtmlHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({
    className,
    ...props
  }: React.HtmlHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  // pre: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLPreElement>) => (
  //   <pre
  //     className={cn(
  //       'mb-4 mt-6 overflow-x-auto rounded-lg bg-black p-4 [&>code]:bg-transparent',
  //       className,
  //     )}
  //     {...props}
  //   />
  // ),
  pre: CodeSnippet,
  code: ({ className, ...props }: React.HtmlHTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'bg-accent/10 text-accent relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className,
      )}
      {...props}
    />
  ),
  Image,
  CodeSnippet,
  FunctionalCounter,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
