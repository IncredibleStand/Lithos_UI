export const tooltipPropsData = [
  {
    name: 'initialOpen',
    type: 'boolean',
    default: 'false',
    description: 'The initial open state of the tooltip in uncontrolled mode.',
  },
  {
    name: 'placement',
    type: 'Placement',
    default: '"top"',
    description:
      'The preferred placement of the tooltip relative to the trigger. (e.g., top, bottom, left-end, right-start)',
  },
  {
    name: 'open',
    type: 'boolean',
    default: 'undefined',
    description: 'The controlled open state of the tooltip. Must be used with onOpenChange.',
  },
  {
    name: 'onOpenChange',
    type: '(open: boolean) => void',
    default: 'undefined',
    description: 'Event handler called when the open state changes.',
  },
  {
    name: 'offset',
    type: 'number',
    default: '4',
    description: 'The distance in pixels between the tooltip and the trigger.',
  },
]

export const tooltipTriggerPropsData = [
  {
    name: 'asChild',
    type: 'boolean',
    default: 'false',
    description: 'If true, merges its props and refs onto its child element instead of rendering a wrapper <button>.',
  },
  {
    name: 'className',
    type: 'LithosClass',
    description: 'Additional CSS classes to apply to the trigger.',
  },
]

export const tooltipContentPropsData = [
  {
    name: 'variant',
    type: '"default" | "primary" | "inverse"',
    default: '"default"',
    description: 'The visual style variant of the tooltip.',
  },
  {
    name: 'portaled',
    type: 'boolean',
    default: 'true',
    description: 'Whether to render the tooltip content in a React portal.',
  },
  {
    name: 'className',
    type: 'string',
    default: 'undefined',
    description: 'Additional CSS classes to apply to the content container.',
  },
]
