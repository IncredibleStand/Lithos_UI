import { axe, toHaveNoViolations } from 'jest-axe'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { flip, shift } from '@floating-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  usePopoverContext,
} from '../../../components/ui/Popover'

vi.mock('@floating-ui/react', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@floating-ui/react')>()
  return {
    ...actual,
    flip: vi.fn(actual.flip),
    shift: vi.fn(actual.shift),
  }
})

expect.extend(toHaveNoViolations)

describe('Popover Component', () => {
  it('should pass accessibility audit (axe) when closed and open', async () => {
    const user = userEvent.setup()

    const { container } = render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent portaled={false}>
          <h2>Popover Title</h2>
          <p>Popover content body text.</p>
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>
    )

    let results = await axe(container)
    expect(results).toHaveNoViolations()

    const trigger = screen.getByRole('button', { name: 'Open Popover' })
    await user.click(trigger)

    results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders trigger and keeps content hidden by default when closed', () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent portaled={false}>Popover Body Content</PopoverContent>
      </Popover>
    )

    const trigger = screen.getByRole('button', { name: 'Open Popover' })
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveAttribute('data-state', 'closed')
    expect(screen.queryByText('Popover Body Content')).not.toBeInTheDocument()
  })

  it('opens content on trigger click and updates data-state', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent portaled={false}>Popover Body Content</PopoverContent>
      </Popover>
    )

    const trigger = screen.getByRole('button', { name: 'Open Popover' })
    await user.click(trigger)

    expect(trigger).toHaveAttribute('data-state', 'open')
    expect(screen.getByText('Popover Body Content')).toBeInTheDocument()
  })

  it('closes open popover when clicking trigger again (uncontrolled mode)', async () => {
    const user = userEvent.setup()

    render(
      <Popover initialOpen>
        <PopoverTrigger>Toggle Popover</PopoverTrigger>
        <PopoverContent portaled={false}>Popover Body Content</PopoverContent>
      </Popover>
    )

    const trigger = screen.getByRole('button', { name: 'Toggle Popover' })
    expect(screen.getByText('Popover Body Content')).toBeInTheDocument()

    await user.click(trigger)

    expect(screen.queryByText('Popover Body Content')).not.toBeInTheDocument()
    expect(trigger).toHaveAttribute('data-state', 'closed')
  })

  it('respects controlled open state and fires onOpenChange callback', async () => {
    const user = userEvent.setup()
    const handleOpenChange = vi.fn()

    const { rerender } = render(
      <Popover open={false} onOpenChange={handleOpenChange}>
        <PopoverTrigger>Controlled Trigger</PopoverTrigger>
        <PopoverContent portaled={false}>Controlled Content</PopoverContent>
      </Popover>
    )

    const trigger = screen.getByRole('button', { name: 'Controlled Trigger' })
    await user.click(trigger)

    expect(handleOpenChange).toHaveBeenCalledTimes(1)
    expect(handleOpenChange).toHaveBeenCalledWith(true, expect.anything(), expect.anything())
    expect(screen.queryByText('Controlled Content')).not.toBeInTheDocument()

    rerender(
      <Popover open={true} onOpenChange={handleOpenChange}>
        <PopoverTrigger>Controlled Trigger</PopoverTrigger>
        <PopoverContent portaled={false}>Controlled Content</PopoverContent>
      </Popover>
    )

    expect(screen.getByText('Controlled Content')).toBeInTheDocument()
  })

  it('closes popover when clicking PopoverClose button', async () => {
    const user = userEvent.setup()

    render(
      <Popover initialOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent portaled={false}>
          <p>Inside Popover</p>
          <PopoverClose>Close Popover</PopoverClose>
        </PopoverContent>
      </Popover>
    )

    expect(screen.getByText('Inside Popover')).toBeInTheDocument()

    const closeButton = screen.getByRole('button', { name: 'Close Popover' })
    await user.click(closeButton)

    expect(screen.queryByText('Inside Popover')).not.toBeInTheDocument()
  })

  it('supports asChild composition on PopoverTrigger and PopoverClose', async () => {
    const user = userEvent.setup()
    const handleCustomCloseClick = vi.fn()

    render(
      <Popover>
        <PopoverTrigger asChild>
          <button type="button">Custom Button Trigger</button>
        </PopoverTrigger>
        <PopoverContent portaled={false}>
          <PopoverClose asChild onClick={handleCustomCloseClick}>
            <button type="button">Custom Close Element</button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
    )

    const triggerBtn = screen.getByRole('button', { name: 'Custom Button Trigger' })
    expect(triggerBtn).toHaveAttribute('data-state', 'closed')

    await user.click(triggerBtn)
    expect(triggerBtn).toHaveAttribute('data-state', 'open')

    const customClose = screen.getByRole('button', { name: 'Custom Close Element' })
    await user.click(customClose)

    expect(handleCustomCloseClick).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('button', { name: 'Custom Close Element' })).not.toBeInTheDocument()
  })

  it('configures flip and shift middleware so content can reposition near a viewport edge', async () => {
    render(
      <Popover initialOpen>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent portaled={false}>Popover Body Content</PopoverContent>
      </Popover>
    )

    await screen.findByText('Popover Body Content')

    expect(flip).toHaveBeenCalled()
    expect(shift).toHaveBeenCalled()
  })

  it('throws an error when usePopoverContext is used outside <Popover />', () => {
    const TestComponent = () => {
      usePopoverContext()
      return null
    }

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => render(<TestComponent />)).toThrow('Popover components must be wrapped in <Popover />')

    consoleErrorSpy.mockRestore()
  })
})
