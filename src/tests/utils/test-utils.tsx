import { render } from '@testing-library/react'
import { useRouter } from 'next/router'
import { vi } from 'vitest'

vi.mock('next/router', () => ({
  useRouter: vi.fn().mockReturnValue({
    push: vi.fn(),
  }),
}))

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}))

const customRender = (ui: React.ReactElement) => {
  return render(ui)
}

export * from '@testing-library/react'
export { customRender as render } 