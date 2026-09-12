import { Card, CardContent } from '../../ui/Card'
import { Button } from '../../ui/Button'
import { cn } from '../../../utils/cn'

interface PricingFeature {
  label: string
  included: boolean
}

interface PricingPlan {
  key: string
  title: string
  price: string
  highlighted: boolean
  features: PricingFeature[]
  goal: string
  cta: string
}

// Replace this array with data from your API
const plans: PricingPlan[] = [
  {
    key: 'starter',
    title: 'STARTER',
    price: '$29',
    highlighted: false,
    features: [
      { label: 'Up to 5 Users', included: true },
      { label: 'Basic Analytics', included: true },
      { label: '24/7 Support', included: false },
      { label: 'Custom Domain', included: false },
    ],
    goal: 'Perfect for small teams getting started.',
    cta: 'Start Free Trial',
  },
  {
    key: 'pro',
    title: 'PRO',
    price: '$79',
    highlighted: true,
    features: [
      { label: 'Up to 20 Users', included: true },
      { label: 'Advanced Analytics', included: true },
      { label: '24/7 Support', included: true },
      { label: 'Custom Domain', included: false },
    ],
    goal: 'For growing businesses that need more power.',
    cta: 'Upgrade to Pro',
  },
  {
    key: 'enterprise',
    title: 'ENTERPRISE',
    price: '$199',
    highlighted: false,
    features: [
      { label: 'Unlimited Users', included: true },
      { label: 'Custom Analytics', included: true },
      { label: '24/7 Priority Support', included: true },
      { label: 'Custom Domain', included: true },
    ],
    goal: 'Maximum performance and dedicated support.',
    cta: 'Contact Sales',
  },
]

export const Pricing1 = () => {
  return (
    <section id="pricing" className="bg-(--lithos-surface) py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-center text-(--lithos-text) md:text-5xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg font-bold leading-none text-center text-(--lithos-text) opacity-70 md:text-xl">
          Choose the plan that fits your needs.
        </p>

        <div className="mt-20 -m-4 flex flex-wrap justify-center items-stretch">
          {plans.map((tier) => {
            const highlighted = tier.highlighted === true

            return (
              <Card
                key={tier.key}
                variant={highlighted ? 'solid' : 'default'}
                interactive={true}
                className={cn(
                  'm-4 flex w-[calc(100%-2rem)] md:w-[calc(33.333%-2rem)] flex-col',
                  highlighted && 'border-4 md:scale-105 md:z-10'
                )}
              >
                <CardContent spacing="lg" className="flex flex-col h-full">
                  <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">{tier.title}</h3>
                  <p className="mt-4 text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none">
                    {tier.price}
                    <span className="text-xl opacity-70">/mo</span>
                  </p>
                  <p className="mt-4 text-base font-medium leading-snug">{tier.goal}</p>

                  <div className="mt-8 flex-1">
                    <ul>
                      {tier.features &&
                        tier.features.map((feature, i) => (
                          <li
                            key={`${tier.key}-f-${i}`}
                            className={cn(
                              'leading-snug font-bold uppercase tracking-tighter',
                              !feature.included && 'line-through opacity-50',
                              i < tier.features.length - 1 && 'mb-3'
                            )}
                          >
                            {feature.included ? '✓ ' : '✕ '}
                            {feature.label}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button variant={highlighted ? 'secondary' : 'primary'} fullWidth>
                      {tier.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
