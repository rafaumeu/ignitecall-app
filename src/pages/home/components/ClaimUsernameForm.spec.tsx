import { render, screen, waitFor } from '@/tests/utils/test-utils'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/router'
import { describe, expect, it, vi } from 'vitest'
import { ClaimUserNameForm } from './ClaimUsernameForm'

const pushMock = vi.fn().mockImplementation(() => new Promise(resolve => setTimeout(resolve, 500)))

vi.mock('next/router', () => ({
  useRouter: vi.fn().mockReturnValue({
    push: pushMock,
  }),
}))

describe('ClaimUsernameForm', () => {
  it('should render initial state correctly', () => {
    render(<ClaimUserNameForm />)

    expect(screen.getByText('Digite o nome do usuário desejado')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('seu-usuário')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reservar/i })).toBeEnabled()
  })

  it('should disable submit button while submitting', async () => {
    render(<ClaimUserNameForm />)

    const button = screen.getByRole('button', { name: /reservar/i })
    const input = screen.getByPlaceholderText('seu-usuário')

    await userEvent.type(input, 'johndoe')
    const submitPromise = userEvent.click(button)
    
    await waitFor(() => {
      expect(button).toBeDisabled()
    })
    
    await submitPromise
  })

  it('should transform username to lowercase before submitting', async () => {
    const router = useRouter()
    render(<ClaimUserNameForm />)

    const input = screen.getByPlaceholderText('seu-usuário')
    const button = screen.getByRole('button')

    await userEvent.type(input, 'JohnDoe')
    await userEvent.click(button)

    expect(router.push).toHaveBeenCalledWith('/register?username=johndoe')
  })

  it('should show error when username is invalid', async () => {
    render(<ClaimUserNameForm />)

    const input = screen.getByPlaceholderText('seu-usuário')
    const button = screen.getByRole('button')

    await userEvent.type(input, 'a')
    await userEvent.click(button)

    expect(
      await screen.findByText('O usuário deve ter no mínimo 3 caracteres'),
    ).toBeInTheDocument()
  })

  it('should show error when username has special characters', async () => {
    render(<ClaimUserNameForm />)

    const input = screen.getByPlaceholderText('seu-usuário')
    const button = screen.getByRole('button')

    await userEvent.type(input, 'john@doe')
    await userEvent.click(button)

    expect(
      await screen.findByText('O usuário deve ter apenas letras e hifens'),
    ).toBeInTheDocument()
  })

  it('should navigate to register when form is valid', async () => {
    const router = useRouter()
    render(<ClaimUserNameForm />)

    const input = screen.getByPlaceholderText('seu-usuário')
    const button = screen.getByRole('button')

    await userEvent.type(input, 'johndoe')
    await userEvent.click(button)

    expect(router.push).toHaveBeenCalledWith('/register?username=johndoe')
  })
}) 