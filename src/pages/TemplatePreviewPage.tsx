import { useParams } from 'react-router-dom'
import { ComingSoon } from '../showroom/sections/ComingSoon'
import { templateCategories } from '../components/templates/registry'

export const TemplatePreviewPage = () => {
  const { slug } = useParams<{ slug: string }>()

  // Flatten the registry to find the specific variant by slug
  const allVariants = templateCategories.flatMap((c) => c.variants)
  const variant = allVariants.find((v) => v.slug === slug)

  if (!slug || !variant) {
    return (
      <ComingSoon
        eyebrow="404 NOT FOUND"
        title="Unknown Template"
        description="The template preview you're looking for doesn't exist in the registry or hasn't been built yet."
        primaryAction={{ label: 'Back to Templates', to: '/templates' }}
      />
    )
  }

  const Template = variant.component

  return (
    <div className="min-h-screen bg-(--lithos-bg) text-(--lithos-text)">
      <Template />
    </div>
  )
}
