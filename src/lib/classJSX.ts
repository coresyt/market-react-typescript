import { twMerge } from 'tailwind-merge'
import clsx, { type ClassValue } from 'clsx'

const className = (...cls: ClassValue[]) => twMerge(clsx(...cls))

export default className
