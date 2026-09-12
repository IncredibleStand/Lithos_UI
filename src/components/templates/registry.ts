import { Landing1 } from './Landing/1'
import landing1Code from './Landing/1.tsx?raw'

export interface TemplateVariant {
  slug: string
  name: string
  component: React.ComponentType<any>
  code: string
  githubUrl: string
}

export interface TemplateCategory {
  slug: string
  title: string
  variants: TemplateVariant[]
}

export const templateCategories: TemplateCategory[] = [
  {
    slug: 'landing',
    title: 'Landing Pages',
    variants: [
      {
        slug: 'landing-1',
        name: 'SaaS Standard',
        component: Landing1,
        code: landing1Code,
        githubUrl: 'https://github.com/lithosui/Lithos_UI/tree/main/src/components/templates/Landing/1.tsx',
      },
    ],
  },
]
