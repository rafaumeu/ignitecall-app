import { render, screen } from '@/tests/utils/test-utils'
import { describe, expect, it } from 'vitest'
import Home from './index'

describe('Home Page', () => {
  it('should render heading correctly', () => {
    render(<Home />)
    
    expect(
      screen.getByRole('heading', { name: /agendamento descomplicado/i })
    ).toBeInTheDocument()
  })

  it('should render call-to-action text', () => {
    render(<Home />)
    
    expect(
      screen.getByText(/conecte seu calendário e permita que as pessoas marquem agendamentos/i)
    ).toBeInTheDocument()
  })
}) 