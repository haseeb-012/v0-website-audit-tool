import { twMerge } from 'tailwind-merge'

export function cn(...inputs: (string | undefined | null | false | Record<string, boolean>)[]) {
  return twMerge(
    inputs
      .flat()
      .filter((x) => typeof x === 'string')
      .join(' ')
  )
}
