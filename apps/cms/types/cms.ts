export interface Image {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  size: number
  width: number
  height: number
  caption: string
  formats: {
    large?: ImageFormat
    small?: ImageFormat
    medium?: ImageFormat
    thumbnail?: ImageFormat
  }
  provider: string
  createdAt: string
  updatedAt: string
  previewUrl: null | string
  alternativeText: string
  provider_metadata: null | any
}

interface TextNode {
  text: string
  type: 'text'
  bold?: boolean
  underline?: boolean
  italic?: boolean
  strikethrough?: boolean
  code?: boolean
}

interface LinkNode {
  url: string
  type: 'link'
  children: TextNode[]
}

interface ListItemNode {
  type: 'list-item'
  children: (TextNode | LinkNode)[]
}

interface ImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null | string
  size: number
  width: number
  height: number
}

interface ImageNode {
  type: 'image'
  image: Image
  children: TextNode[]
}

type HeadingNode = {
  type: 'heading'
  level: number
  children: (TextNode | LinkNode | ImageNode)[]
}

type ListNode = {
  type: 'list'
  format?: 'unordered' | 'ordered'
  children: ListItemNode[]
}

type ParagraphNode = {
  type: 'paragraph'
  children: (TextNode | LinkNode | ImageNode)[]
}

type QuoteNode = {
  type: 'quote'
  children: (TextNode | LinkNode | ImageNode)[]
}

type BlockNode =
  HeadingNode 
  | ListNode
  | ParagraphNode
  | QuoteNode
  | TextNode
  | LinkNode
  | ImageNode
  | ListItemNode

export type RichTextInput = BlockNode[]
