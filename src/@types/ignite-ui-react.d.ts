import '@rafaumeu-ignite-ui/react'
import type { ReactNode } from 'react'

declare module '@rafaumeu-ignite-ui/react' {
  export interface TextInputProps {
    size?: 'sm' | 'md' | 'lg'
    prefix?: string
    placeholder?: string
    disabled?: boolean
    type?: string
    step?: number
    children?: ReactNode
  }
  export interface CheckBoxProps {
    onCheckedChange?: (checked: boolean) => void
    checked?: boolean
    children?: ReactNode
  }
  export interface AvatarProps {
    src?: string
    alt?: string
    referrerPolicy?: string
  }
}
